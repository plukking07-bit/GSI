import nodemailer, { Transporter } from 'nodemailer';

let transporter: Transporter | null = null;
let isTestAccount = false;

// Function to initialize email transporter
async function initializeTransporter() {
    if (transporter) return;

    const hasRealCredentials =
        process.env.EMAIL_USER &&
        process.env.EMAIL_PASSWORD &&
        !process.env.EMAIL_USER.includes('your-email');

    if (hasRealCredentials) {
        // Production: Use Gmail
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        console.log('✓ Email service configured: Gmail');
    } else {
        // Development: Use Ethereal Email (NodeMailer test account)
        try {
            const testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: testAccount.smtp.host,
                port: testAccount.smtp.port,
                secure: testAccount.smtp.secure,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
            isTestAccount = true;
            console.log('✓ Email service configured: Ethereal (Development)');
            console.log('  Test account:', testAccount.user);
        } catch (error) {
            console.error('Failed to create email transporter:', error);
            throw error;
        }
    }
}

// Initialize on module load
initializeTransporter().catch(console.error);

interface EmailOptions {
    to: string;
    subject: string;
    html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
    try {
        await initializeTransporter();
        
        if (!transporter) {
            throw new Error('Email transporter is not initialized');
        }
        
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.EMAIL_USER || 'noreply@gsi.th',
            to,
            subject,
            html,
        });
        
        console.log('✓ Email sent to:', to);
        
        // For development test accounts, log the preview URL
        if (isTestAccount) {
            const previewUrl = nodemailer.getTestMessageUrl(info);
            console.log('  Preview URL:', previewUrl);
        }
        
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('✗ Error sending email:', error);
        throw error;
    }
}

export async function sendVerificationEmail(email: string, token: string, baseUrl: string) {
    const verificationUrl = `${baseUrl}/verify-email?token=${token}`;
    const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">ยืนยันอีเมล</h2>
            <p style="color: #666; font-size: 14px;">
                เพื่อให้สำเร็จการลงทะเบียน กรุณายืนยันอีเมลของคุณโดยคลิกปุ่มด้านล่าง
            </p>
            <div style="margin: 30px 0;">
                <a href="${verificationUrl}" style="
                    display: inline-block;
                    padding: 12px 30px;
                    background-color: #4CAF50;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                ">ยืนยันอีเมล</a>
            </div>
            <p style="color: #999; font-size: 12px;">
                หรือคัดลอกลิงก์ด้านล่างวางในบราวเซอร์ของคุณ:<br/>
                <a href="${verificationUrl}" style="color: #4CAF50;">${verificationUrl}</a>
            </p>
            <p style="color: #999; font-size: 12px; margin-top: 30px;">
                ลิงก์นี้จะหมดอายุใน 24 ชั่วโมง
            </p>
            <p style="color: #999; font-size: 12px;">
                ถ้าคุณไม่ได้สร้างบัญชี กรุณาไม่สนใจอีเมลนี้
            </p>
        </div>
    `;

    return sendEmail({
        to: email,
        subject: 'ยืนยันอีเมลของคุณ - Green School Index',
        html,
    });
}

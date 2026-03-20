import crypto from 'crypto';

export function generateVerificationToken(): string {
    return crypto.randomBytes(32).toString('hex');
}

export function getTokenExpiry(): Date {
    const now = new Date();
    now.setHours(now.getHours() + 24); // Token expires in 24 hours
    return now;
}

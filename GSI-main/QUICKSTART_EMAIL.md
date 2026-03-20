# Quick Start: Email Verification Setup

## 1. Set Environment Variables

Add to `.env`:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
NEXTAUTH_URL=http://localhost:3000
```

## 2. Gmail Setup (if using Gmail)

1. Go to [Gmail Security Settings](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication
3. Go to "App passwords"
4. Select "Mail" and "Windows Computer"
5. Copy the generated password to `EMAIL_PASSWORD`

## 3. Test the System

Register a new user:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-test-email@gmail.com",
    "password": "test123456"
  }'
```

Check your email for verification link and click it.

## 4. Try Login

Go to `/login` and try logging in:
- **Before verification**: You'll get an error "please verify your email first"
- **After verification**: You'll be logged in and redirected

## Key API Endpoints

- `POST /api/auth/register` - Register with email verification
- `GET /api/auth/verify-email?token=...` - Verify email (from link)
- `POST /api/auth/verify-email` - Verify email (from code)
- `POST /api/auth/resend-verification` - Resend verification email
- `POST /api/auth/login` - Login (checks email verified)

## Files Added

```
src/lib/
  ├── email.ts                   # Email sending utility
  └── tokenUtils.ts              # Token generation

src/app/
  ├── api/auth/
  │   ├── verify-email/route.ts      # Email verification endpoint
  │   ├── resend-verification/route.ts
  │   ├── register/route.ts           # Updated
  │   └── login/route.ts              # Updated
  └── verify-email/page.tsx       # Verification page UI
```

## Troubleshooting

**Email not sending?**
- Check `.env` variables are correct
- Verify Gmail App Password (not regular password)
- Check internet connection

**Token not working?**
- Token expires after 24 hours
- Check database migration ran: `npx prisma migrate dev`
- Token must be copied exactly from email

**Compilation errors?**
- Run: `npx prisma generate`
- Restart TS Server in VS Code

## Next Steps

- Customize email templates in `src/lib/email.ts`
- Add rate limiting for resend requests
- Set up admin controls to manage unverified accounts

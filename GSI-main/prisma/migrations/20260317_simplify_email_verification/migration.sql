-- Drop old email verification columns and add new ones
ALTER TABLE "users" DROP COLUMN IF EXISTS "email_verified";
ALTER TABLE "users" DROP COLUMN IF EXISTS "email_verification_token";
ALTER TABLE "users" DROP COLUMN IF EXISTS "email_verification_token_expires";

-- Add new email verification fields
ALTER TABLE "users" ADD COLUMN "emailVerified" TIMESTAMP(3);
ALTER TABLE "users" ADD COLUMN "verifyToken" TEXT;

-- Create unique constraint on verifyToken (allows NULL)
CREATE UNIQUE INDEX "users_verifyToken_key" ON "users"("verifyToken");

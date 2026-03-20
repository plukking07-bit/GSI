/*
  Warnings:

  - Made the column `ecc1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ecc2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ecc3_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ecc4_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ecc5_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ere1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ere2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ere3_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ere4_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ere5_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gpm1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gpm2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `gpm3_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hwq1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hwq2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `hwq3_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ilp1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ilp2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sti1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sti2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sti3_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sti4_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wmr1_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wmr2_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wmr3_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wmr4_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.
  - Made the column `wmr5_explanation` on table `scores` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "scores" ALTER COLUMN "ecc1_explanation" SET NOT NULL,
ALTER COLUMN "ecc1_explanation" SET DEFAULT '',
ALTER COLUMN "ecc2_explanation" SET NOT NULL,
ALTER COLUMN "ecc2_explanation" SET DEFAULT '',
ALTER COLUMN "ecc3_explanation" SET NOT NULL,
ALTER COLUMN "ecc3_explanation" SET DEFAULT '',
ALTER COLUMN "ecc4_explanation" SET NOT NULL,
ALTER COLUMN "ecc4_explanation" SET DEFAULT '',
ALTER COLUMN "ecc5_explanation" SET NOT NULL,
ALTER COLUMN "ecc5_explanation" SET DEFAULT '',
ALTER COLUMN "ere1_explanation" SET NOT NULL,
ALTER COLUMN "ere1_explanation" SET DEFAULT '',
ALTER COLUMN "ere2_explanation" SET NOT NULL,
ALTER COLUMN "ere2_explanation" SET DEFAULT '',
ALTER COLUMN "ere3_explanation" SET NOT NULL,
ALTER COLUMN "ere3_explanation" SET DEFAULT '',
ALTER COLUMN "ere4_explanation" SET NOT NULL,
ALTER COLUMN "ere4_explanation" SET DEFAULT '',
ALTER COLUMN "ere5_explanation" SET NOT NULL,
ALTER COLUMN "ere5_explanation" SET DEFAULT '',
ALTER COLUMN "gpm1_explanation" SET NOT NULL,
ALTER COLUMN "gpm1_explanation" SET DEFAULT '',
ALTER COLUMN "gpm2_explanation" SET NOT NULL,
ALTER COLUMN "gpm2_explanation" SET DEFAULT '',
ALTER COLUMN "gpm3_explanation" SET NOT NULL,
ALTER COLUMN "gpm3_explanation" SET DEFAULT '',
ALTER COLUMN "hwq1_explanation" SET NOT NULL,
ALTER COLUMN "hwq1_explanation" SET DEFAULT '',
ALTER COLUMN "hwq2_explanation" SET NOT NULL,
ALTER COLUMN "hwq2_explanation" SET DEFAULT '',
ALTER COLUMN "hwq3_explanation" SET NOT NULL,
ALTER COLUMN "hwq3_explanation" SET DEFAULT '',
ALTER COLUMN "ilp1_explanation" SET NOT NULL,
ALTER COLUMN "ilp1_explanation" SET DEFAULT '',
ALTER COLUMN "ilp2_explanation" SET NOT NULL,
ALTER COLUMN "ilp2_explanation" SET DEFAULT '',
ALTER COLUMN "sti1_explanation" SET NOT NULL,
ALTER COLUMN "sti1_explanation" SET DEFAULT '',
ALTER COLUMN "sti2_explanation" SET NOT NULL,
ALTER COLUMN "sti2_explanation" SET DEFAULT '',
ALTER COLUMN "sti3_explanation" SET NOT NULL,
ALTER COLUMN "sti3_explanation" SET DEFAULT '',
ALTER COLUMN "sti4_explanation" SET NOT NULL,
ALTER COLUMN "sti4_explanation" SET DEFAULT '',
ALTER COLUMN "wmr1_explanation" SET NOT NULL,
ALTER COLUMN "wmr1_explanation" SET DEFAULT '',
ALTER COLUMN "wmr2_explanation" SET NOT NULL,
ALTER COLUMN "wmr2_explanation" SET DEFAULT '',
ALTER COLUMN "wmr3_explanation" SET NOT NULL,
ALTER COLUMN "wmr3_explanation" SET DEFAULT '',
ALTER COLUMN "wmr4_explanation" SET NOT NULL,
ALTER COLUMN "wmr4_explanation" SET DEFAULT '',
ALTER COLUMN "wmr5_explanation" SET NOT NULL,
ALTER COLUMN "wmr5_explanation" SET DEFAULT '';

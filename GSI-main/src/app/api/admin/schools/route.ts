import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const schools = await prisma.school.findMany({
            include: {
                scores: true,
                evidences: {
                    select: {
                        id: true,
                        fileName: true,
                        fileData: true,
                        fileSize: true,
                        mimeType: true,
                        createdAt: true,
                    },
                },
                user: {
                    select: { id: true, name: true, email: true },
                },
            },
            orderBy: { submittedAt: 'desc' },
        });

        const response = schools.map((school) => {
            const scoreData = school.scores ? school.scores : null;
            
            return {
                id: school.id,
                schoolName: school.schoolName,
                coverage: school.coverage,
                area: school.area,
                staff: school.staff,
                totalScore: school.totalScore,
                status: school.status,
                verifiedAt: school.verifiedAt?.toISOString() ?? null,
                submittedAt: school.submittedAt.toISOString(),
                hasEvidence: school.evidences.length > 0,
                submittedBy: school.user ? { id: school.user.id, name: school.user.name, email: school.user.email } : null,
                scores: scoreData ? {
                    sti1: scoreData.sti1 ?? 0, sti1Explanation: scoreData.sti1Explanation ?? null,
                    sti2: scoreData.sti2 ?? 0, sti2Explanation: scoreData.sti2Explanation ?? null,
                    sti3: scoreData.sti3 ?? 0, sti3Explanation: scoreData.sti3Explanation ?? null,
                    sti4: scoreData.sti4 ?? 0, sti4Explanation: scoreData.sti4Explanation ?? null,
                    wmr1: scoreData.wmr1 ?? 0, wmr1Explanation: scoreData.wmr1Explanation ?? null,
                    wmr2: scoreData.wmr2 ?? 0, wmr2Explanation: scoreData.wmr2Explanation ?? null,
                    wmr3: scoreData.wmr3 ?? 0, wmr3Explanation: scoreData.wmr3Explanation ?? null,
                    wmr4: scoreData.wmr4 ?? 0, wmr4Explanation: scoreData.wmr4Explanation ?? null,
                    wmr5: scoreData.wmr5 ?? 0, wmr5Explanation: scoreData.wmr5Explanation ?? null,
                    ecc1: scoreData.ecc1 ?? 0, ecc1Explanation: scoreData.ecc1Explanation ?? null,
                    ecc2: scoreData.ecc2 ?? 0, ecc2Explanation: scoreData.ecc2Explanation ?? null,
                    ecc3: scoreData.ecc3 ?? 0, ecc3Explanation: scoreData.ecc3Explanation ?? null,
                    ecc4: scoreData.ecc4 ?? 0, ecc4Explanation: scoreData.ecc4Explanation ?? null,
                    ecc5: scoreData.ecc5 ?? 0, ecc5Explanation: scoreData.ecc5Explanation ?? null,
                    hwq1: scoreData.hwq1 ?? 0, hwq1Explanation: scoreData.hwq1Explanation ?? null,
                    hwq2: scoreData.hwq2 ?? 0, hwq2Explanation: scoreData.hwq2Explanation ?? null,
                    hwq3: scoreData.hwq3 ?? 0, hwq3Explanation: scoreData.hwq3Explanation ?? null,
                    gpm1: scoreData.gpm1 ?? 0, gpm1Explanation: scoreData.gpm1Explanation ?? null,
                    gpm2: scoreData.gpm2 ?? 0, gpm2Explanation: scoreData.gpm2Explanation ?? null,
                    gpm3: scoreData.gpm3 ?? 0, gpm3Explanation: scoreData.gpm3Explanation ?? null,
                    ilp1: scoreData.ilp1 ?? 0, ilp1Explanation: scoreData.ilp1Explanation ?? null,
                    ilp2: scoreData.ilp2 ?? 0, ilp2Explanation: scoreData.ilp2Explanation ?? null,
                    ere1: scoreData.ere1 ?? 0, ere1Explanation: scoreData.ere1Explanation ?? null,
                    ere2: scoreData.ere2 ?? 0, ere2Explanation: scoreData.ere2Explanation ?? null,
                    ere3: scoreData.ere3 ?? 0, ere3Explanation: scoreData.ere3Explanation ?? null,
                    ere4: scoreData.ere4 ?? 0, ere4Explanation: scoreData.ere4Explanation ?? null,
                    ere5: scoreData.ere5 ?? 0, ere5Explanation: scoreData.ere5Explanation ?? null,
                } : null,
                evidence: school.evidences[0]
                    ? {
                          id: school.evidences[0].id,
                          fileName: school.evidences[0].fileName,
                          fileData: school.evidences[0].fileData,
                          fileSize: school.evidences[0].fileSize,
                          mimeType: school.evidences[0].mimeType,
                          createdAt: school.evidences[0].createdAt.toISOString(),
                      }
                    : null,
            };
        });

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error fetching schools:', error);
        return NextResponse.json({ error: 'Failed to fetch schools' }, { status: 500 });
    }
}

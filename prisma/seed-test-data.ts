import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding test data...');

    // Delete old test data first
    console.log('🗑️  Deleting old test data...');
    await prisma.score.deleteMany({
        where: {
            school: {
                schoolName: {
                    startsWith: 'TEST'
                }
            }
        }
    });

    await prisma.school.deleteMany({
        where: {
            schoolName: {
                startsWith: 'TEST'
            }
        }
    });
    console.log('✅ Old test data deleted');

    // Certification levels with different score ranges
    // Max Scores from evaluate page: sti1=6, sti2=5, sti3=5, sti4=5, wmr1=5, wmr2=4, wmr3=4, wmr4=4, wmr5=4
    // ecc1=5, ecc2=5, ecc3=4, ecc4=4, ecc5=4, hwq1=4, hwq2=3, hwq3=3, gpm1=2, gpm2=1, gpm3=1
    // ilp1=4, ilp2=3, ere1=3, ere2=3, ere3=3, ere4=3, ere5=3 (Total: 100)
    const testData = [
        {
            name: 'TEST1',
            totalScore: 25,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 1, sti4: 1,
                wmr1: 1, wmr2: 1, wmr3: 1, wmr4: 1, wmr5: 1,
                ecc1: 1, ecc2: 1, ecc3: 1, ecc4: 1, ecc5: 1,
                hwq1: 1, hwq2: 0, hwq3: 0,
                gpm1: 0, gpm2: 0, gpm3: 0,
                ilp1: 1, ilp2: 0,
                ere1: 0, ere2: 0, ere3: 0, ere4: 0, ere5: 0
            }
        },
        {
            name: 'TEST2',
            totalScore: 35,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 3, sti4: 1,
                wmr1: 1, wmr2: 1, wmr3: 1, wmr4: 1, wmr5: 1,
                ecc1: 1, ecc2: 1, ecc3: 1, ecc4: 1, ecc5: 1,
                hwq1: 1, hwq2: 1, hwq3: 1,
                gpm1: 0, gpm2: 0, gpm3: 0,
                ilp1: 1, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST3',
            totalScore: 45,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 3, wmr2: 1, wmr3: 1, wmr4: 1, wmr5: 1,
                ecc1: 2, ecc2: 2, ecc3: 1, ecc4: 1, ecc5: 1,
                hwq1: 1, hwq2: 1, hwq3: 1,
                gpm1: 0, gpm2: 0, gpm3: 0,
                ilp1: 1, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST4',
            totalScore: 55,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 3, wmr2: 2, wmr3: 2, wmr4: 2, wmr5: 2,
                ecc1: 2, ecc2: 2, ecc3: 2, ecc4: 2, ecc5: 2,
                hwq1: 2, hwq2: 1, hwq3: 1,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 2, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST5',
            totalScore: 65,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 2,
                ecc1: 3, ecc2: 3, ecc3: 2, ecc4: 2, ecc5: 2,
                hwq1: 2, hwq2: 1, hwq3: 1,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 2, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST6',
            totalScore: 75,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 4, wmr2: 3, wmr3: 3, wmr4: 3, wmr5: 3,
                ecc1: 3, ecc2: 3, ecc3: 3, ecc4: 3, ecc5: 3,
                hwq1: 3, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST7',
            totalScore: 80,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 3, wmr5: 3,
                ecc1: 4, ecc2: 4, ecc3: 3, ecc4: 3, ecc5: 3,
                hwq1: 3, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST8',
            totalScore: 85,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 5, ecc2: 5, ecc3: 4, ecc4: 3, ecc5: 3,
                hwq1: 3, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST9',
            totalScore: 90,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 5, ecc2: 5, ecc3: 4, ecc4: 4, ecc5: 4,
                hwq1: 4, hwq2: 3, hwq3: 3,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST10',
            totalScore: 95,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 5, ecc2: 5, ecc3: 4, ecc4: 4, ecc5: 4,
                hwq1: 4, hwq2: 3, hwq3: 3,
                gpm1: 2, gpm2: 1, gpm3: 1,
                ilp1: 4, ilp2: 3,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST11',
            totalScore: 30,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 2,
                wmr1: 1, wmr2: 1, wmr3: 1, wmr4: 1, wmr5: 1,
                ecc1: 1, ecc2: 1, ecc3: 1, ecc4: 1, ecc5: 1,
                hwq1: 1, hwq2: 0, hwq3: 0,
                gpm1: 0, gpm2: 0, gpm3: 0,
                ilp1: 1, ilp2: 0,
                ere1: 0, ere2: 0, ere3: 0, ere4: 0, ere5: 0
            }
        },
        {
            name: 'TEST12',
            totalScore: 40,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 4, sti4: 2,
                wmr1: 2, wmr2: 1, wmr3: 1, wmr4: 1, wmr5: 1,
                ecc1: 2, ecc2: 2, ecc3: 1, ecc4: 1, ecc5: 1,
                hwq1: 1, hwq2: 1, hwq3: 1,
                gpm1: 0, gpm2: 0, gpm3: 0,
                ilp1: 1, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST13',
            totalScore: 50,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 4, sti4: 2,
                wmr1: 2, wmr2: 2, wmr3: 2, wmr4: 2, wmr5: 2,
                ecc1: 2, ecc2: 2, ecc3: 2, ecc4: 2, ecc5: 2,
                hwq1: 2, hwq2: 1, hwq3: 1,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 2, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST14',
            totalScore: 60,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 3, wmr3: 2, wmr4: 2, wmr5: 2,
                ecc1: 3, ecc2: 3, ecc3: 2, ecc4: 2, ecc5: 2,
                hwq1: 2, hwq2: 1, hwq3: 1,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 2, ilp2: 1,
                ere1: 1, ere2: 1, ere3: 1, ere4: 1, ere5: 1
            }
        },
        {
            name: 'TEST15',
            totalScore: 70,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 3, wmr4: 2, wmr5: 2,
                ecc1: 3, ecc2: 3, ecc3: 2, ecc4: 2, ecc5: 2,
                hwq1: 2, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 2, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST16',
            totalScore: 77,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 3, wmr4: 3, wmr5: 3,
                ecc1: 3, ecc2: 3, ecc3: 3, ecc4: 3, ecc5: 3,
                hwq1: 3, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST17',
            totalScore: 82,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 4, ecc2: 4, ecc3: 3, ecc4: 3, ecc5: 3,
                hwq1: 3, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST18',
            totalScore: 88,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 5, ecc2: 5, ecc3: 4, ecc4: 4, ecc5: 4,
                hwq1: 4, hwq2: 2, hwq3: 2,
                gpm1: 1, gpm2: 0, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST19',
            totalScore: 92,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 5, ecc2: 5, ecc3: 4, ecc4: 4, ecc5: 4,
                hwq1: 4, hwq2: 3, hwq3: 3,
                gpm1: 2, gpm2: 1, gpm3: 0,
                ilp1: 3, ilp2: 2,
                ere1: 2, ere2: 2, ere3: 2, ere4: 2, ere5: 2
            }
        },
        {
            name: 'TEST20',
            totalScore: 100,
            status: 'verified',
            scores: {
                sti1: 6, sti2: 5, sti3: 5, sti4: 5,
                wmr1: 5, wmr2: 4, wmr3: 4, wmr4: 4, wmr5: 4,
                ecc1: 5, ecc2: 5, ecc3: 4, ecc4: 4, ecc5: 4,
                hwq1: 4, hwq2: 3, hwq3: 3,
                gpm1: 2, gpm2: 1, gpm3: 1,
                ilp1: 4, ilp2: 3,
                ere1: 3, ere2: 3, ere3: 3, ere4: 3, ere5: 3
            }
        }
    ];

    for (const data of testData) {
        try {
            // Check if school already exists
            const existing = await prisma.school.findFirst({
                where: { schoolName: data.name }
            });

            if (existing) {
                console.log(`⏭️  Skipping ${data.name} - already exists`);
                continue;
            }

            // Create school
            const school = await prisma.school.create({
                data: {
                    schoolName: data.name,
                    coverage: 'whole',
                    area: '5000',
                    staff: '200',
                    totalScore: data.totalScore,
                    status: data.status,
                    verifiedAt: new Date()
                }
            });

            // Create scores for school
            await prisma.score.create({
                data: {
                    schoolId: school.id,
                    ...data.scores
                }
            });

            console.log(`✅ Created ${data.name} with total score ${data.totalScore}`);
        } catch (error) {
            console.error(`❌ Error creating ${data.name}:`, error);
        }
    }

    console.log('✨ Seeding test data completed!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

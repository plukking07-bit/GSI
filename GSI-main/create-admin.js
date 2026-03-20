const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    const username = 'admin';
    const password = 'admin123';
    const hashedPassword = await bcrypt.hash(password, 12);

    const existing = await prisma.admin.findUnique({ where: { username } });
    if (existing) {
      await prisma.admin.update({
        where: { username },
        data: { password: hashedPassword },
      });
      console.log(`✓ Updated admin '${username}' password`);
    } else {
      await prisma.admin.create({
        data: { username, password: hashedPassword },
      });
      console.log(`✓ Created admin '${username}' password='${password}'`);
    }

    const admins = await prisma.admin.findMany();
    console.log(`\nTotal admins in database: ${admins.length}`);
    admins.forEach(a => console.log(`  - ${a.username}`));
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();

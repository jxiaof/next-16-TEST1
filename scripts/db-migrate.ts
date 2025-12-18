import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import path from 'path';

const main = async () => {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL not found');
  }

  const sql = postgres(databaseUrl, { max: 1 });
  const db = drizzle(sql);

  console.log('⏳ 开始执行数据库迁移...');

  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), 'src/backend/pkg/db/migrations'),
  });

  console.log('✅ 数据库迁移完成！');
  await sql.end();
};

main().catch((error) => {
  console.error('❌ 迁移失败:', error);
  process.exit(1);
});
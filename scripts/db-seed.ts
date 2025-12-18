import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users, posts } from '@backend/model/tables';

const main = async () => {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL not found');
  }

  const sql = postgres(databaseUrl, { max: 1 });
  const db = drizzle(sql);

  console.log('⏳ 开始注入种子数据...');

  // 清空现有数据
  await db.delete(posts);
  await db.delete(users);

  // 插入用户数据
  const newUsers = await db
    .insert(users)
    .values([
      {
        id: '1',
        email: 'admin@example.com',
        passwordHash: 'hashed_password_here',
        name: 'Admin User',
        role: 'admin',
        isActive: true,
      },
      {
        id: '2',
        email: 'user@example.com',
        passwordHash: 'hashed_password_here',
        name: 'Test User',
        role: 'user',
        isActive: true,
      },
    ])
    .returning();

  console.log(`✅ 插入 ${newUsers.length} 条用户记录`);

  // 插入文章数据
  const newPosts = await db
    .insert(posts)
    .values([
      {
        id: '1',
        title: '欢迎来到 My App',
        content: '这是第一篇文章',
        userId: '1',
      },
      {
        id: '2',
        title: 'Next.js 最佳实践',
        content: '分享 Next.js 开发经验',
        userId: '2',
      },
    ])
    .returning();

  console.log(`✅ 插入 ${newPosts.length} 条文章记录`);
  console.log('✅ 种子数据注入完成！');

  await sql.end();
};

main().catch((error) => {
  console.error('❌ 种子数据注入失败:', error);
  process.exit(1);
});
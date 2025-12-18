# 启动 PostgreSQL 和 Redis
pnpm run db:up

# 检查日志
pnpm run db:logs

# 执行迁移（后续步骤）
pnpm run db:migrate

# 注入种子数据
pnpm run db:seed
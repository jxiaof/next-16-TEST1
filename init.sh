# 1️⃣ 创建所有目录
mkdir -p .github/workflows
mkdir -p src/backend/{context,model/tables,dao,service/{auth,user,post,comment},pkg/{config,db/migrations,redis,logger,auth,queue,email,utils}}
mkdir -p src/app/{auth,main,admin,api/webhooks/{stripe,github}}
mkdir -p src/components/{ui,shared,responsive,features/{auth,post,comment}}
mkdir -p src/api-client/{actions,fetchers}
mkdir -p src/hooks
mkdir -p src/providers
mkdir -p src/lib
mkdir -p src/styles
mkdir -p src/common/{codes,errors,types,schemas,constants,utils}
mkdir -p src/__tests__/{components/{ui,features},hooks}
mkdir -p src/backend/__tests__/{service,dao}
mkdir -p tests/{integration,e2e/fixtures,fixtures}
mkdir -p docs
mkdir -p scripts
mkdir -p infra
mkdir -p deploy/{nginx/sites,nginx/snippets,docker,cdn}
mkdir -p public/images

# 2️⃣ 创建配置文件
touch .env.example
touch .env.local
touch .eslintrc.json
touch .prettierrc
touch .gitignore
touch .dockerignore
touch .nvmrc
touch tsconfig.base.json
touch drizzle.config.ts
touch vitest.config.ts
touch playwright.config.ts
touch middleware.ts
touch Dockerfile
touch Makefile
touch README.md

# 3️⃣ 创建后端核心文件
touch src/backend/context/{definition.ts,factory.ts}
touch src/backend/model/{schema.ts,relations.ts}
touch src/backend/model/tables/{index.ts,users.ts,posts.ts,comments.ts}
touch src/backend/dao/{index.ts,base-dao.ts,user-dao.ts,post-dao.ts,comment-dao.ts}
touch src/backend/service/{index.ts}
touch src/backend/service/auth/{index.ts,errors.ts,utils.ts}
touch src/backend/service/user/{index.ts,errors.ts}
touch src/backend/service/post/{index.ts,errors.ts}
touch src/backend/service/comment/{index.ts,errors.ts}
touch src/backend/pkg/config/{env.ts,constants.ts}
touch src/backend/pkg/db/{index.ts}
touch src/backend/pkg/redis/{index.ts}
touch src/backend/pkg/logger/{index.ts,security.ts}
touch src/backend/pkg/auth/{index.ts,permissions.ts}
touch src/backend/pkg/queue/{index.ts}
touch src/backend/pkg/email/{index.ts}
touch src/backend/pkg/utils/{crypto.ts,jwt.ts,id.ts}

# 4️⃣ 创建前端路由文件
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/manifest.ts
touch src/app/not-found.tsx
touch src/app/error.tsx
touch src/app/loading.tsx
touch src/app/globals.css

touch src/app/\(auth\)/layout.tsx
touch src/app/\(auth\)/login/page.tsx
touch src/app/\(auth\)/login/loading.tsx
touch src/app/\(auth\)/login/error.tsx
touch src/app/\(auth\)/register/page.tsx
touch src/app/\(auth\)/forgot-password/page.tsx

touch src/app/\(main\)/layout.tsx
touch src/app/\(main\)/dashboard/page.tsx
touch src/app/\(main\)/dashboard/layout.tsx
touch src/app/\(main\)/dashboard/loading.tsx
touch src/app/\(main\)/dashboard/error.tsx
touch src/app/\(main\)/posts/page.tsx
touch src/app/\(main\)/posts/\[id\]/page.tsx
touch src/app/\(main\)/posts/\[id\]/edit/page.tsx
touch src/app/\(main\)/posts/new/page.tsx
touch src/app/\(main\)/settings/page.tsx
touch src/app/\(main\)/settings/profile/page.tsx
touch src/app/\(main\)/settings/security/page.tsx

touch src/app/\(admin\)/layout.tsx
touch src/app/\(admin\)/users/page.tsx

touch src/app/api/webhooks/stripe/route.ts
touch src/app/api/webhooks/github/route.ts
touch src/app/api/health/route.ts

# 5️⃣ 创建组件文件
touch src/components/ui/{button.tsx,input.tsx,form.tsx,dialog.tsx,toast.tsx,skeleton.tsx}
touch src/components/shared/{header.tsx,sidebar.tsx,footer.tsx,data-table.tsx,pagination.tsx,empty-state.tsx,error-boundary.tsx}
touch src/components/responsive/{mobile-nav.tsx,desktop-nav.tsx,responsive-container.tsx,device-detector.tsx}
touch src/components/features/auth/{login-form.tsx,register-form.tsx,user-menu.tsx}
touch src/components/features/post/{post-card.tsx,post-list.tsx}
touch src/components/features/post/post-editor/{index.tsx,use-post-editor.ts,toolbar.tsx}
touch src/components/features/comment/{comment-form.tsx,comment-list.tsx}

# 6️⃣ 创建桥接层
touch src/api-client/{wrapper.ts}
touch src/api-client/actions/{index.ts,auth-actions.ts,post-actions.ts,user-actions.ts}
touch src/api-client/fetchers/{index.ts,use-posts.ts,use-user.ts}

# 7️⃣ 创建 Hooks 和 Providers
touch src/hooks/{index.ts,use-toast.ts,use-auth.ts,use-media-query.ts,use-device.ts,use-viewport.ts,use-debounce.ts,use-local-storage.ts}
touch src/providers/{index.tsx,theme-provider.tsx,query-provider.tsx,auth-provider.tsx,toast-provider.tsx}

# 8️⃣ 创建工具函数
touch src/lib/{cn.ts,format.ts,api-client.ts,storage.ts,url.ts,responsive.ts}
touch src/styles/{globals.css,variables.css,responsive.css}

# 9️⃣ 创建共享代码
touch src/common/codes/{index.ts,biz-codes.ts,http-codes.ts}
touch src/common/errors/{index.ts,app-error.ts,validation-error.ts}
touch src/common/types/{index.ts,response.ts,auth.ts,pagination.ts}
touch src/common/schemas/{index.ts,auth.ts,post.ts,user.ts,pagination.ts}
touch src/common/constants/{index.ts,roles.ts,limits.ts,breakpoints.ts}
touch src/common/utils/{index.ts,string.ts,date.ts,validator.ts}
touch src/env.ts

# 🔟 创建测试文件
touch tests/integration/{setup.ts,api.test.ts,service.test.ts}
touch tests/e2e/{auth.spec.ts,posts.spec.ts}
touch tests/e2e/fixtures/test-data.json
touch tests/fixtures/{index.ts,user.factory.ts,post.factory.ts}

touch src/__tests__/components/ui/button.test.tsx
touch src/__tests__/components/features/login-form.test.tsx
touch src/__tests__/hooks/use-auth.test.ts
touch src/backend/__tests__/service/auth.test.ts
touch src/backend/__tests__/dao/user-dao.test.ts

# 1️⃣1️⃣ 创建文档
touch docs/{api.md,architecture.md,deployment.md,contributing.md,troubleshooting.md}

# 1️⃣2️⃣ 创建脚本
touch scripts/{db-seed.ts,db-migrate.ts,db-reset.ts,generate-types.ts,validate-env.ts,health-check.ts}

# 1️⃣3️⃣ 创建 CI/CD
touch .github/workflows/{ci.yml,deploy.yml,security.yml}

# 1️⃣4️⃣ 创建基础设施配置
touch infra/{docker-compose.yml,docker-compose.prod.yml,.env.example}
touch deploy/nginx/{nginx.conf}
touch deploy/nginx/sites/{app.conf,ssl.conf}
touch deploy/nginx/snippets/{cache.conf,security.conf,gzip.conf}
touch deploy/docker/{docker-compose.prod.yml,docker-compose.dev.yml}
touch deploy/cdn/cloudflare.md




# 核心依赖
pnpm add next react react-dom

# UI 工具
pnpm add clsx tailwind-merge class-variance-authority

# 状态管理 & 数据获取
pnpm add @tanstack/react-query zod

# 表单处理
pnpm add react-hook-form

# 日期处理
pnpm add date-fns

# HTTP 客户端
pnpm add axios

# 开发依赖
pnpm add -D typescript @types/react @types/node tailwindcss postcss autoprefixer eslint-config-next
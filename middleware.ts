import { NextRequest, NextResponse } from 'next/server';

/**
 * Next.js 全局中间件
 * 处理：鉴权、重定向、i18n、日志
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1️⃣ 静态资源和 API 直接放行
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/public') ||
    pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp)$/)
  ) {
    return NextResponse.next();
  }

  // 2️⃣ 获取认证 token
  const token = request.cookies.get('auth_token')?.value;
  const isAuthenticated = !!token;

  // 3️⃣ 定义受保护路由
  const protectedRoutes = ['/dashboard', '/settings', '/posts/new', '/admin'];
  const publicRoutes = ['/login', '/register', '/forgot-password'];
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // 4️⃣ 未认证用户访问受保护页面 → 重定向到登录
  if (isProtectedRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 5️⃣ 已认证用户访问登录页 → 重定向到仪表板
  if (isPublicRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 6️⃣ 添加请求 ID（用于日志追踪）
  const requestId = request.headers.get('x-request-id') || generateRequestId();
  const response = NextResponse.next();
  response.headers.set('x-request-id', requestId);

  return response;
}

/**
 * 配置中间件匹配规则
 * 说明中间件应该在哪些路由上运行
 */
export const config = {
  // 匹配所有路由，除了特定的路径
  matcher: [
    // 匹配所有路由
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};

/**
 * 生成唯一的请求 ID
 */
function generateRequestId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
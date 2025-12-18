import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold text-black dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          页面未找到
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          抱歉，您访问的页面不存在。
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-700"
        >
          返回首页
        </Link>
      </main>
    </div>
  );
}
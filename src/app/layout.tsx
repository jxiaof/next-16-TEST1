import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Enterprise Next.js Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools Global | 2026 Best AI Tools Directory',
  description: 'Curated directory of the best AI tools in 2026. Browse top AI assistants, coding tools, content creators, productivity boosters, and automation platforms.',
  keywords: ['AI tools', 'best AI 2026', 'AI directory', 'ChatGPT', 'Claude', 'Cursor', 'Midjourney'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

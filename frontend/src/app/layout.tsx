import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Akoba Studio',
  description: 'Studio 3D – Visuels publicitaires en 3D',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

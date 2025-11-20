import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Akoba Studio',
  description: 'Studio 3D – Visuels publicitaires en 3D',
};

/**
 * Root layout component. Wraps all pages with basic HTML and head tags.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
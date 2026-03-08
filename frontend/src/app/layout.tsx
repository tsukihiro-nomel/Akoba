import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Akoba Studio — Studio 3D Premium',
    template: '%s | Akoba Studio',
  },
  description:
    'Studio 3D premium avec racines ivoiriennes. Packshots, visuels de campagne, modélisation et animations 3D pour marques, PME et créateurs.',
  keywords: ['studio 3D', 'packshot 3D', 'visuel campagne', 'modélisation 3D', 'animation 3D', 'baoulé'],
  authors: [{ name: 'Akoba Studio' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Akoba Studio',
    title: 'Akoba Studio — Studio 3D Premium',
    description:
      'Remplacez le shooting photo par des visuels 3D modulables, rapides et premium. Packshots, campagnes et animations.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

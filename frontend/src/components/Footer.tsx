import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Akoba Studio. Visuels 3D, packshots et campagnes.</p>
        <div className="footer-links" aria-label="Liens secondaires">
          <Link href="/legal">Mentions légales</Link>
          <Link href="/privacy">Confidentialité</Link>
          <Link href="/cookies">Cookies</Link>
          <a href="mailto:hello@akoba.fr">hello@akoba.fr</a>
        </div>
      </div>
    </footer>
  );
}

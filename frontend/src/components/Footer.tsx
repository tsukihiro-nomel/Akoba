import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Akoba Studio</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>
            Studio 3D premium &middot; Packshots, campagnes et animations.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.5rem' }}>
            &copy; {new Date().getFullYear()} Akoba Studio. Tous droits r&eacute;serv&eacute;s.
          </p>
        </div>
        <div className="footer-links" aria-label="Liens secondaires">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">&Agrave; propos</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/legal">Mentions l&eacute;gales</Link>
          <Link href="/privacy">Confidentialit&eacute;</Link>
          <Link href="/cookies">Cookies</Link>
          <a href="mailto:hello@akoba.fr">hello@akoba.fr</a>
        </div>
      </div>
    </footer>
  );
}

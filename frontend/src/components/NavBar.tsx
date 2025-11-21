import Link from 'next/link';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Processus' },
  { href: '/about', label: 'À propos' },
  { href: '/legal', label: 'Mentions légales' }
];

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container site-nav">
        <Link href="/" className="brand">
          <span aria-label="Akoba">Akoba Studio</span>
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <Link href="/contact" className="ghost-button" aria-label="Accéder au formulaire de brief">
            Brief rapide
          </Link>
          <Link href="/contact" className="cta-button" aria-label="Proposer un projet">
            Proposer un projet
          </Link>
        </div>
      </div>
    </header>
  );
}

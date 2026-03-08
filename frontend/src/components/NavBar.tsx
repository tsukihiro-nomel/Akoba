'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Processus' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-nav">
        <Link href="/" className="brand">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="var(--terra)" />
            <path d="M7 20L14 8L21 20H7Z" fill="white" opacity="0.9" />
            <circle cx="14" cy="16" r="2.5" fill="var(--terra-deep)" />
          </svg>
          <span>Akoba</span>
        </Link>

        <nav aria-label="Navigation principale" className={open ? 'nav-open' : ''}>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'nav-active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions nav-actions-mobile">
            <Link href="/contact" className="cta-button" aria-label="Proposer un projet">
              Proposer un projet
            </Link>
          </div>
        </nav>

        <div className="nav-actions nav-actions-desktop">
          <Link href="/contact" className="cta-button" aria-label="Proposer un projet">
            Proposer un projet
          </Link>
        </div>

        <button
          className="burger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={`burger-line ${open ? 'burger-open' : ''}`} />
          <span className={`burger-line ${open ? 'burger-open' : ''}`} />
          <span className={`burger-line ${open ? 'burger-open' : ''}`} />
        </button>
      </div>

      {open && <div className="nav-overlay" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}

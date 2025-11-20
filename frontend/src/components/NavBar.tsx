import Link from 'next/link';

export default function NavBar() {
  return (
    <header>
      <nav className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl">Akoba</span>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/process">Process</Link></li>
          <li><Link href="/about">À&nbsp;propos</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
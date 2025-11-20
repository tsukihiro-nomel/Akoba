export default function Footer() {
  return (
    <footer>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Akoba Studio. Tous droits réservés.</p>
        <div className="space-x-4">
          <a href="/legal">Mentions légales</a>
          <a href="/privacy">Confidentialité</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
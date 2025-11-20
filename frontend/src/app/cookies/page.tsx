import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function CookiesPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Politique de cookies</h1>
        <p>
          Ce site utilise des cookies pour améliorer votre expérience utilisateur. Vous pourrez gérer vos préférences de
          cookies et en savoir plus sur leur utilisation ici.
        </p>
      </main>
      <Footer />
    </>
  );
}
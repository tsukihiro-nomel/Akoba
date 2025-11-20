import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function LegalPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
        <p>
          Ce site est édité par Akoba Studio. Les informations légales et les coordonnées de l’éditeur seront ajoutées ici.
        </p>
      </main>
      <Footer />
    </>
  );
}
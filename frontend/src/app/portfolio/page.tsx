import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function PortfolioPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
        <p>
          Nous travaillons sur notre portfolio. Bientôt, vous pourrez découvrir des projets réalisés pour nos clients.
        </p>
      </main>
      <Footer />
    </>
  );
}
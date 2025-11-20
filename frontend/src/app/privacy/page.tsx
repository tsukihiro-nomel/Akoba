import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Politique de confidentialité</h1>
        <p>
          Nous respectons votre vie privée et nous engageons à protéger vos données personnelles. Cette page décrira
          comment nous collectons, utilisons et stockons vos informations conformément au RGPD.
        </p>
      </main>
      <Footer />
    </>
  );
}
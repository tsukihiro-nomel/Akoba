import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">À propos</h1>
        <p className="mb-4">
          Akoba est un studio 3D basé en France qui aide les marques à créer des visuels publicitaires immersifs et innovants.
        </p>
        <p className="mb-4">
          Notre vision est de démocratiser la production d’images en trois dimensions. Nous offrons un service flexible,
          abordable et créatif afin que chaque entreprise puisse bénéficier des avantages de la 3D.
        </p>
        <p>
          Nous sommes fiers de nos racines ivoiriennes : nos designs s’inspirent des motifs géométriques baoulés et de
          la chaleur des couleurs terre cuite et dorées. Toutefois, notre identité reste moderne et minimaliste pour
          laisser la place à vos projets.
        </p>
      </main>
      <Footer />
    </>
  );
}
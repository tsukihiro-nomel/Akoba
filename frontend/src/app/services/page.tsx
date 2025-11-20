import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const services = [
  {
    title: 'Packshots 3D',
    description:
      'Des rendus photoréalistes de vos produits, sans studio photo. Personnalisez angles, textures et éclairage.'
  },
  {
    title: 'Visuels de campagne',
    description:
      'Créez des images de campagne mémorables en 3D pour réseaux sociaux, affichage ou packaging.'
  },
  {
    title: 'Modélisation 3D',
    description:
      'Nous concevons des modèles 3D détaillés de vos produits ou concepts, prêts à être animés ou rendus.'
  },
  {
    title: 'Animations simples',
    description:
      'Ajoutez du mouvement à vos visuels avec des animations courtes : rotation produit, reveal, zoom.'
  }
];

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Nos services</h1>
        <div className="grid">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
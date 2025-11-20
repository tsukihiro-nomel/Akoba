import Image from 'next/image';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const projects = [
  {
    sector: 'Beauté',
    title: 'Édition lipstick',
    brief: 'Création d’un packshot et d’une scène éditoriale avec 3 palettes couleur et 2 éclairages.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
    alt: 'Rouges à lèvres rouges sur podium géométrique',
  },
  {
    sector: 'Tech',
    title: 'Audio spatial',
    brief: 'Modélisation + animation courte d’un casque. Export glTF compressé et vidéo 9:16.',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
    alt: 'Casque audio noir en 3D sur fond indigo',
  },
  {
    sector: 'Food',
    title: 'Gourmandises',
    brief: 'Packshots multi-saveurs avec textures gourmandes et déclinaisons réseaux sociaux.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    alt: 'Desserts colorés alignés en 3D',
  },
];

export default function PortfolioPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="portfolio-akoba">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Portfolio</div>
              <h1 id="portfolio-akoba" className="section-title">Sélection de projets 3D.</h1>
              <p className="section-lead">
                Chaque vignette renvoie à une fiche projet (brief, étapes, livrables). Les visuels informatifs possèdent un texte alternatif
                pour l’accessibilité.
              </p>
            </div>
            <div className="grid" role="list">
              {projects.map((project) => (
                <article key={project.title} className="card showcase-card" role="listitem">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={620}
                    height={420}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="service-meta">
                    <span className="meta-label">{project.sector}</span>
                    <span>glTF/GLB + WebP</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.brief}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

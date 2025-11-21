import Image from 'next/image';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const services = [
  {
    title: 'Packshots 3D',
    description:
      'Images photoréalistes pour e-commerce et lancement produit. Gestion des textures, reflets, pack multi-angles et multi-ambiances.',
    details: ['Angles et plans packshot illimités', 'Variantes matière/éclairage', 'Optimisation WebP & export haute résolution'],
    image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1000&q=80',
    alt: 'Packshot 3D d’un flacon de parfum avec reflets dorés',
  },
  {
    title: 'Visuels de campagne',
    description:
      'Scènes 3D scénarisées (réseaux sociaux, OOH, DOOH). Décors, FX légers et déclinaisons multi-plateformes.',
    details: ['Storyboard concis', 'Décors modulaires et motifs géométriques inspirés du baoulé', 'Livraison en ratio multiples (1:1, 9:16, 16:9)'],
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80',
    alt: 'Visuel de campagne 3D pour une boisson avec ambiance bleue et violette',
  },
  {
    title: 'Modélisation 3D',
    description:
      'Création de modèles glTF/GLB prêts pour le web, l’AR ou l’animation. Réduction de polygones, LOD et textures compressées.',
    details: ['Compatibles Three.js/Babylon.js', 'Fichiers versionnés et documentés', 'Export GLB + fichiers source sur demande'],
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80',
    alt: 'Casque audio stylisé en 3D sur fond indigo',
  },
  {
    title: 'Animations simples',
    description:
      'Clips courts : rotation produit, reveal, zoom ou transition fluide. Idéal pour réseaux sociaux et landing pages.',
    details: ['Durée recommandée : 5–15 secondes', 'Livraison H.265/HEVC + GIF léger', 'Option motion design typographique'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Canette 3D animée avec effet de lumière violet',
  },
];

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="nos-services">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Services</div>
              <h1 id="nos-services" className="section-title">Des offres pensées pour la production 3D end-to-end.</h1>
              <p className="section-lead">
                Des packshots aux campagnes complètes, chaque prestation inclut la préparation, les prévisualisations, les retours illimités
                avant validation et une livraison sécurisée.
              </p>
            </div>
            <div className="grid" role="list">
              {services.map((service) => (
                <article key={service.title} className="card service-card" role="listitem">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={640}
                    height={420}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="service-meta">
                    <span aria-label="Respect des délais réalistes">Planning communiqué sans promesse irréaliste</span>
                    <a href="mailto:hello@akoba.fr">Discuter du scope ↗</a>
                  </div>
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

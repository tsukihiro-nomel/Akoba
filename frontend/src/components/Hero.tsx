import Image from 'next/image';
import Link from 'next/link';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80',
    alt: 'Packshot 3D lumineux d’un parfum posé sur un socle en pierre',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Visuel de campagne 3D pour une marque de boisson avec ambiance nocturne',
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="section-kicker">Studio 3D · Côte d’Ivoire x Europe</div>
          <h1>
            Remplacez le shooting photo par des visuels 3D modulables, rapides et premium.
          </h1>
          <p>
            Akoba produit des packshots, des scènes de campagne et des animations 3D sans louer de studio physique.
            Obtenez plus de déclinaisons, contrôlez chaque détail et collaborez en ligne avec notre équipe.
          </p>
          <div className="badge-row" aria-label="Points forts">
            <span className="badge">Variantes infinies</span>
            <span className="badge">Coûts optimisés</span>
            <span className="badge">Visionneuse glTF</span>
            <span className="badge">Collaboration en direct</span>
          </div>
          <div className="nav-actions">
            <Link href="/contact" className="cta-button">Proposer un projet</Link>
            <Link href="/services" className="ghost-button">Voir les services</Link>
          </div>
        </div>
        <div className="pattern-tile" aria-hidden="true">
          <div className="pattern-accent" />
          <div className="stat-grid">
            <div className="stat-card">
              <strong>+40</strong>
              <span>variantes d’éclairage et de matière par produit</span>
            </div>
            <div className="stat-card">
              <strong>72h</strong>
              <span>pour livrer une première passe réaliste sans compromis</span>
            </div>
            <div className="stat-card">
              <strong>1 seul brief</strong>
              <span>pour la campagne, les réseaux sociaux et le e-commerce</span>
            </div>
          </div>
          <div className="highlight" style={{ marginTop: '1rem' }}>
            <strong>Respect RGPD.</strong> Données minimisées, consentements distincts, retrait possible à tout moment.
          </div>
        </div>
        <div className="grid" role="list" aria-label="Aperçu des rendus 3D">
          {heroImages.map((image) => (
            <article key={image.src} className="card showcase-card" role="listitem">
              <Image
                src={image.src}
                alt={image.alt}
                width={640}
                height={420}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
              <div className="card-footer">
                <span>Textures fidèles · Lumières modulables</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

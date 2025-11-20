import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

const valuePoints = [
  {
    title: 'Créativité illimitée',
    detail: 'Changez les angles, les matières et les ambiances sans relouer un studio. Chaque produit peut être décliné en quelques clics.',
  },
  {
    title: 'Production accélérée',
    detail: 'Brief unique, rendus en 72h pour une première passe. Les retours sont versionnés et visibles dans l’espace client.',
  },
  {
    title: 'Budget optimisé',
    detail: 'Pas de location de studio physique, pas de transport produit. Vous réutilisez les modèles 3D pour la campagne, le e-commerce et la vidéo.',
  },
];

const services = [
  {
    title: 'Packshots 3D',
    description:
      'Packshots photoréalistes pour boutiques en ligne, lancements et marketplaces. Textures précises, éclairages modulables.',
    image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1000&q=80',
    alt: "Flacon de parfum en 3D éclairé avec reflets dorés",
  },
  {
    title: 'Visuels de campagne',
    description:
      'Scènes 3D cinématographiques avec décors, storytelling et formats multi-plateformes (OOH, social, DOOH).',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80',
    alt: 'Scène de campagne 3D avec boisson énergisante et éclairage bleu',
  },
  {
    title: 'Modélisation & animation',
    description:
      'Création de modèles glTF/GLB optimisés, LOD pour le web et animations courtes (rotation, reveal, zooms).',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80',
    alt: 'Modèle 3D détaillé d’un casque audio sur fond indigo',
  },
];

const showcases = [
  {
    title: 'Beauty · Scène éditoriale',
    description: 'Textures peau et métal reconstituées. 12 variantes d’ambiances exportées en WebP et vidéo courte.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rouges à lèvres 3D présentés sur un podium géométrique',
  },
  {
    title: 'Food · Packshot multi-saveurs',
    description: 'Palette baoulé pour rappeler les origines ivoiriennes. Optimisation polygones + textures 1K pour un chargement rapide.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    alt: 'Assortiment 3D de pâtisseries colorées avec éclairage doux',
  },
];

const processShort = [
  {
    title: 'Brief responsable',
    text: 'Formulaire détaillé avec finalité de chaque champ et cases de consentement distinctes (devis, suivi, marketing).',
  },
  {
    title: 'Pré-production',
    text: 'Moodboard, références matière, palette ocre/indigo et motifs géométriques inspirés du baoulé.',
  },
  {
    title: 'Production & validation',
    text: 'Modélisation, textures compressées, rendus intermédiaires. Chat temps réel et visionneuse glTF/GLB pour vos retours.',
  },
  {
    title: 'Livraison sécurisée',
    text: 'Exports image, vidéo et modèles optimisés. Accès restreint au projet, droit de suppression sur demande.',
  },
];

const workspaceFeatures = [
  {
    title: 'Dashboard client',
    detail: 'Statuts clairs (Nouveau, En production, En validation, Terminé) synchronisés en temps réel.',
    badge: 'app.akoba.fr',
  },
  {
    title: 'Visionneuse 3D',
    detail: 'Lecture glTF/GLB Three.js. Rotation, zoom, fond neutre, plein écran. Versioning des fichiers.',
    badge: 'glTF optimisé',
  },
  {
    title: 'Chat projet',
    detail: 'WebSocket/Socket.IO pour les échanges client/équipe avec partage de fichiers et notifications.',
    badge: 'Temps réel',
  },
  {
    title: 'Espace staff',
    detail: 'Rôles admin/chef de projet/artiste. Assignation, retouches, commentaires internes, upload direct vers le client.',
    badge: 'staff.akoba.fr',
  },
];

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />

        <section className="section" aria-labelledby="valeur-ajoutee">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Valeur ajoutée</div>
              <h2 id="valeur-ajoutee" className="section-title">
                Réduisez vos coûts, gagnez en contrôle créatif, livrez plus vite.
              </h2>
              <p className="section-lead">
                Akoba remplace un shooting classique par une production 3D sobre, inspirée des motifs baoulés. Chaque visuel est
                accessible, versionné et pensé pour le multi-plateforme.
              </p>
            </div>
            <div className="highlight-grid" role="list">
              {valuePoints.map((point) => (
                <article key={point.title} className="highlight" role="listitem">
                  <div>
                    <strong>{point.title}</strong>
                    <p>{point.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="services">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Services</div>
              <h2 id="services" className="section-title">Packshots, campagnes, modélisation et animation 3D.</h2>
              <p className="section-lead">Chaque offre inclut un suivi clair, des retours illimités sur les prévisualisations et un respect strict du RGPD.</p>
            </div>
            <div className="grid" role="list">
              {services.map((service) => (
                <article key={service.title} className="card service-card" role="listitem">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    width={520}
                    height={360}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span aria-label="Données minimisées">Formulaire RGPD</span>
                    <Link href="/services">Détails ↗</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="showcase">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Exemples</div>
              <h2 id="showcase" className="section-title">Aperçus 3D avec variantes matières, lumière et cadrage.</h2>
              <p className="section-lead">Chaque image informative est décrite pour l’accessibilité. Les visuels décoratifs restent neutres (alt="").</p>
            </div>
            <div className="grid" role="list">
              {showcases.map((item) => (
                <article key={item.title} className="card showcase-card" role="listitem">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={620}
                    height={420}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="processus">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Processus</div>
              <h2 id="processus" className="section-title">Un déroulé transparent, du brief à la livraison.</h2>
            </div>
            <div className="process-steps" role="list">
              {processShort.map((step, index) => (
                <article key={step.title} className="step" role="listitem">
                  <div className="step-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="workspace">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Collaboration</div>
              <h2 id="workspace" className="section-title">Espace client & zone staff synchronisés en temps réel.</h2>
              <p className="section-lead">
                Authentification sécurisée, JWT en cookie http-only, rôles (client, artiste, chef de projet, admin) et journalisation des
                actions clés. Les messages et fichiers restent attachés à chaque projet.
              </p>
            </div>
            <div className="tiles" role="list">
              {workspaceFeatures.map((feature) => (
                <article key={feature.title} className="tile" role="listitem">
                  <span className="meta-label">{feature.badge}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="cta-final">
          <div className="container">
            <div className="pattern-tile">
              <div className="pattern-accent" aria-hidden="true" />
              <div className="section-header">
                <div className="section-kicker">Prêt à démarrer ?</div>
                <h2 id="cta-final" className="section-title">Envoyez votre brief, on s’occupe du reste.</h2>
                <p className="section-lead">
                  Décrivez votre produit, vos objectifs et vos délais souhaités. Nous revenons avec un plan de production réaliste et
                  une première proposition de scène.
                </p>
              </div>
              <div className="nav-actions">
                <Link href="/contact" className="cta-button">Proposer un projet</Link>
                <Link href="/services" className="ghost-button">Découvrir toutes les offres</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

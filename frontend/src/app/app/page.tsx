import Link from 'next/link';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function ClientAccessPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="app-temp">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Espace client</div>
              <h1 id="app-temp" className="section-title">Accès temporaire à l’espace client</h1>
              <p className="section-lead">
                Ce lien remplace provisoirement app.akoba.fr pendant la configuration des sous-domaines. Vous y retrouvez les
                maquettes d’onboarding, le suivi projet et les prévisualisations.
              </p>
            </div>
            <div className="nav-actions">
              <Link href="/" className="ghost-button">
                ← Retour à l’accueil
              </Link>
              <Link href="/contact" className="cta-button">
                Créer un projet
              </Link>
            </div>
            <div className="tiles" role="list" style={{ marginTop: '2rem' }}>
              <article className="tile" role="listitem">
                <span className="meta-label">Dashboard</span>
                <h2>Statuts en temps réel</h2>
                <p>Suivez vos projets (Nouveau, En production, En validation, Terminé) et ouvrez le chat associé.</p>
              </article>
              <article className="tile" role="listitem">
                <span className="meta-label">Visionneuse 3D</span>
                <h2>Preview glTF/GLB</h2>
                <p>Rotation, zoom, fond neutre et mode plein écran pour valider matières, éclairage et cadrage.</p>
              </article>
              <article className="tile" role="listitem">
                <span className="meta-label">Historique</span>
                <h2>Versions & retouches</h2>
                <p>Chaque livraison conserve les commentaires et vous pouvez demander des ajustements ciblés.</p>
              </article>
            </div>
            <p className="helper-text" role="status">
              Dès que le DNS est propagé, ce chemin sera redirigé automatiquement vers app.akoba.fr.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function StaffAccessPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="staff-temp">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Espace staff</div>
              <h1 id="staff-temp" className="section-title">Accès temporaire à la zone staff</h1>
              <p className="section-lead">
                Ce lien remplace provisoirement staff.akoba.fr. Vous pouvez y prévisualiser le flux interne : filtres projets,
                mises à jour de statut, upload des rendus et notes internes synchronisées avec l’espace client.
              </p>
            </div>
            <div className="nav-actions">
              <Link href="/" className="ghost-button">
                ← Retour à l’accueil
              </Link>
              <Link href="/contact" className="cta-button">
                Onboarder un projet
              </Link>
            </div>
            <div className="tiles" role="list" style={{ marginTop: '2rem' }}>
              <article className="tile" role="listitem">
                <span className="meta-label">Rôles</span>
                <h2>Admin, chef de projet, artiste</h2>
                <p>Permissions segmentées pour sécuriser la validation, l’assignation et les retouches.</p>
              </article>
              <article className="tile" role="listitem">
                <span className="meta-label">Synchronisation</span>
                <h2>Temps réel</h2>
                <p>Statuts et messages sont reflétés instantanément côté client grâce au canal WebSocket/SSE.</p>
              </article>
              <article className="tile" role="listitem">
                <span className="meta-label">Livrables</span>
                <h2>Uploads sécurisés</h2>
                <p>Prévisualisations, modèles glTF/GLB et rendus finaux sont versionnés et partagés depuis cette interface.</p>
              </article>
            </div>
            <p className="helper-text" role="status">
              Ce lien sera remplacé par staff.akoba.fr dès que le DNS sera actif. Les données restent confinées au projet.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

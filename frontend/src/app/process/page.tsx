import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const steps = [
  {
    title: 'Prise de brief responsable',
    detail:
      'Formulaire complet : produit, objectifs, usages, délais souhaités et budget indicatif. Chaque champ affiche sa finalité. Consentements séparés pour devis, suivi et communications.',
  },
  {
    title: 'Pré-production',
    detail: 'Analyse du brief, moodboard, inspirations lumière et matières. Préparation des scènes 3D et planning réaliste partagé.',
  },
  {
    title: 'Production',
    detail:
      'Modélisation, textures compressées (WebP/JPEG), réduction de polygones et LOD. Premiers rendus livrés sous 72h quand le brief est complet.',
  },
  {
    title: 'Validation & retouches',
    detail:
      'Visionneuse glTF/GLB Three.js, chat temps réel, historique des versions. Les retours sont tracés et planifiés avant rendu final.',
  },
  {
    title: 'Livraison',
    detail: 'Images haute résolution, vidéos H.265 et modèles glTF optimisés. Accès sécurisé par rôle, retrait et suppression sur demande.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="process-akoba">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Processus</div>
              <h1 id="process-akoba" className="section-title">Du brief au rendu final, chaque étape est tracée.</h1>
              <p className="section-lead">
                Collaboration transparente, délais réalistes, conformité RGPD. Les clients suivent chaque statut depuis le dashboard, les
                équipes mises à jour depuis la zone staff.
              </p>
            </div>
            <div className="process-steps" role="list">
              {steps.map((step, index) => (
                <article key={step.title} className="step" role="listitem">
                  <div className="step-number">{index + 1}</div>
                  <h2>{step.title}</h2>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
            <div className="highlight" style={{ marginTop: '1.5rem' }}>
              <strong>Temps réel.</strong> Statuts synchronisés via WebSocket/SSE, notifications chat, fichiers partagés côté client et staff.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

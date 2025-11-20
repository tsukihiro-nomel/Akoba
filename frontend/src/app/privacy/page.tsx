import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const sections = [
  {
    title: 'Finalités et bases légales',
    content:
      'Nous collectons vos données pour répondre à votre brief, établir un devis, gérer le projet et — si vous l’avez accepté — envoyer des contenus marketing ponctuels. Base légale : exécution du contrat et consentement explicite.',
  },
  {
    title: 'Données collectées',
    content:
      'Nom, email, société, téléphone (facultatif), description du projet, budget indicatif, fichiers de référence. Nous demandons uniquement ce qui est nécessaire (principe de minimisation).',
  },
  {
    title: 'Durée de conservation',
    content: 'Les données sont conservées pendant la durée du projet et archivées 12 mois maximum, sauf obligation légale contraire.',
  },
  {
    title: 'Droits des utilisateurs',
    content:
      'Vous pouvez demander l’accès, la rectification, la portabilité ou la suppression de vos données. Vous pouvez retirer votre consentement marketing à tout moment sans impact sur le service.',
  },
  {
    title: 'Sécurité',
    content:
      'Accès restreint par rôle, chiffrement HTTPS, stockage chiffré pour les sauvegardes. Les fichiers partagés dans le chat sont associés au projet et supprimables sur demande.',
  },
  {
    title: 'Contact DPO',
    content: 'Pour toute demande liée à vos données : hello@akoba.fr.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="confidentialite">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Données</div>
              <h1 id="confidentialite" className="section-title">Politique de confidentialité</h1>
              <p className="section-lead">
                Notre traitement de données respecte le RGPD : finalités claires, consentement explicite, droits d’accès et de suppression,
                et possibilité de retrait sans conséquence.
              </p>
            </div>
            <div className="stacked" role="list">
              {sections.map((section) => (
                <article key={section.title} className="tile" role="listitem">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
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

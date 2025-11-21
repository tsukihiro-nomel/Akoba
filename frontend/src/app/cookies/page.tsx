import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function CookiesPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="cookies-akoba">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Cookies</div>
              <h1 id="cookies-akoba" className="section-title">Gestion des cookies</h1>
              <p className="section-lead">
                Vous choisissez : cookies nécessaires uniquement, statistiques anonymes ou marketing. Aucune installation avant votre choix.
              </p>
            </div>
            <div className="stacked">
              <article className="tile">
                <h2>Nécessaires</h2>
                <p>Assurent le fonctionnement du site (sécurité, gestion de session). Toujours actifs.</p>
              </article>
              <article className="tile">
                <h2>Statistiques</h2>
                <p>Mesure d’audience anonyme. Activés uniquement si vous l’acceptez.</p>
              </article>
              <article className="tile">
                <h2>Marketing</h2>
                <p>Non activés par défaut. Servent à personnaliser l’expérience si vous y consentez.</p>
              </article>
              <article className="tile">
                <h2>Gérer vos préférences</h2>
                <p>
                  Un bandeau d’information et un centre de préférences permettent d’activer/désactiver chaque catégorie. Vous pouvez changer
                  d’avis à tout moment.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

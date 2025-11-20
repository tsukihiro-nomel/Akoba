import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function LegalPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="mentions-legales">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Légal</div>
              <h1 id="mentions-legales" className="section-title">Mentions légales</h1>
              <p className="section-lead">Informations éditeur et contacts officiels.</p>
            </div>
            <div className="stacked">
              <article className="tile">
                <span className="meta-label">Éditeur</span>
                <p>Akoba Studio — Studio 3D. Email : hello@akoba.fr.</p>
              </article>
              <article className="tile">
                <span className="meta-label">Hébergement</span>
                <p>Site hébergé sur une infrastructure européenne sécurisée (HTTPS, sauvegardes chiffrées).</p>
              </article>
              <article className="tile">
                <span className="meta-label">Contact</span>
                <p>Pour toute question légale ou demande liée à vos données : hello@akoba.fr.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

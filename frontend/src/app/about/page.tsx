import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const values = [
  'Sincérité : pas de promesse irréalisable, un planning clair et mis à jour.',
  'Esthétique : minimalisme moderne rehaussé d’influences baoulées (motifs géométriques, palette ocre/indigo).',
  'Accessibilité : textes lisibles, contrastes soignés, descriptions pour chaque visuel informatif.',
  'Protection des données : consentement explicite, minimisation des champs, droit à l’oubli à tout moment.',
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="a-propos">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Studio</div>
              <h1 id="a-propos" className="section-title">Akoba, studio 3D premium avec des racines ivoiriennes.</h1>
              <p className="section-lead">
                Nous remplaçons les shootings traditionnels par des rendus 3D précis, inspirés par les motifs baoulés et une esthétique
                minimaliste. Notre équipe hybride Côte d’Ivoire / Europe privilégie la proximité et le dialogue.
              </p>
            </div>
            <div className="stacked">
              <article className="tile">
                <span className="meta-label">Vision</span>
                <p>
                  Offrir aux marques, PME et créateurs une production 3D haut de gamme, rapide et modulable. Nous utilisons des workflows
                  modernes (glTF/GLB, Three.js) et des process collaboratifs (chat temps réel, versioning des rendus).
                </p>
              </article>
              <article className="tile">
                <span className="meta-label">Culture visuelle</span>
                <p>
                  Les motifs géométriques des tissus baoulés inspirent nos patterns discrets. Les couleurs chaudes ocre/terre cuite et une
                  pointe d’indigo apportent chaleur et profondeur, sans jamais masquer le produit.
                </p>
              </article>
              <article className="tile">
                <span className="meta-label">Transparence</span>
                <ul>
                  {values.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

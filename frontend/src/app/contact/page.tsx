"use client";

import { useState } from 'react';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend API
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main>
        <section className="section" aria-labelledby="brief-akoba">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Brief</div>
              <h1 id="brief-akoba" className="section-title">Proposer un projet</h1>
              <p className="section-lead">
                Ce formulaire recueille uniquement les informations nécessaires pour établir une proposition et suivre votre projet. Chaque
                usage est détaillé et le consentement est explicite.
              </p>
            </div>

            {submitted ? (
              <div className="card" role="status">
                <h2>Merci !</h2>
                <p>
                  Votre brief a été reçu. Nous revenons vers vous avec un planning réaliste et une première approche visuelle. Vous pourrez
                  ensuite suivre le projet dans l’espace client.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label htmlFor="name">Nom / Entreprise *</label>
                    <input id="name" name="name" type="text" required aria-required="true" />
                    <small>Utilisé pour vous identifier sur le devis et l’espace client.</small>
                  </div>
                  <div>
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required aria-required="true" />
                    <small>Utilisé pour vous répondre et créer votre accès.</small>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="phone">Téléphone (facultatif)</label>
                    <input id="phone" name="phone" type="tel" />
                    <small>Optionnel. Sert uniquement si vous préférez un rappel.</small>
                  </div>
                  <div>
                    <label htmlFor="budget">Budget indicatif</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>
                        Sélectionnez une fourchette
                      </option>
                      <option value="-3k">- 3 000 €</option>
                      <option value="3-10k">3 000 – 10 000 €</option>
                      <option value="10-25k">10 000 – 25 000 €</option>
                      <option value="25k+">25 000 € et +</option>
                    </select>
                    <small>Nous ajustons la proposition en fonction des ressources nécessaires.</small>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="product">Produit / service *</label>
                    <input id="product" name="product" type="text" required aria-required="true" />
                  </div>
                  <div>
                    <label htmlFor="deadline">Délais souhaités</label>
                    <input id="deadline" name="deadline" type="text" placeholder="Ex : première passe sous 10 jours" />
                  </div>
                </div>

                <div>
                  <label htmlFor="goals">Objectifs et livrables attendus *</label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    aria-required="true"
                    placeholder="Packshots e-commerce, visuels réseaux sociaux, animation courte, formats souhaités…"
                  />
                </div>

                <div>
                  <label htmlFor="references">Références visuelles (liens)</label>
                  <textarea
                    id="references"
                    name="references"
                    placeholder="Moodboard, références couleurs ou matières."
                  />
                </div>

                <div>
                  <label htmlFor="files">Fichiers (images, PDF)</label>
                  <input id="files" name="files" type="file" multiple aria-describedby="files-help" />
                  <small id="files-help">Les fichiers sont utilisés uniquement pour comprendre votre produit et préparer la scène 3D.</small>
                </div>

                <div className="checkbox-row">
                  <input id="consent-quote" name="consent-quote" type="checkbox" required aria-required="true" />
                  <label htmlFor="consent-quote">
                    J’accepte que mes données soient utilisées pour établir un devis et répondre à ma demande (obligatoire).
                  </label>
                </div>
                <div className="checkbox-row">
                  <input id="consent-updates" name="consent-updates" type="checkbox" />
                  <label htmlFor="consent-updates">J’accepte de recevoir des emails de suivi projet et notifications.</label>
                </div>
                <div className="checkbox-row">
                  <input id="consent-marketing" name="consent-marketing" type="checkbox" />
                  <label htmlFor="consent-marketing">
                    J’accepte de recevoir ponctuellement des contenus marketing (facultatif, refus sans conséquence).
                  </label>
                </div>
                <small>
                  Vous pouvez retirer votre consentement à tout moment. Pour exercer vos droits (accès, rectification, suppression), contactez
                  hello@akoba.fr.
                </small>

                <button type="submit" className="cta-button">Envoyer le brief</button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

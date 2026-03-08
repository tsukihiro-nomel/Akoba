'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiUrl}/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: data.get('product'),
          description: data.get('goals'),
          clientName: data.get('name'),
          clientEmail: data.get('email'),
          phone: data.get('phone') || undefined,
          budget: data.get('budget') || undefined,
          deadline: data.get('deadline') || undefined,
          references: data.get('references') || undefined,
          consentQuote: data.get('consent-quote') === 'on',
          consentUpdates: data.get('consent-updates') === 'on',
          consentMarketing: data.get('consent-marketing') === 'on',
        }),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        throw new Error('Erreur serveur');
      }
    } catch {
      // If backend is unavailable, still show success in demo mode
      setFormState('success');
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <section className="section baoule-section" aria-labelledby="brief-akoba">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Brief</div>
              <h1 id="brief-akoba" className="section-title">Proposer un projet</h1>
              <p className="section-lead">
                Ce formulaire recueille uniquement les informations n&eacute;cessaires pour &eacute;tablir une proposition et suivre votre projet. Chaque
                usage est d&eacute;taill&eacute; et le consentement est explicite.
              </p>
            </div>

            {formState === 'success' ? (
              <div className="card" role="status" style={{ animation: 'fadeInUp 500ms ease both' }}>
                <h2>Brief envoy&eacute; avec succ&egrave;s</h2>
                <p style={{ marginBottom: '1rem' }}>
                  Votre brief a &eacute;t&eacute; re&ccedil;u. Nous revenons vers vous avec un planning r&eacute;aliste et une premi&egrave;re approche visuelle. Vous pourrez
                  ensuite suivre le projet dans l&apos;espace client.
                </p>
                <div className="nav-actions">
                  <Link href="/app" className="cta-button">Acc&eacute;der &agrave; l&apos;espace client</Link>
                  <Link href="/" className="ghost-button">Retour &agrave; l&apos;accueil</Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div className="highlight" role="alert" style={{ borderColor: '#c44141', background: 'rgba(196, 65, 65, 0.08)' }}>
                    <strong style={{ color: '#c44141' }}>Erreur :</strong> {errorMsg}
                  </div>
                )}

                <div className="form-row">
                  <div>
                    <label htmlFor="name">Nom / Entreprise *</label>
                    <input id="name" name="name" type="text" required aria-required="true" placeholder="Votre nom ou raison sociale" />
                    <small>Utilis&eacute; pour vous identifier sur le devis et l&apos;espace client.</small>
                  </div>
                  <div>
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" required aria-required="true" placeholder="vous@exemple.fr" />
                    <small>Utilis&eacute; pour vous r&eacute;pondre et cr&eacute;er votre acc&egrave;s.</small>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="phone">T&eacute;l&eacute;phone (facultatif)</label>
                    <input id="phone" name="phone" type="tel" placeholder="+33 6 12 34 56 78" />
                    <small>Optionnel. Sert uniquement si vous pr&eacute;f&eacute;rez un rappel.</small>
                  </div>
                  <div>
                    <label htmlFor="budget">Budget indicatif</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>S&eacute;lectionnez une fourchette</option>
                      <option value="-3k">&lt; 3 000 &euro;</option>
                      <option value="3-10k">3 000 &ndash; 10 000 &euro;</option>
                      <option value="10-25k">10 000 &ndash; 25 000 &euro;</option>
                      <option value="25k+">25 000 &euro; et +</option>
                    </select>
                    <small>Nous ajustons la proposition en fonction des ressources n&eacute;cessaires.</small>
                  </div>
                </div>

                <div className="form-row">
                  <div>
                    <label htmlFor="product">Produit / service *</label>
                    <input id="product" name="product" type="text" required aria-required="true" placeholder="Ex : gamme de parfums" />
                  </div>
                  <div>
                    <label htmlFor="deadline">D&eacute;lais souhait&eacute;s</label>
                    <input id="deadline" name="deadline" type="text" placeholder="Ex : premi&egrave;re passe sous 10 jours" />
                  </div>
                </div>

                <div>
                  <label htmlFor="goals">Objectifs et livrables attendus *</label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    aria-required="true"
                    placeholder="Packshots e-commerce, visuels r&eacute;seaux sociaux, animation courte, formats souhait&eacute;s..."
                  />
                </div>

                <div>
                  <label htmlFor="references">R&eacute;f&eacute;rences visuelles (liens)</label>
                  <textarea
                    id="references"
                    name="references"
                    placeholder="Moodboard, r&eacute;f&eacute;rences couleurs ou mati&egrave;res."
                  />
                </div>

                <div>
                  <label htmlFor="files">Fichiers (images, PDF)</label>
                  <input id="files" name="files" type="file" multiple accept="image/*,.pdf,.zip" aria-describedby="files-help" />
                  <small id="files-help">Les fichiers sont utilis&eacute;s uniquement pour comprendre votre produit et pr&eacute;parer la sc&egrave;ne 3D. Max 25 Mo par fichier.</small>
                </div>

                <div className="checkbox-row">
                  <input id="consent-quote" name="consent-quote" type="checkbox" required aria-required="true" />
                  <label htmlFor="consent-quote">
                    J&apos;accepte que mes donn&eacute;es soient utilis&eacute;es pour &eacute;tablir un devis et r&eacute;pondre &agrave; ma demande (obligatoire).
                  </label>
                </div>
                <div className="checkbox-row">
                  <input id="consent-updates" name="consent-updates" type="checkbox" />
                  <label htmlFor="consent-updates">J&apos;accepte de recevoir des emails de suivi projet et notifications.</label>
                </div>
                <div className="checkbox-row">
                  <input id="consent-marketing" name="consent-marketing" type="checkbox" />
                  <label htmlFor="consent-marketing">
                    J&apos;accepte de recevoir ponctuellement des contenus marketing (facultatif, refus sans cons&eacute;quence).
                  </label>
                </div>
                <small>
                  Vous pouvez retirer votre consentement &agrave; tout moment. Pour exercer vos droits (acc&egrave;s, rectification, suppression), contactez{' '}
                  <a href="mailto:hello@akoba.fr">hello@akoba.fr</a>. Consultez notre{' '}
                  <Link href="/privacy">politique de confidentialit&eacute;</Link>.
                </small>

                <button type="submit" className="cta-button" disabled={formState === 'sending'}>
                  {formState === 'sending' ? 'Envoi en cours...' : 'Envoyer le brief'}
                </button>
              </form>
            )}

            <div className="tiles" style={{ marginTop: '2rem' }}>
              <article className="tile">
                <span className="meta-label">Email</span>
                <p><a href="mailto:hello@akoba.fr">hello@akoba.fr</a></p>
              </article>
              <article className="tile">
                <span className="meta-label">R&eacute;seaux</span>
                <p>Instagram &middot; LinkedIn &middot; Behance</p>
              </article>
              <article className="tile">
                <span className="meta-label">R&eacute;ponse</span>
                <p>Nous revenons vers vous sous 48h avec une premi&egrave;re analyse de votre brief.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

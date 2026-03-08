'use client';

import { useState, useEffect } from 'react';

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem('akoba-cookie-consent');
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (p: CookiePrefs) => {
    localStorage.setItem('akoba-cookie-consent', JSON.stringify(p));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectOptional = () => save({ necessary: true, analytics: false, marketing: false });
  const saveCustom = () => save(prefs);

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Gestion des cookies">
      <div className="cookie-inner">
        <div className="cookie-text">
          <strong>Ce site utilise des cookies</strong>
          <p>
            Les cookies necessaires sont toujours actifs. Vous pouvez accepter ou refuser les cookies
            optionnels (statistiques, marketing). Aucun cookie optionnel n&apos;est installe avant votre choix.
          </p>
        </div>

        {showDetails && (
          <div className="cookie-details">
            <label className="cookie-option">
              <input type="checkbox" checked disabled />
              <span><strong>Necessaires</strong> — Securite et session. Toujours actifs.</span>
            </label>
            <label className="cookie-option">
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
              />
              <span><strong>Statistiques</strong> — Mesure d&apos;audience anonyme.</span>
            </label>
            <label className="cookie-option">
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
              />
              <span><strong>Marketing</strong> — Personnalisation optionnelle.</span>
            </label>
          </div>
        )}

        <div className="cookie-actions">
          {showDetails ? (
            <button className="cta-button" onClick={saveCustom}>Enregistrer mes choix</button>
          ) : (
            <>
              <button className="cta-button" onClick={acceptAll}>Tout accepter</button>
              <button className="ghost-button" onClick={rejectOptional}>Refuser les optionnels</button>
              <button className="cookie-link" onClick={() => setShowDetails(true)}>Personnaliser</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

type ProjectStatus = 'nouveau' | 'en_production' | 'en_validation' | 'termine';

interface Project {
  id: string;
  title: string;
  sector: string;
  status: ProjectStatus;
  date: string;
  description: string;
  deliverables: string;
}

interface Message {
  id: string;
  from: string;
  text: string;
  time: string;
  outgoing: boolean;
}

interface Version {
  id: string;
  label: string;
  date: string;
  note: string;
}

const statusLabels: Record<ProjectStatus, string> = {
  nouveau: 'Nouveau',
  en_production: 'En production',
  en_validation: 'En validation',
  termine: 'Termine',
};

const statusClasses: Record<ProjectStatus, string> = {
  nouveau: 'status-nouveau',
  en_production: 'status-production',
  en_validation: 'status-validation',
  termine: 'status-termine',
};

const demoProjects: Project[] = [
  {
    id: 'PRJ-001',
    title: 'Packshot Lipstick Collection',
    sector: 'Beaute',
    status: 'en_validation',
    date: '2026-02-18',
    description: '12 packshots HD pour la collection printemps. Fond neutre, 3 angles par produit. Formats WebP + PNG.',
    deliverables: 'Images 4K, modele glTF',
  },
  {
    id: 'PRJ-002',
    title: 'Casque Audio Spatial',
    sector: 'Tech',
    status: 'en_production',
    date: '2026-03-01',
    description: 'Modelisation + animation courte (rotation 360, zoom materiau). Export video 9:16 et glTF compresse.',
    deliverables: 'Video H.265, GLB optimise',
  },
  {
    id: 'PRJ-003',
    title: 'Campagne Boisson Energetique',
    sector: 'Food',
    status: 'nouveau',
    date: '2026-03-06',
    description: 'Scene 3D complete avec decor urbain nocturne. Declinaisons panneaux 4x3 et stories Instagram.',
    deliverables: 'Visuels multi-formats',
  },
  {
    id: 'PRJ-004',
    title: 'Montre Connectee Launch',
    sector: 'Tech',
    status: 'termine',
    date: '2026-01-10',
    description: 'Packshots sur fond lifestyle minimaliste. 6 variantes de bracelet. Livraison en WebP et JPEG.',
    deliverables: 'Images HD, video teaser',
  },
];

const demoMessages: Message[] = [
  { id: '1', from: 'Akoba Studio', text: 'Bonjour ! Les premiers rendus du lipstick sont prets. On a travaille sur 3 eclairages differents.', time: '10:24', outgoing: false },
  { id: '2', from: 'Vous', text: 'Super ! J\'adore l\'eclairage chaud, on peut pousser un peu plus les reflets sur le tube dore ?', time: '10:31', outgoing: true },
  { id: '3', from: 'Akoba Studio', text: 'Bien note, on ajuste les reflets et on vous envoie la v3 cet apres-midi.', time: '10:35', outgoing: false },
  { id: '4', from: 'Vous', text: 'Parfait, merci beaucoup !', time: '10:36', outgoing: true },
];

const demoVersions: Version[] = [
  { id: 'v3', label: 'v3 — Reflets ajustes', date: '06 mars 2026', note: 'Eclairage chaud + reflets dores renforces' },
  { id: 'v2', label: 'v2 — 3 eclairages', date: '04 mars 2026', note: 'Studio, naturel et chaud' },
  { id: 'v1', label: 'v1 — Premier rendu', date: '28 fev 2026', note: 'Rendu initial fond neutre' },
];

type View = 'dashboard' | 'project' | 'viewer';

export default function ClientDashboard() {
  const [view, setView] = useState<View>('dashboard');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState(demoMessages);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setView('project');
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages([...messages, {
      id: String(messages.length + 1),
      from: 'Vous',
      text: chatInput,
      time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      outgoing: true,
    }]);
    setChatInput('');
  };

  const counts = {
    total: demoProjects.length,
    production: demoProjects.filter(p => p.status === 'en_production').length,
    validation: demoProjects.filter(p => p.status === 'en_validation').length,
    termine: demoProjects.filter(p => p.status === 'termine').length,
  };

  return (
    <>
      <NavBar />
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div style={{ padding: '0.5rem 0.85rem', marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--terra-deep)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Espace Client
            </strong>
          </div>
          <button className={`sidebar-link ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}>
            Mes projets
          </button>
          <button className={`sidebar-link ${view === 'project' ? 'active' : ''}`} onClick={() => selectedProject && setView('project')} disabled={!selectedProject}>
            Detail projet
          </button>
          <button className={`sidebar-link ${view === 'viewer' ? 'active' : ''}`} onClick={() => setView('viewer')}>
            Visionneuse 3D
          </button>
          <div style={{ marginTop: 'auto', padding: '0.85rem', borderTop: '1px solid var(--border)' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Demo — apercu fonctionnel</span>
          </div>
        </aside>

        <main className="dashboard-main">
          {view === 'dashboard' && (
            <>
              <div className="dashboard-header">
                <h1>Tableau de bord</h1>
                <Link href="/contact" className="cta-button">Nouveau projet</Link>
              </div>

              <div className="stats-row">
                <div className="stat-card">
                  <strong>{counts.total}</strong>
                  <span>Projets</span>
                </div>
                <div className="stat-card">
                  <strong>{counts.production}</strong>
                  <span>En production</span>
                </div>
                <div className="stat-card">
                  <strong>{counts.validation}</strong>
                  <span>En validation</span>
                </div>
                <div className="stat-card">
                  <strong>{counts.termine}</strong>
                  <span>Termines</span>
                </div>
              </div>

              <table className="project-table">
                <thead>
                  <tr>
                    <th>Projet</th>
                    <th>Secteur</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th>Livrables</th>
                  </tr>
                </thead>
                <tbody>
                  {demoProjects.map((project) => (
                    <tr key={project.id} onClick={() => openProject(project)}>
                      <td data-label="Projet">
                        <strong>{project.title}</strong>
                        <br />
                        <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{project.id}</span>
                      </td>
                      <td data-label="Secteur">{project.sector}</td>
                      <td data-label="Statut">
                        <span className={`status-badge ${statusClasses[project.status]}`}>
                          {statusLabels[project.status]}
                        </span>
                      </td>
                      <td data-label="Date">{project.date}</td>
                      <td data-label="Livrables">{project.deliverables}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {view === 'project' && selectedProject && (
            <>
              <button className="back-link" onClick={() => setView('dashboard')}>
                &larr; Retour au tableau de bord
              </button>

              <div className="dashboard-header">
                <div>
                  <h1>{selectedProject.title}</h1>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{selectedProject.id} &middot; {selectedProject.sector}</span>
                </div>
                <span className={`status-badge ${statusClasses[selectedProject.status]}`}>
                  {statusLabels[selectedProject.status]}
                </span>
              </div>

              <div className="project-detail">
                <div className="detail-section">
                  <h3>Brief initial</h3>
                  <p>{selectedProject.description}</p>
                  <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="meta-label">{selectedProject.sector}</span>
                    <span className="meta-label">{selectedProject.deliverables}</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  <div className="detail-section">
                    <h3>Messages</h3>
                    <div className="chat-box">
                      {messages.map((msg) => (
                        <div key={msg.id} className={`chat-message ${msg.outgoing ? 'outgoing' : ''}`}>
                          <div className="chat-bubble">{msg.text}</div>
                          <span className="chat-meta">{msg.from} &middot; {msg.time}</span>
                        </div>
                      ))}
                    </div>
                    <div className="chat-input-row">
                      <input
                        type="text"
                        placeholder="Votre message..."
                        value={chatInput}
                        onChange={(e) => setChatInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                      />
                      <button className="cta-button" onClick={sendMessage}>Envoyer</button>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Historique des versions</h3>
                    <div className="version-list">
                      {demoVersions.map((v) => (
                        <div key={v.id} className="version-item">
                          <div>
                            <strong>{v.label}</strong>
                            <br />
                            <span>{v.note}</span>
                          </div>
                          <span>{v.date}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Previsualisations</h3>
                  <div className="viewer-placeholder">
                    <strong>Visionneuse 3D</strong>
                    <p>Integration Three.js / glTF a venir. Cliquez sur Visionneuse 3D dans le menu pour un apercu.</p>
                    <div className="viewer-controls">
                      <button onClick={() => setView('viewer')}>Ouvrir la visionneuse</button>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Livrables</h3>
                  <div className="version-list">
                    <div className="version-item">
                      <div>
                        <strong>lipstick-collection-v3.zip</strong>
                        <br />
                        <span>12 packshots 4K + modele glTF</span>
                      </div>
                      <button className="ghost-button" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>
                        Telecharger
                      </button>
                    </div>
                    <div className="version-item">
                      <div>
                        <strong>preview-eclairage-chaud.webp</strong>
                        <br />
                        <span>Previsualisation eclairage v3</span>
                      </div>
                      <button className="ghost-button" style={{ padding: '0.35rem 0.75rem', fontSize: '0.82rem' }}>
                        Telecharger
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {view === 'viewer' && (
            <>
              <button className="back-link" onClick={() => setView('dashboard')}>
                &larr; Retour au tableau de bord
              </button>
              <div className="dashboard-header">
                <h1>Visionneuse 3D</h1>
              </div>

              <div className="viewer-placeholder" style={{ minHeight: '500px' }}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: 'relative' }}>
                  <rect x="10" y="20" width="60" height="45" rx="4" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                  <polygon points="40,10 65,28 15,28" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                  <circle cx="40" cy="42" r="12" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
                  <circle cx="40" cy="42" r="4" fill="white" opacity="0.6" />
                </svg>
                <strong>Visionneuse glTF / GLB</strong>
                <p>
                  Integration Three.js pour lire les modeles 3D au format glTF/GLB.<br />
                  Rotation, zoom, deplacement, fond neutre et mode plein ecran.
                </p>
                <div className="viewer-controls">
                  <button>Rotation</button>
                  <button>Zoom +</button>
                  <button>Zoom -</button>
                  <button>Reset</button>
                  <button>Plein ecran</button>
                  <button>Fond clair / sombre</button>
                </div>
                <p style={{ marginTop: '1rem', fontSize: '0.82rem', opacity: 0.6 }}>
                  Format recommande : glTF/GLB avec textures compressees et LOD.
                </p>
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

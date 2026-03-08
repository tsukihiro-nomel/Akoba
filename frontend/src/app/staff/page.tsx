'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

type ProjectStatus = 'nouveau' | 'en_production' | 'en_validation' | 'termine';

interface StaffProject {
  id: string;
  title: string;
  client: string;
  sector: string;
  status: ProjectStatus;
  assignee: string;
  date: string;
  description: string;
  budget: string;
}

const statusLabels: Record<ProjectStatus, string> = {
  nouveau: 'Nouveau',
  en_production: 'En production',
  en_validation: 'En validation',
  termine: 'Terminé',
};

const statusClasses: Record<ProjectStatus, string> = {
  nouveau: 'status-nouveau',
  en_production: 'status-production',
  en_validation: 'status-validation',
  termine: 'status-termine',
};

const allStatuses: ProjectStatus[] = ['nouveau', 'en_production', 'en_validation', 'termine'];

const demoProjects: StaffProject[] = [
  {
    id: 'PRJ-001',
    title: 'Packshot Lipstick Collection',
    client: 'Maison Rose',
    sector: 'Beauté',
    status: 'en_validation',
    assignee: 'Aya K.',
    date: '2026-02-18',
    description: '12 packshots HD pour la collection printemps. Fond neutre, 3 angles par produit.',
    budget: '3 000 – 10 000 €',
  },
  {
    id: 'PRJ-002',
    title: 'Casque Audio Spatial',
    client: 'SonoTech',
    sector: 'Tech',
    status: 'en_production',
    assignee: 'Kouamé D.',
    date: '2026-03-01',
    description: 'Modélisation + animation courte. Export vidéo 9:16 et glTF compressé.',
    budget: '10 000 – 25 000 €',
  },
  {
    id: 'PRJ-003',
    title: 'Campagne Boisson Énergétique',
    client: 'Vibe Drinks',
    sector: 'Food',
    status: 'nouveau',
    assignee: 'Non assigné',
    date: '2026-03-06',
    description: 'Scène 3D complète avec décor urbain nocturne. Déclinaisons panneaux 4×3 et stories.',
    budget: '10 000 – 25 000 €',
  },
  {
    id: 'PRJ-004',
    title: 'Montre Connectée Launch',
    client: 'TimeTech',
    sector: 'Tech',
    status: 'termine',
    assignee: 'Aya K.',
    date: '2026-01-10',
    description: 'Packshots sur fond lifestyle. 6 variantes de bracelet.',
    budget: '3 000 – 10 000 €',
  },
  {
    id: 'PRJ-005',
    title: 'Gamme Skincare Bio',
    client: 'NaturElle',
    sector: 'Beauté',
    status: 'en_production',
    assignee: 'Moussa T.',
    date: '2026-02-25',
    description: 'Packshots + scène de campagne avec textures végétales. 8 produits.',
    budget: '10 000 – 25 000 €',
  },
];

type View = 'dashboard' | 'project';

export default function StaffDashboard() {
  const [view, setView] = useState<View>('dashboard');
  const [selectedProject, setSelectedProject] = useState<StaffProject | null>(null);
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');
  const [projectStatuses, setProjectStatuses] = useState<Record<string, ProjectStatus>>(
    Object.fromEntries(demoProjects.map(p => [p.id, p.status]))
  );

  const filteredProjects = demoProjects.filter(
    p => statusFilter === 'all' || projectStatuses[p.id] === statusFilter
  );

  const openProject = (project: StaffProject) => {
    setSelectedProject(project);
    setView('project');
  };

  const updateStatus = (projectId: string, newStatus: ProjectStatus) => {
    setProjectStatuses(prev => ({ ...prev, [projectId]: newStatus }));
  };

  const counts = {
    total: demoProjects.length,
    nouveau: demoProjects.filter(p => projectStatuses[p.id] === 'nouveau').length,
    production: demoProjects.filter(p => projectStatuses[p.id] === 'en_production').length,
    validation: demoProjects.filter(p => projectStatuses[p.id] === 'en_validation').length,
    termine: demoProjects.filter(p => projectStatuses[p.id] === 'termine').length,
  };

  return (
    <>
      <NavBar />
      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          <div style={{ padding: '0.5rem 0.85rem', marginBottom: '0.5rem' }}>
            <strong style={{ color: 'var(--indigo)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Zone Staff
            </strong>
          </div>
          <button className={`sidebar-link ${view === 'dashboard' ? 'active' : ''}`} onClick={() => setView('dashboard')}>
            Tous les projets
          </button>
          <button className={`sidebar-link ${view === 'project' ? 'active' : ''}`} onClick={() => selectedProject && setView('project')} disabled={!selectedProject}>
            Détail projet
          </button>
          <div style={{ marginTop: 'auto', padding: '0.85rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>Connecté : Admin</span>
            <span style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>Démo — aperçu fonctionnel</span>
          </div>
        </aside>

        <main className="dashboard-main">
          {view === 'dashboard' && (
            <>
              <div className="dashboard-header">
                <h1>Dashboard Staff</h1>
                <div className="staff-actions">
                  <Link href="/contact" className="staff-btn primary" style={{ textDecoration: 'none' }}>Onboarder un projet</Link>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-card">
                  <strong>{counts.total}</strong>
                  <span>Total projets</span>
                </div>
                <div className="stat-card">
                  <strong>{counts.nouveau}</strong>
                  <span>Nouveaux</span>
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
                  <span>Terminés</span>
                </div>
              </div>

              <div className="filter-row">
                <button className={`filter-pill ${statusFilter === 'all' ? 'active' : ''}`} onClick={() => setStatusFilter('all')}>
                  Tous ({counts.total})
                </button>
                <button className={`filter-pill ${statusFilter === 'nouveau' ? 'active' : ''}`} onClick={() => setStatusFilter('nouveau')}>
                  Nouveaux ({counts.nouveau})
                </button>
                <button className={`filter-pill ${statusFilter === 'en_production' ? 'active' : ''}`} onClick={() => setStatusFilter('en_production')}>
                  Production ({counts.production})
                </button>
                <button className={`filter-pill ${statusFilter === 'en_validation' ? 'active' : ''}`} onClick={() => setStatusFilter('en_validation')}>
                  Validation ({counts.validation})
                </button>
                <button className={`filter-pill ${statusFilter === 'termine' ? 'active' : ''}`} onClick={() => setStatusFilter('termine')}>
                  Terminés ({counts.termine})
                </button>
              </div>

              <table className="project-table">
                <thead>
                  <tr>
                    <th>Projet</th>
                    <th>Client</th>
                    <th>Responsable</th>
                    <th>Statut</th>
                    <th>Budget</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project) => (
                    <tr key={project.id} onClick={() => openProject(project)}>
                      <td data-label="Projet">
                        <strong>{project.title}</strong>
                        <br />
                        <span style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{project.id} &middot; {project.sector}</span>
                      </td>
                      <td data-label="Client">{project.client}</td>
                      <td data-label="Responsable">{project.assignee}</td>
                      <td data-label="Statut">
                        <span className={`status-badge ${statusClasses[projectStatuses[project.id]]}`}>
                          {statusLabels[projectStatuses[project.id]]}
                        </span>
                      </td>
                      <td data-label="Budget">{project.budget}</td>
                      <td data-label="Date">{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredProjects.length === 0 && (
                <div className="highlight" style={{ marginTop: '1rem', textAlign: 'center' }}>
                  <p>Aucun projet avec ce filtre.</p>
                </div>
              )}
            </>
          )}

          {view === 'project' && selectedProject && (
            <>
              <button className="back-link" onClick={() => setView('dashboard')}>
                &larr; Retour à la liste
              </button>

              <div className="dashboard-header">
                <div>
                  <h1>{selectedProject.title}</h1>
                  <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                    {selectedProject.id} &middot; {selectedProject.client} &middot; {selectedProject.sector}
                  </span>
                </div>
                <span className={`status-badge ${statusClasses[projectStatuses[selectedProject.id]]}`}>
                  {statusLabels[projectStatuses[selectedProject.id]]}
                </span>
              </div>

              <div className="project-detail">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  <div className="detail-section">
                    <h3>Brief client</h3>
                    <p>{selectedProject.description}</p>
                    <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span className="meta-label">{selectedProject.sector}</span>
                      <span className="meta-label">{selectedProject.budget}</span>
                      <span className="meta-label">Responsable : {selectedProject.assignee}</span>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Mettre à jour le statut</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                      Le changement est synchronisé en temps réel avec le dashboard client.
                    </p>
                    <div className="staff-actions">
                      {allStatuses.map((s) => (
                        <button
                          key={s}
                          className={`staff-btn ${projectStatuses[selectedProject.id] === s ? 'primary' : ''}`}
                          onClick={() => updateStatus(selectedProject.id, s)}
                        >
                          {statusLabels[s]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                  <div className="detail-section">
                    <h3>Chat avec le client</h3>
                    <div className="chat-box">
                      <div className="chat-message">
                        <div className="chat-bubble">Bonjour ! Les premiers rendus du lipstick sont prêts.</div>
                        <span className="chat-meta">Aya K. &middot; 10:24</span>
                      </div>
                      <div className="chat-message outgoing">
                        <div className="chat-bubble">J&apos;adore l&apos;éclairage chaud, on peut pousser les reflets ?</div>
                        <span className="chat-meta">Client &middot; 10:31</span>
                      </div>
                      <div className="chat-message">
                        <div className="chat-bubble">Bien noté, on ajuste et on envoie la v3.</div>
                        <span className="chat-meta">Aya K. &middot; 10:35</span>
                      </div>
                    </div>
                    <div className="chat-input-row">
                      <input type="text" placeholder="Répondre au client..." />
                      <button className="cta-button">Envoyer</button>
                    </div>
                  </div>

                  <div className="detail-section">
                    <h3>Notes internes</h3>
                    <div className="internal-note">
                      <strong>Note interne (invisible pour le client)</strong>
                      Le client veut un rendu plus chaud. Aya suggère d&apos;ajouter un rim light orange sur les tubes dorés.
                      Moussa confirme que le modèle supporte le changement sans ré-export.
                    </div>
                    <div className="internal-note" style={{ marginTop: '0.5rem' }}>
                      <strong>Retouche assignée à Aya K.</strong>
                      Ajuster les reflets spéculaires sur le tube doré. Deadline : 07 mars.
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Upload des fichiers</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                    Les fichiers uploadés apparaissent immédiatement dans l&apos;espace client.
                  </p>
                  <div className="staff-actions">
                    <button className="staff-btn">Prévisualisations</button>
                    <button className="staff-btn">Modèle 3D (glTF/GLB)</button>
                    <button className="staff-btn">Rendu intermédiaire</button>
                    <button className="staff-btn primary">Rendu final</button>
                  </div>
                  <div className="version-list" style={{ marginTop: '1rem' }}>
                    <div className="version-item">
                      <div>
                        <strong>lipstick-v3-reflets.glb</strong>
                        <br />
                        <span>Uploadé par Aya K. &middot; 06 mars 2026</span>
                      </div>
                      <span className="meta-label">glTF</span>
                    </div>
                    <div className="version-item">
                      <div>
                        <strong>preview-eclairage-chaud.webp</strong>
                        <br />
                        <span>Uploadé par Aya K. &middot; 04 mars 2026</span>
                      </div>
                      <span className="meta-label">WebP</span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <h3>Actions rapides</h3>
                  <div className="staff-actions">
                    <button className="staff-btn">Envoyer un message</button>
                    <button className="staff-btn">Ajouter une version</button>
                    <button className="staff-btn">Assigner un responsable</button>
                    <button className="staff-btn primary">Valider le projet</button>
                    <button className="staff-btn" style={{ color: '#a06800' }}>Clôturer</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';

const projects = [
  {
    sector: 'Beauté',
    title: 'Édition Lipstick',
    brief: 'Packshot et scène éditoriale avec 3 palettes couleur et 2 éclairages. 12 variantes exportées en WebP et vidéo courte.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
    alt: 'Rouges à lèvres rouges sur podium géométrique',
    deliverables: 'Images 4K, glTF, vidéo',
  },
  {
    sector: 'Tech',
    title: 'Audio Spatial',
    brief: 'Modélisation + animation courte d\u2019un casque audio haut de gamme. Export glTF compressé et vidéo 9:16.',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80',
    alt: 'Casque audio noir en 3D sur fond indigo',
    deliverables: 'GLB optimisé, H.265',
  },
  {
    sector: 'Food',
    title: 'Gourmandises',
    brief: 'Packshots multi-saveurs avec textures gourmandes et déclinaisons réseaux sociaux. Palette baoulé.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    alt: 'Desserts colorés alignés en 3D',
    deliverables: 'WebP, PNG HD',
  },
  {
    sector: 'Beauté',
    title: 'Skincare Bio',
    brief: 'Gamme complète de 8 produits avec textures végétales. Scène de campagne nature et packshots e-commerce.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=900&q=80',
    alt: 'Flacons de soin naturels alignés sur fond végétal',
    deliverables: 'Images HD, vidéo teaser',
  },
  {
    sector: 'Tech',
    title: 'Montre Connectée',
    brief: 'Packshots lifestyle minimalistes avec 6 variantes de bracelet. Éclairage studio et ambiance naturelle.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    alt: 'Montre connectée sur fond minimaliste',
    deliverables: 'WebP, JPEG HD',
  },
  {
    sector: 'Food',
    title: 'Boisson Énergétique',
    brief: 'Scène 3D cinématographique avec décor urbain nocturne. Panneaux 4\u00d73, stories et posts Instagram.',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    alt: 'Canette 3D dans un décor urbain nocturne avec néons',
    deliverables: 'Multi-formats, vidéo',
  },
];

const sectors = ['Tous', ...Array.from(new Set(projects.map(p => p.sector)))];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous' ? projects : projects.filter(p => p.sector === filter);

  return (
    <>
      <NavBar />
      <main>
        <section className="section baoule-section" aria-labelledby="portfolio-akoba">
          <div className="container">
            <div className="section-header">
              <div className="section-kicker">Portfolio</div>
              <h1 id="portfolio-akoba" className="section-title">Sélection de projets 3D.</h1>
              <p className="section-lead">
                Chaque vignette présente un brief, les étapes et les livrables. Filtrez par secteur pour trouver les projets pertinents.
              </p>
            </div>

            <div className="filter-row">
              {sectors.map((s) => (
                <button
                  key={s}
                  className={`filter-pill ${filter === s ? 'active' : ''}`}
                  onClick={() => setFilter(s)}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="grid" role="list">
              {filtered.map((project) => (
                <article key={project.title} className="card showcase-card" role="listitem">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={620}
                    height={420}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <div className="service-meta">
                    <span className="meta-label">{project.sector}</span>
                    <span>{project.deliverables}</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.brief}</p>
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

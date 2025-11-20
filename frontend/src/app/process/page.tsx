import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const steps = [
  {
    title: 'Brief',
    description: 'Vous remplissez notre formulaire et nous envoyez les ressources nécessaires.'
  },
  {
    title: 'Préparation',
    description: 'Nous préparons un plan de travail et une estimation de délai.'
  },
  {
    title: 'Production',
    description: 'Modélisation, texturing et lighting selon vos besoins.'
  },
  {
    title: 'Validation',
    description: 'Vous recevez des prévisualisations et demandez des retouches si besoin.'
  },
  {
    title: 'Livraison',
    description: 'Nous vous livrons les rendus finaux en haute résolution.'
  }
];

export default function ProcessPage() {
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Notre processus</h1>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="flex items-start">
              <span className="text-2xl font-bold mr-3" style={{ color: '#c47e41' }}>
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </main>
      <Footer />
    </>
  );
}
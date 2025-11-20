import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Donnez vie à vos idées en 3D
      </h1>
      <p className="max-w-2xl text-gray-700">
        Akoba transforme vos concepts en visuels publicitaires immersifs et flexibles. Réduisez vos coûts, gagnez du temps
        et explorez des variantes infinies sans refaire un shooting.
      </p>
      <Link href="/contact" className="cta-button">
        Proposer un projet
      </Link>
    </section>
  );
}
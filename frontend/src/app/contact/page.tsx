"use client";

import { useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send form data to backend API
    setSubmitted(true);
  };
  return (
    <>
      <NavBar />
      <main>
        <h1 className="text-3xl font-bold mb-6">Proposer un projet</h1>
        {submitted ? (
          <p className="text-green-600">
            Merci pour votre message ! Nous revenons vers vous dès que possible.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">
                Nom / Entreprise
              </label>
              <input
                id="name"
                type="text"
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="budget" className="font-semibold mb-1">
                Budget (indicatif)
              </label>
              <input
                id="budget"
                type="text"
                placeholder="ex : 500 €"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold mb-1">
                Description du projet
              </label>
              <textarea
                id="message"
                required
                className="border border-gray-300 p-2 rounded h-32"
              ></textarea>
            </div>
            <button type="submit" className="cta-button">
              Envoyer
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
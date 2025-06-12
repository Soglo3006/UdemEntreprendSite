import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c1e] to-[#121232] text-white font-sans">
      <header className="flex items-center justify-between px-6 py-4 bg-[#0c0c1e] shadow-md">
        <div className="text-xl font-bold text-blue-300">
          <span className="text-white">UdeM </span>Entreprend
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#apropos" className="hover:text-blue-400 transition">Qui sommes-nous?</a>
          <a href="#evenements" className="hover:text-blue-400 transition">Équipes</a>
          <a href="#partenaires" className="hover:text-blue-400 transition">Événements</a>
          <a href="#formations" className="hover:text-blue-400 transition">Partenaire</a>
          <a href="#benevoles" className="hover:text-blue-400 transition">Bénévoles</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
      </header>
      <div className="p-10 text-center border border-blue-500 m-6 rounded-md">
        <h1 className="text-blue-300 text-6xl">Udem <span className='text-white'>Entreprend</span></h1>
        <p className='text-xl'>Faconnons ensemble l'avenir de l'entrepreneuriat universitaire</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Découvrir le club</button>
      </div>
      <div className='mb-10 p-6'>
        <h1 className='text-2xl text-center'>Qui <span className='text-blue-300'>sommes nous</span></h1>
        <p>UdeM Entreprend est l'association étudiante dédiée à l'entrepreneuriat de l'Université de Montréal.
          Nous accompagnons les étudiants dans leur parcours entrepreneurial en offrant des ressources,
          des formations et un réseau solide pour transformer leurs idées en projets concrets.</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-2xl font-semibold text-blue-300 mb-2">Notre Mision</h1>
            <p className="text-gray-300">
              Accompagner, former et connecter les étudiants entrepreneurs en leur fournissant les outils,
              ressources et opportunités nécessaires pour réussir dans leurs projets entrepreneuriaux.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/ton-image.jpg" alt="Vision de l'association" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
          <div className="w-full md:w-1/2">
            <img src="/" alt="Vision de l'association" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h1 className='text-2xl font-semibold text-blue-300 mb-2'>Notre Vision</h1>
            <p className="text-gray-300">
              Créer un écosystème entrepreneurial dynamique au sein de l'Université de Montréal,
              où chaque étudiant peut développer son potentiel entrepreneurial et contribuer à l'innovation de demain.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center mt-16 space-y-6">
          <div className="max-w-3xl">
            <h1 className='text-2xl font-semibold text-blue-300 mb-2'>Notre Histoire</h1>
            <p className="text-gray-300">Fondée par des étudiants passionnés d'entrepreneuriat, UdeM Entreprend a vu le jour avec l'ambition de créer une communauté entrepreneuriale forte à l'Université de Montréal.
              Depuis nos débuts, nous avons accompagné des centaines d'étudiants dans la réalisation de leurs projets, organisant des événements inspirants et créant des liens durables avec
              l'écosystème entrepreneurial montréalais.</p>
        </div>
        <div className="w-full md:w-1/2">
            <img src="/ton-image.jpg" alt="Vision de l'association" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
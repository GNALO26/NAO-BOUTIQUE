import { Users, Target, Award, Heart } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '500+', label: 'Clients satisfaits' },
    { number: '1 an', label: "Garantie offerte" },
    { number: '48h', label: 'Livraison express' },
    { number: '24/7', label: 'Support technique' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Expertise Technique',
      description: 'Notre équipe de techniciens certifiés vous conseille et vous accompagne dans tous vos projets informatiques.'
    },
    {
      icon: Heart,
      title: 'Service Client Excellence',
      description: 'Votre satisfaction est notre priorité. Nous nous engageons à vous offrir un service personnalisé et réactif.'
    },
    {
      icon: Award,
      title: 'Qualité Garantie',
      description: 'Tous nos produits sont testés et bénéficient de garanties constructeur. Qualité et durabilité assurées.'
    },
    {
      icon: Users,
      title: 'Accompagnement',
      description: 'De la sélection du produit à son installation, nous vous guidons à chaque étape de votre projet.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              G-L NAO <span className="text-primary-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Votre partenaire de confiance pour tous vos besoins en informatique au Bénin
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fondée en 2024, <strong>G-L NAO Services</strong> est née de la passion pour la technologie 
                  et du désir de rendre l'informatique accessible à tous au Bénin.
                </p>
                <p>
                  Notre mission est simple : fournir des équipements informatiques de qualité, 
                  accompagnés d'un service exceptionnel et de conseils experts.
                </p>
                <p>
                  Que vous soyez un particulier cherchant le PC parfait pour le gaming, 
                  un professionnel besoin d'une station de travail performante, ou une entreprise 
                  nécessitant une infrastructure complète, nous avons la solution adaptée à vos besoins.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="card p-8 transform rotate-2">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Notre équipe" 
                  className="rounded-xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et interactions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Nous Choisir */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Pourquoi Choisir G-L NAO Services ?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Produits de qualité testés et garantis",
                "Service après-vente réactif et efficace",
                "Conseils techniques personnalisés",
                "Livraison rapide dans tout le Bénin",
                "Installation et configuration incluses",
                "Paiements sécurisés et facilités de paiement"
              ].map((advantage, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700 font-medium">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à Commencer Votre Projet ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez nos centaines de clients satisfaits et découvrez la différence G-L NAO Services
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/0156035888"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              Nous Contacter
            </a>
            <a 
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-lg"
            >
              Voir le Catalogue
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
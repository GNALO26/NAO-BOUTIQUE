import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative z-50">
      <div className="container py-12">
        {/* Contenu principal centré */}
        <div className="flex flex-col items-center text-center">
          
          {/* Logo et nom centrés */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white font-bold text-2xl">GL</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">G-L NAO Services</h2>
            <p className="text-gray-400 text-lg">Votre expert informatique au Bénin</p>
          </div>

          {/* Description centrée */}
          <p className="text-gray-400 mb-8 max-w-2xl text-center leading-relaxed text-lg">
            Spécialistes en vente de PC, laptops et accessoires informatiques. 
            Nous vous accompagnons dans tous vos projets technologiques avec des produits 
            de qualité et un service exceptionnel.
          </p>

          {/* Icônes sociales centrées */}
          <div className="flex gap-6 mb-8">
            <a href="https://www.facebook.com/profile.php?id=61573220407701" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/olympe-g-685637366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 transform hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
          </div>

          {/* Informations contact centrées */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 w-full max-w-3xl">
            {/* Téléphone */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Téléphone</h3>
              <a 
                href="tel:0156035888"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
              >
                01 56 03 58 88
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a 
                href="yuriadmirators@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
              >
                yuriadmirators@gmail.com
              </a>
            </div>

            {/* Adresse */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-gray-300 text-lg">Cotonou, Bénin</p>
            </div>
          </div>

          {/* Bouton WhatsApp centré */}
          <div className="mb-8">
            <p className="text-gray-400 mb-4 text-lg">Besoin d'aide rapidement ?</p>
            <a 
              href="https://wa.me/0156035888"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
            >
              <MessageCircle className="w-6 h-6" />
              Contact WhatsApp
            </a>
          </div>

          {/* Liens rapides centrés */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              À Propos
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              Contact
            </a>
            <a href="/category/pc-gamer" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              PC Gamer
            </a>
            <a href="/category/laptops" className="text-gray-400 hover:text-white transition-colors duration-200 text-lg">
              Laptops
            </a>
          </div>

          {/* Ligne de séparation */}
          <div className="w-full max-w-4xl border-t border-gray-800 my-8"></div>

          {/* Copyright centré */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} G-L NAO Services. Tous droits réservés.
            </p>
            <div className="flex justify-center gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Confidentialité
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
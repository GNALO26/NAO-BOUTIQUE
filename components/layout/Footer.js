import { Phone, Mail, MapPin, Facebook, Linkedin , Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white relative z-50">
      <div className="container py-8">
        {/* Deux colonnes compactes */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Colonne de gauche - Informations */}
          <div className="text-center md:text-left">
            {/* Logo et nom */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">GL</span>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">G-L NAO Services</h2>
                <p className="text-gray-400 text-sm">Votre expert informatique au Bénin</p>
              </div>
            </div>

            {/* Description courte */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Spécialiste en PC, laptops et accessoires informatiques. 
              Service qualité et accompagnement personnalisé.
            </p>

            {/* Contacts */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:0156035888" className="text-gray-300 hover:text-white transition-colors text-sm">
                  01 56 03 58 88
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:yuriadmirators@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  yuriadmirators@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Cotonou, Bénin</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.facebook.com/profile.php?id=61573220407701" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/olympe-g-685637366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne de droite - Liens et CTA */}
          <div className="text-center md:text-left">
            {/* Liens rapides */}
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm py-1">Accueil</a>
              <a href="/category/pc-gamer" className="text-gray-400 hover:text-white transition-colors text-sm py-1">PC Gamer</a>
              <a href="/category/laptops" className="text-gray-400 hover:text-white transition-colors text-sm py-1">Laptops</a>
              <a href="/category/pc-bureau" className="text-gray-400 hover:text-white transition-colors text-sm py-1">PC Bureau</a>
              <a href="/category/accessoires" className="text-gray-400 hover:text-white transition-colors text-sm py-1">Accessoires</a>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm py-1">Contact</a>
            </div>

            {/* Bouton WhatsApp */}
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-3">Besoin d'aide ?</p>
              <a 
                href="https://wa.me/0156035888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-sm transition-all duration-200 w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Contact WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} G-L NAO Services. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
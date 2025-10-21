import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">G-L</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">G-L NAO Services</h2>
                <p className="text-gray-400 text-sm">Votre expert informatique au Bénin</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Spécialistes en vente de PC, laptops et accessoires informatiques. 
              Nous vous accompagnons dans tous vos projets technologiques avec des produits 
              de qualité et un service exceptionnel.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61573220407701" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/olympe-g-685637366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors">
                <linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <a 
                    href="tel:0156035888"
                    className="hover:text-primary-400 transition-colors"
                  >
                    01 56 03 58 88
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a 
                    href="mailto:yuriadmirators@gmail.com"
                    className="hover:text-primary-400 transition-colors"
                  >
                    yuriadmirators@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <div>
                  <p className="text-gray-400 text-sm">Adresse</p>
                  <p>Cotonou, Bénin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
            <div className="space-y-3">
              <a href="/about" className="block text-gray-400 hover:text-white transition-colors">
                À Propos
              </a>
              <a href="/services" className="block text-gray-400 hover:text-white transition-colors">
                Services
              </a>
              <a href="/guarantee" className="block text-gray-400 hover:text-white transition-colors">
                Garantie
              </a>
              <a href="/delivery" className="block text-gray-400 hover:text-white transition-colors">
                Livraison
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 G-L NAO Services. Tous droits réservés.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Confidentialité
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
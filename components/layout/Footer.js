import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container py-8">
        <div className="footer-content">
          {/* Colonne de gauche */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-img">
                <span className="text-white font-bold">GL</span>
              </div>
              <div className="footer-logo-text">
                <div className="footer-logo-title">G-L NAO Services</div>
                <div className="footer-logo-subtitle">Expert Informatique Bénin</div>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-4">
              Spécialiste en PC, laptops et accessoires informatiques. 
              Service qualité et accompagnement personnalisé.
            </p>
            
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <a href="tel:0156035888" className="hover:text-white transition-colors">
                  01 56 03 58 88
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href="mailto:yuriadmirators@gmail.com" className="hover:text-white transition-colors">
                  yuriadmirators@gmail.com
                </a>
              </div>
              <div className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="footer-section">
            <h3 className="font-semibold mb-4 text-white">Navigation Rapide</h3>
            <div className="footer-links">
              <a href="/" className="footer-link">Accueil</a>
              <a href="/category/pc-gamer" className="footer-link">PC Gamer</a>
              <a href="/category/laptops" className="footer-link">Laptops</a>
              <a href="/category/pc-bureau" className="footer-link">PC Bureau</a>
              <a href="/category/accessoires" className="footer-link">Accessoires</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://wa.me/2290156035888"
                className="btn btn-whatsapp w-full justify-center"
              >
                <MessageCircle className="w-4 h-4" />
                Contact WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © {currentYear} G-L NAO Services. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
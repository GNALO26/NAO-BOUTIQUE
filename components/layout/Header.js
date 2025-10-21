import { useState } from 'react'
import { Menu, X, ShoppingCart, Search, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'PC de Bureau', href: '/category/pc' },
    { name: 'Laptops', href: '/category/laptops' },
    { name: 'Accessoires', href: '/category/accessories' },
    { name: 'Composants', href: '/category/components' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-accent-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">GL</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">G-L NAO Services</h1>
              <p className="text-xs text-gray-500">Votre expert informatique</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-primary-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <a 
              href="https://wa.me/0156035888"
              className="btn-primary text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Nous Appeler
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-slide-up">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="https://wa.me/0156035888"
                  className="btn-primary text-sm w-full justify-center flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Nous Appeler
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
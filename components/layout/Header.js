import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'PC Gamer', href: '/category/pc-gamer' },
    { name: 'Laptops', href: '/category/laptops' },
    { name: 'PC Bureau', href: '/category/pc-bureau' },
    { name: 'Accessoires', href: '/category/accessoires' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/logo.jpg"
                alt="G-L NAO Services"
                width={48}
                height={48}
                className="rounded-lg object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">G-L NAO Services</h1>
              <p className="text-xs text-gray-500">Expert Informatique</p>
            </div>
          </Link>

          {/* Navigation Desktop - BIEN ESPACÉE */}
          <nav className="hidden lg:flex items-center gap-8 mx-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 px-1 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions Desktop - Alignées avec navigation */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a 
              href="https://wa.me/0156035888"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a 
              href="tel:0156035888"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 animate-slide-up bg-white">
            <nav className="flex flex-col py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="py-3 px-6 text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex gap-3 p-4 border-t border-gray-200 mt-2">
                <a 
                  href="https://wa.me/0156035888"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="tel:0156035888"
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Appeler</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
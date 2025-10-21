import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  ShoppingCart, 
  Cpu, 
  Laptop, 
  Headphones, 
  Monitor, 
  Shield, 
  Truck, 
  Check, 
  Star,
  Zap,
  Users,
  Award
} from 'lucide-react'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    // Données temporaires - remplacez par vos vraies données
    setFeaturedProducts([
      {
        id: 1,
        name: "PC Gamer Elite RTX 4080",
        price: 1250000,
        image: "/images/products/pc-gamer-1/photo-avant.jpg",
        features: ["i9-13900K", "RTX 4080", "32GB RAM"],
        rating: 4.8
      },
      {
        id: 2,
        name: "Laptop Gaming MSI",
        price: 850000,
        image: "/images/products/laptop-1/face.jpg",
        features: ["i7-13650H", "RTX 4060", "16GB RAM"],
        rating: 4.6
      },
      {
        id: 3,
        name: "Écran Gaming 27\"",
        price: 350000,
        image: "/images/products/accessoires/ecran-1.jpg",
        features: ["240Hz", "QHD", "1ms"],
        rating: 4.7
      }
    ])
  }, [])

  const categories = [
    { icon: Cpu, name: "PC Gamer", count: "15+ modèles", slug: "pc-gamer" },
    { icon: Laptop, name: "Laptops", count: "12+ modèles", slug: "laptops" },
    { icon: Monitor, name: "PC Bureau", count: "20+ modèles", slug: "pc-bureau" },
    { icon: Headphones, name: "Accessoires", count: "50+ articles", slug: "accessoires" }
  ]

  const features = [
    { icon: Shield, title: "Garantie 2 Ans", description: "Support technique inclus" },
    { icon: Truck, title: "Livraison Rapide", description: "Sous 48h à Cotonou" },
    { icon: Users, title: "Expertise", description: "Conseils personnalisés" },
    { icon: Award, title: "Qualité", description: "Produits testés et certifiés" }
  ]

  return (
    <>
      <Head>
        <title>G-L NAO Services - Votre expert informatique au Bénin</title>
        <meta name="description" content="Boutique spécialisée en PC, laptops et accessoires informatiques. Meilleures marques, prix compétitifs, livraison rapide au Bénin." />
      </Head>

      {/* ===== HERO SECTION ===== */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 section-py-lg">
        <div className="container">
          <div className="grid-responsive lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Votre expert informatique au Bénin
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Des solutions <span className="text-gradient">informatiques</span> sur mesure
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Découvrez notre sélection premium de PC, laptops et accessoires. 
                Qualité garantie, service après-vente et accompagnement personnalisé.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/category/pc-gamer" className="btn-primary text-lg">
                  Explorer le catalogue
                </Link>
                <a 
                  href="https://wa.me/0156035888"
                  className="btn-secondary text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nous contacter
                </a>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Garantie 2 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-500" />
                  <span>Livraison express</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span>Installation gratuite</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="card p-8 shadow-soft">
                <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center mb-6">
                  <span className="text-gray-500">Image showcase</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">PC Gamer Élite</h3>
                  <p className="text-gray-600 mb-4">Configuration haut de gamme pour gaming et création</p>
                  <div className="text-3xl font-bold text-blue-600 mb-4">950.000 FCFA</div>
                  <Link href="/products/1" className="btn-primary">
                    Découvrir
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SECTION ===== */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Catégories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre large gamme de produits informatiques adaptés à tous vos besoins
            </p>
          </div>
          
          <div className="grid-responsive lg:grid-cols-4">
            {categories.map((category, index) => (
              <Link 
                key={category.slug}
                href={`/category/${category.slug}`}
                className="card p-8 text-center group hover:shadow-soft transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <category.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-500 mb-4">{category.count}</p>
                <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  Explorer →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section-py bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produits Populaires
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos best-sellers du moment
            </p>
          </div>

          <div className="grid-responsive">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image produit</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price.toLocaleString()} FCFA
                    </span>
                    <Link 
                      href={`/products/${product.id}`}
                      className="btn-primary text-sm"
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="section-py bg-white">
        <div className="container">
          <div className="grid-responsive lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section-py bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à équiper votre espace numérique ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour un conseil personnalisé et découvrez la différence G-L NAO Tech
            </p>
            <a 
              href="https://wa.me/0156035888?text=Bonjour! Je suis intéressé par vos produits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
            >
              <ShoppingCart className="w-6 h-6" />
              Commander sur WhatsApp
            </a>
            <p className="mt-4 text-sm opacity-80">
              Réponse garantie sous 5 minutes • 01 56 03 58 88
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
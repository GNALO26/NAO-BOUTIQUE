import Head from 'next/head'
import { useState, useEffect } from 'react'
import { ShoppingCart, Cpu, Smartphone, Headphones, Zap, Shield, Star } from 'lucide-react'
import Link from 'next/link'
import { products, categories } from '../data/products'

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Utiliser les vrais produits depuis data/products.js
    setFeaturedProducts(products.slice(0, 3))
    setIsLoading(false)
  }, [])

  const categoryIcons = {
    'pc-gamer': Cpu,
    'laptops': Smartphone, 
    'accessoires': Headphones,
    'pc-bureau': Zap
  }

  return (
    <>
      <Head>
        <title>G-L NAO Services - Votre boutique PC au Bénin</title>
        <meta name="description" content="Boutique spécialisée en PC et accessoires informatiques au Bénin. Meilleures marques, prix compétitifs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Votre <span className="text-primary-600">Expert</span> en Informatique au <span className="text-accent-500">Bénin</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Découvrez notre sélection premium de PC, laptops et accessoires informatiques. 
                Qualité garantie, service après-vente et livraison rapide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/category/pc-gamer" className="btn-primary text-lg">
                  Voir le Catalogue
                </Link>
                <a 
                  href="https://wa.me/0156035888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg"
                >
                  Nous Contacter
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Garantie 1 an</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Livraison Express</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="card p-8 transform rotate-3">
                {products[0]?.images?.[0] ? (
                  <img 
                    src={products[0].images[0]} 
                    alt={products[0].name} 
                    className="rounded-xl w-full h-64 object-cover"
                  />
                ) : (
                  <div className="rounded-xl w-full h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">Image du produit</span>
                  </div>
                )}
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {products[0]?.name || "PC Gamer Élite"}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {products[0]?.description?.substring(0, 100) + "..." || "Configuration haut de gamme pour gaming et création"}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary-600">
                      {products[0]?.price ? `${products[0].price.toLocaleString()} FCFA` : "950.000 FCFA"}
                    </span>
                    <Link 
                      href={products[0] ? `/products/${products[0].id}` : "#"}
                      className="btn-primary text-sm"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Catégories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explorez notre large gamme de produits informatiques pour tous vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[category.slug] || Cpu
              return (
                <Link 
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="card p-8 text-center group cursor-pointer animate-fade-in hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 mb-2">{category.description}</p>
                  <p className="text-sm text-gray-400">{category.productCount} produits</p>
                  <div className="mt-4 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                    Explorer →
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produits Populaires
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez nos best-sellers du moment
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="card p-6 animate-pulse">
                  <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="card p-6 animate-fade-in hover:shadow-xl transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      {product.images?.[0] ? (
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">Image non disponible</span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 2).map((feature, i) => (
                        <span 
                          key={i}
                          className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded"
                        >
                          {feature.split(':')[0]} {/* Affiche seulement la première partie avant : */}
                        </span>
                      ))}
                      {product.features.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{product.features.length - 2} plus
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary-600 block">
                          {product.price.toLocaleString()} FCFA
                        </span>
                        {product.oldPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            {product.oldPrice.toLocaleString()} FCFA
                          </span>
                        )}
                      </div>
                      <Link 
                        href={`/products/${product.id}`}
                        className="btn-primary text-sm"
                      >
                        Voir Détails
                      </Link>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à Commander ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous directement sur WhatsApp pour un conseil personnalisé
          </p>
          <a 
            href="https://wa.me/0156035888?text=Bonjour! Je suis intéressé par vos produits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            <ShoppingCart className="w-6 h-6" />
            Commander sur WhatsApp
          </a>
          <p className="text-white/80 mt-4 text-sm">
            Réponse garantie sous 5 minutes - 01 56 03 58 88
          </p>
        </div>
      </section>
    </>
  )
}
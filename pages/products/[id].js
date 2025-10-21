import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { ArrowLeft, Share2, Truck, Shield, Check, Star } from 'lucide-react'
import ProductGallery from '../../components/products/ProductGallery'
import ProductDetails from '../../components/products/ProductDetails'
import RelatedProducts from '../../components/products/RelatedProducts'
import { products } from '../../data/products'

export default function ProductPage() {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === parseInt(id))
      setProduct(foundProduct)
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-300 h-96 rounded-2xl"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-300 rounded w-3/4"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-12 bg-gray-300 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <button 
            onClick={() => router.push('/')}
            className="btn-primary"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour
          </button>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600 capitalize">{product.category?.replace('-', ' ')}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600 font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Galerie */}
          <div>
            <ProductGallery images={product.images} />
          </div>

          {/* Détails */}
          <div>
            <ProductDetails product={product} />
          </div>
        </div>

        {/* Description détaillée */}
        {product.description && (
          <div className="card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description du produit</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {product.description}
            </p>
          </div>
        )}

        {/* Spécifications détaillées */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécifications techniques</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-900 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Caractéristiques */}
        {product.features && product.features.length > 0 && (
          <div className="card p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Caractéristiques principales</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Livraison et garantie */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
            <Truck className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Livraison Rapide</h3>
            <p className="text-gray-600">Sous moins de 6h à Cotonou, moins de 24h dans tout le Bénin</p>
          </div>
          <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
            <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Garantie 12 mois</h3>
            <p className="text-gray-600">Support technique et assistance complète inclus</p>
          </div>
          <div className="card p-6 text-center hover:shadow-xl transition-all duration-300">
            <Check className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation Gratuite</h3>
            <p className="text-gray-600">Configuration et installation par nos experts</p>
          </div>
        </div>

        {/* Avis clients */}
        <div className="card p-8 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Avis clients</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {product.rating}
              </span>
              <span className="text-gray-500">
                ({product.reviewCount} avis)
              </span>
            </div>
          </div>
          
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              Soyez le premier à laisser un avis sur ce produit !
            </p>
            <a 
              href={`https://wa.me/0156035888?text=Je souhaite laisser un avis sur le produit: ${product.name}`}
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Laisser un avis WhatsApp
            </a>
          </div>
        </div>

        {/* Produits similaires */}
        <RelatedProducts currentProduct={product} />
      </div>
    </div>
  )
}
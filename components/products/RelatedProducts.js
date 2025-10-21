import { useState, useEffect } from 'react'
import { Star, Zap } from 'lucide-react'
import Link from 'next/link'
import { products } from '../../data/products'

export default function RelatedProducts({ currentProduct }) {
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    // Filtrer les produits de la même catégorie (exclure le produit actuel)
    const related = products
      .filter(product => 
        product.id !== currentProduct.id && 
        product.category === currentProduct.category
      )
      .slice(0, 3) // Prendre maximum 3 produits
    
    // Si pas assez dans la même catégorie, prendre d'autres produits
    if (related.length < 3) {
      const additional = products
        .filter(product => 
          product.id !== currentProduct.id && 
          !related.includes(product)
        )
        .slice(0, 3 - related.length)
      
      setRelatedProducts([...related, ...additional])
    } else {
      setRelatedProducts(related)
    }
  }, [currentProduct])

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <Zap className="w-6 h-6 text-accent-500" />
        <h2 className="text-2xl font-bold text-gray-900">Produits similaires</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="card p-6 group cursor-pointer hover:shadow-xl transition-all duration-300">
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
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {product.features.slice(0, 2).map((feature, index) => (
                  <span 
                    key={index}
                    className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded"
                  >
                    {feature.split(':')[0]}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary-600">
                  {product.price.toLocaleString()} FCFA
                </span>
                <span className="btn-primary text-sm">
                  Voir détails
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
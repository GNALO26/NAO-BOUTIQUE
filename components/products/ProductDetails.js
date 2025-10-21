import { useState } from 'react'
import { Star, Shield, Truck, Check } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import ReactionButtons from './ReactionButtons'

export default function ProductDetails({ product }) {
  const [selectedFeature, setSelectedFeature] = useState(0)

  // Données exemple
  const productData = product || {
    id: 1,
    name: "PC Gamer Elite RTX 4080",
    price: 1250000,
    oldPrice: 1450000,
    features: [
      "Processeur Intel Core i9-13900K",
      "Carte graphique RTX 4080 16GB",
      "32GB RAM DDR5 5600MHz",
      "2TB SSD NVMe Gen4",
      "Alimentation 850W 80+ Gold",
      "Watercooling 240mm RGB"
    ],
    description: "PC Gamer ultime pour les joueurs et créateurs exigeants. Configuration haut de gamme garantissant des performances exceptionnelles dans tous les jeux et applications de création.",
    rating: 4.8,
    reviewCount: 47,
    stock: 5,
    whatsapp: "0156035888"
  }

  const benefits = [
    { icon: Shield, text: "Garantie 12 mois", description: "Support technique inclus" },
    { icon: Truck, text: "Livraison gratuite", description: "Sous moins de 6h à Cotonou" },
    { icon: Check, text: "Installation gratuite", description: "Configuration complète" }
  ]

  return (
    <div className="space-y-8">
      {/* En-tête du produit */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {productData.name}
        </h1>
        
        {/* Note et avis */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.floor(productData.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900">
              {productData.rating}
            </span>
          </div>
          <span className="text-gray-500">
            ({productData.reviewCount} avis)
          </span>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            productData.stock > 0 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {productData.stock > 0 ? `${productData.stock} en stock` : 'Rupture'}
          </div>
        </div>

        {/* Prix */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl font-bold text-primary-600">
            {productData.price.toLocaleString()} FCFA
          </span>
          {productData.oldPrice && (
            <span className="text-2xl text-gray-500 line-through">
              {productData.oldPrice.toLocaleString()} FCFA
            </span>
          )}
          {productData.oldPrice && (
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              -{Math.round((1 - productData.price / productData.oldPrice) * 100)}%
            </span>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
        <p className="text-gray-600 leading-relaxed">
          {productData.description}
        </p>
      </div>

      {/* Caractéristiques */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Caractéristiques techniques
        </h3>
        <div className="space-y-3">
          {productData.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Avantages */}
      <div className="grid sm:grid-cols-3 gap-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <benefit.icon className="w-8 h-8 text-primary-600" />
            <div>
              <div className="font-semibold text-gray-900">{benefit.text}</div>
              <div className="text-sm text-gray-600">{benefit.description}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Boutons d'action */}
      <div className="space-y-4">
        <WhatsAppButton 
          phone={productData.whatsapp}
          productName={productData.name}
          className="w-full justify-center text-lg py-4"
        />
        
        <ReactionButtons 
          productId={productData.id}
          initialReactions={{ likes: 15, hearts: 8, interested: 23 }}
        />
      </div>
    </div>
  )
}
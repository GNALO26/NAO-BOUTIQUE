import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Filter, Grid, List, ChevronDown } from 'lucide-react'

export default function CategoryPage() {
  const router = useRouter()
  const { slug } = router.query
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('name')
  const [filters, setFilters] = useState({
    priceRange: [0, 2000000],
    brands: [],
    inStock: false
  })

  useEffect(() => {
    if (slug) {
      // Simulation produits par catégorie
      setTimeout(() => {
        setProducts(Array.from({ length: 12 }, (_, i) => ({
          id: i + 1,
          name: `PC Gamer ${slug} Modèle ${i + 1}`,
          price: 500000 + (i * 100000),
          image: "/api/placeholder/400/300",
          category: slug,
          rating: 4 + Math.random(),
          features: [`CPU i${5 + i}`, `${8 + i * 4}GB RAM`, `${256 + i * 128}GB SSD`],
          inStock: i % 3 !== 0
        })))
        setLoading(false)
      }, 1000)
    }
  }, [slug])

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc': return a.price - b.price
      case 'price-desc': return b.price - a.price
      case 'rating': return b.rating - a.rating
      default: return a.name.localeCompare(b.name)
    }
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-8"></div>
            <div className="grid md:grid-cols-4 gap-6">
              {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className="card p-6">
                  <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
                  <div className="bg-gray-300 h-4 rounded mb-2"></div>
                  <div className="bg-gray-300 h-4 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize mb-2">
              {slug?.replace('-', ' ')}
            </h1>
            <p className="text-gray-600">
              {products.length} produits trouvés
            </p>
          </div>
          
          {/* Contrôles */}
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 px-3 py-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Filtrer</span>
            </div>
            
            <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-300 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-500'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-500'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="name">Trier par nom</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="rating">Meilleures notes</option>
            </select>
          </div>
        </div>

        {/* Produits */}
        <div className={`
          gap-6 mb-8
          ${viewMode === 'grid' 
            ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'space-y-4'
          }
        `}>
          {sortedProducts.map((product) => (
            <div 
              key={product.id}
              className={`card hover:shadow-xl transition-all duration-300 ${
                viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
              }`}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className={`
                  rounded-lg bg-gray-200
                  ${viewMode === 'list' 
                    ? 'w-48 h-48 object-cover' 
                    : 'w-full h-48 object-cover mb-4'
                  }
                `}
              />
              
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600 block">
                      {product.price.toLocaleString()} FCFA
                    </span>
                    <span className={`text-sm ${
                      product.inStock ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.inStock ? 'En stock' : 'Rupture'}
                    </span>
                  </div>
                  
                  <button className="btn-primary text-sm">
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            Précédent
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              className={`px-3 py-2 border rounded-lg ${
                page === 1
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}
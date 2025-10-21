import { useState } from 'react'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export default function ProductGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  // Si pas d'images, utiliser une image par défaut
  const displayImages = images.length > 0 ? images : ['/api/placeholder/800/600']

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % displayImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + displayImages.length) % displayImages.length)
  }

  return (
    <div className="space-y-4">
      {/* Image Principale */}
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg group">
        <img
          src={displayImages[selectedImage]}
          alt={`Vue du produit ${selectedImage + 1}`}
          className="w-full h-96 object-cover cursor-zoom-in"
          onClick={() => setIsZoomed(true)}
        />
        
        {/* Contrôles de navigation */}
        {displayImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bouton zoom */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        {/* Indicateur d'image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {selectedImage + 1} / {displayImages.length}
        </div>
      </div>

      {/* Miniatures */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImage === index 
                  ? 'border-primary-600 shadow-md' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <img
                src={image}
                alt={Miniature `${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal Zoom */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={displayImages[selectedImage]}
              alt="Produit zoomé"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
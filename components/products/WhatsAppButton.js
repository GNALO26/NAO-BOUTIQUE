import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ phone, productName, className = '' }) {
  const message = `Bonjour! Je suis intéressé par le produit: ${productName}. Pouvez-vous me donner plus d'informations ?`
  const whatsappUrl = `https://wa.me/${phone.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      Je suis intéressé - WhatsApp
    </a>
  )
}
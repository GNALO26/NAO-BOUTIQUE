import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulation envoi formulaire
    const whatsappUrl = `https://wa.me/0156035888?text=${encodeURIComponent(
      `Nouveau message de ${formData.name}\n\nSujet: ${formData.subject}\nMessage: ${formData.message}\n\nContact: ${formData.email} | ${formData.phone}`
    )}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '01 56 03 58 88',
      description: 'Lun - Sam: 8h - 20h',
      link: 'tel:0156035888'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'yuriadmurators@gmail.com',
      description: 'Réponse sous 24h',
      link: 'yuriadmurators@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Cotonou, Bénin',
      description: 'Livraison dans tout le pays',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Sam: 8h - 20h',
      description: 'Dimanche: Fermé',
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner dans tous vos besoins informatiques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Informations de contact
            </h2>
            
            <div className="grid gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start gap-4 p-6 card hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <item.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-900 font-medium mb-1">
                      {item.content}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Carte */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Notre zone d'intervention
              </h3>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>Cotonou et tout le Bénin</p>
                  <p className="text-sm">Livraison et installation sur place</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="01 23 45 67 89"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="demande-info">Demande d'information</option>
                  <option value="devis">Demande de devis</option>
                  <option value="support">Support technique</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>

              <p className="text-sm text-gray-600 text-center">
                En cliquant sur "Envoyer", vous serez redirigé vers WhatsApp pour finaliser votre demande.
              </p>
            </form>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Questions Fréquentes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Quels sont les délais de livraison ?",
                answer: "Livraison sous moins de 6h à Cotonou,  et moins de 16h dans les autres villes du Bénin."
              },
              {
                question: "Proposez-vous l'installation ?",
                answer: "Oui, l'installation et la configuration sont incluses gratuitement avec tout achat."
              },
              {
                question: "Quelle est la durée de garantie ?",
                answer: "Tous nos produits bénéficient d'une garantie de 1 ans avec support technique."
              },
              {
                question: "Acceptez-vous les paiements échelonnés ?",
                answer: "Oui, nous proposons des facilités de paiement. Contactez-nous pour plus d'informations."
              }
            ].map((faq, index) => (
              <div key={index} className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
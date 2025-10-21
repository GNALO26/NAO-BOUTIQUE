import { useState } from 'react'
import { ThumbsUp, Heart, Eye } from 'lucide-react'

export default function ReactionButtons({ productId, initialReactions }) {
  const [reactions, setReactions] = useState(initialReactions)
  const [userReactions, setUserReactions] = useState({
    like: false,
    heart: false,
    interested: false
  })

  const handleReaction = async (type) => {
    // Empêcher les réactions multiples
    if (userReactions[type]) return

    try {
      // Simulation d'appel API
      const newReactions = {
        ...reactions,
        [type]: reactions[type] + 1
      }

      setReactions(newReactions)
      setUserReactions(prev => ({ ...prev, [type]: true }))

      // En production, envoyer à l'API
      // await fetch(/api/reactions/${productId}, {
      //   method: 'POST',
      //   body: JSON.stringify({ type })
      // })
    } catch (error) {
      console.error('Erreur réaction:', error)
    }
  }

  const reactionConfig = [
    {
      type: 'like',
      icon: ThumbsUp,
      label: 'J\'aime',
      count: reactions.likes,
      active: userReactions.like,
      activeColor: 'text-blue-600'
    },
    {
      type: 'heart',
      icon: Heart,
      label: 'Coup de coeur',
      count: reactions.hearts,
      active: userReactions.heart,
      activeColor: 'text-red-600'
    },
    {
      type: 'interested',
      icon: Eye,
      label: 'Intéressé',
      count: reactions.interested,
      active: userReactions.interested,
      activeColor: 'text-green-600'
    }
  ]

  return (
    <div className="flex gap-4">
      {reactionConfig.map((reaction) => (
        <button
          key={reaction.type}
          onClick={() => handleReaction(reaction.type)}
          disabled={reaction.active}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
            reaction.active
              ? `${reaction.activeColor} border-current bg-gray-50`
              : 'text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }`}
        >
          <reaction.icon className="w-4 h-4" />
          <span className="font-medium">{reaction.count}</span>
          <span className="hidden sm:inline text-sm">{reaction.label}</span>
        </button>
      ))}
    </div>
  )
}
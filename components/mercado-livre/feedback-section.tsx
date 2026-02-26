"use client"

import { useState } from "react"
import { Star, ThumbsUp, SlidersHorizontal } from "lucide-react"
import Image from "next/image"

const reviewImages = [
  {
    src: "/images/prova-20social-201.jpeg",
    rating: 5,
  },
  {
    src: "/images/prova-20social-202.jpeg",
    rating: 5,
  },
  {
    src: "/images/prova-20social-203.jpeg",
    rating: 5,
  },
  {
    src: "/images/prova-20social-204.jpeg",
    rating: 5,
  },
]

const reviews = [
  {
    id: 1,
    name: "Carlos M.",
    rating: 5,
    date: "22 dez. 2025",
    comment:
      "Excelente ventilador! O preço estava muito abaixo do mercado e a qualidade é surpreendente. Chegou super rápido e bem embalado. Ventila muito bem, dá pra sentir o vento forte mesmo de longe. Super recomendo!",
    image: "/images/prova-20social-201.jpeg",
    helpful: 47,
  },
  {
    id: 2,
    name: "Ana Paula S.",
    rating: 5,
    date: "20 dez. 2025",
    comment:
      "Salvou meu verão! Estava procurando um ventilador potente e com preço justo, e esse superou todas as expectativas. O vento é muito forte e refresca o ambiente todo. Silencioso também, uso no quarto à noite sem problema. Melhor compra que fiz!",
    image: "/images/prova-20social-202.jpeg",
    helpful: 38,
  },
  {
    id: 3,
    name: "Roberto F.",
    rating: 5,
    date: "18 dez. 2025",
    comment:
      "Produto de qualidade por um preço excelente! A montagem foi super fácil, em menos de 10 minutos estava funcionando. A coluna ajustável é muito prática, consigo regular a altura certinho. Já comprei o segundo pra sala!",
    image: "/images/prova-20social-203.jpeg",
    helpful: 29,
  },
  {
    id: 4,
    name: "Mariana L.",
    rating: 5,
    date: "15 dez. 2025",
    comment:
      "Não esperava tanta qualidade por esse preço! Ventilador potente, super silencioso e com design bonito. Combinou perfeitamente com minha sala. Meus filhos agora dormem super bem com o ventinho gostoso. Vale cada centavo, recomendo muito!",
    image: "/images/prova-20social-204.jpeg",
    helpful: 24,
  },
]

// Rating distribution data
const ratingDistribution = [
  { stars: 5, percentage: 89 },
  { stars: 4, percentage: 8 },
  { stars: 3, percentage: 2 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
]

export function FeedbackSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="px-4 py-6 bg-white" aria-labelledby="feedback-heading">
      {/* Header */}
      <h2 id="feedback-heading" className="text-xl font-semibold text-gray-900 mb-4">
        Opiniões do produto
      </h2>

      {/* Rating Overview */}
      <div className="flex gap-6 mb-6">
        {/* Big rating number */}
        <div className="flex flex-col">
          <span className="text-5xl font-light text-[#3483FA]">4.8</span>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#3483FA] text-[#3483FA]" />
            ))}
          </div>
          <span className="text-xs text-gray-500 mt-1">3.959 avaliações</span>
        </div>

        {/* Rating bars */}
        <div className="flex-1 flex flex-col justify-center gap-1">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-[#3483FA] rounded-full" style={{ width: `${item.percentage}%` }} />
              </div>
              <span className="text-xs text-gray-500 w-6">{item.stars}</span>
              <Star className="w-3 h-3 fill-[#3483FA] text-[#3483FA]" />
            </div>
          ))}
        </div>
      </div>

      {/* Photos Section */}
      <div className="mb-6">
        <h3 className="text-base font-medium text-gray-900 mb-3">Opiniões com fotos</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {reviewImages.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img.src)}
              className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-gray-200"
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={`Foto de avaliação ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-1 left-1 bg-white/90 rounded px-1 py-0.5 flex items-center gap-0.5">
                <span className="text-xs font-medium">{img.rating}</span>
                <Star className="w-3 h-3 fill-[#3483FA] text-[#3483FA]" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Reviews Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-base font-medium text-gray-900">Opiniões em destaque</h3>
          <span className="text-xs text-gray-500">1.536 comentários</span>
        </div>
        <button className="flex items-center gap-2 px-3 py-1.5 border border-[#3483FA] rounded-full text-[#3483FA] text-sm font-medium">
          <SlidersHorizontal className="w-4 h-4" />
          Filtrar
        </button>
      </div>

      {/* AI Summary */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          O ventilador é elogiado pela excelente ventilação e potência, sendo descrito como forte e eficaz para
          enfrentar o calor. Além disso, é considerado silencioso, especialmente em velocidades mais baixas, e fácil de
          montar. O design é apreciado por ser bonito e funcional, com uma boa regulagem de altura.
        </p>
        <div className="flex items-center gap-2 mt-3 text-[#3483FA]">
          <Star className="w-4 h-4 fill-[#3483FA]" />
          <span className="text-xs">Resumo de opiniões gerado por IA</span>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <article key={review.id} className="border-t border-gray-100 pt-4">
            {/* Stars and Date */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#3483FA] text-[#3483FA]" />
                ))}
              </div>
              <span className="text-xs text-gray-400">{review.date}</span>
            </div>

            {/* Comment */}
            <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.comment}</p>

            {/* Review Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden mb-3">
              <Image
                src={review.image || "/placeholder.svg"}
                alt={`Foto enviada por ${review.name}`}
                fill
                className="object-cover"
              />
            </div>

            {/* Helpful */}
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-gray-500 hover:text-[#3483FA]">
                <ThumbsUp className="w-4 h-4" />
                <span className="text-xs">{review.helpful} pessoas acharam útil</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* View All Button */}
      <button className="mt-6 w-full py-3 text-[#3483FA] text-sm font-medium border border-[#3483FA] rounded-lg hover:bg-[#3483FA]/5">
        Ver todas as opiniões
      </button>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-lg h-96">
            <Image src={selectedImage || "/placeholder.svg"} alt="Foto ampliada" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}

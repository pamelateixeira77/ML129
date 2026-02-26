"use client"

import { useState, type TouchEvent } from "react"
import { Heart, Share2 } from "lucide-react"
import Image from "next/image"

const productImages = [
  {
    id: 1,
    src: "/images/1.jpeg",
    alt: "Ventilador de Coluna Mondial NVT-40C-8P-B preto completo",
  },
  {
    id: 2,
    src: "/images/2.jpeg",
    alt: "Linha NVT Vento Turbo - Hélice de 8 pás com 40 cm",
  },
  {
    id: 3,
    src: "/images/3.jpeg",
    alt: "Coluna ajustável - Regulagem de 1,19 a 1,50 metros",
  },
  {
    id: 4,
    src: "/images/4.jpeg",
    alt: "Inclinação vertical regulável e facilidade na limpeza",
  },
  {
    id: 5,
    src: "/images/5.jpeg",
    alt: "Oscilação horizontal e mais silêncio e conforto",
  },
  {
    id: 6,
    src: "/images/6.jpeg",
    alt: "Alça de transporte e controle de velocidade",
  },
  {
    id: 7,
    src: "/images/7.jpeg",
    alt: "Dimensões do produto: 48,5 cm de largura, 150 cm de altura, 4,9 kg",
  },
]

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < productImages.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section aria-label="Galeria de imagens do produto">
      <div className="px-4 py-3">
        <a href="#" className="text-sm text-[#3483FA]">
          Conferir mais produtos da marca Mondial
        </a>
      </div>

      <div className="px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>Novo</span>
          <span className="mx-1">|</span>
          <span>+10mil vendidos</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-700">4.8</span>
          <div className="flex" aria-label="Avaliação: 4.8 de 5 estrelas">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-3.5 h-3.5 text-[#3483FA]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">(3876)</span>
        </div>
      </div>

      <div className="px-4 py-2 flex items-center gap-2">
        <span className="bg-[#FF7733] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-sm uppercase">
          Mais vendido
        </span>
        <span className="text-sm text-[#3483FA]">7º em Ventiladores Mondial</span>
      </div>

      <div className="px-4 pb-2">
        <h1 className="text-base font-normal text-gray-900 leading-snug">
          Ventilador de Coluna 40cm Turbo Mondial 140W 127V - NVT-40C-8P-B
        </h1>
      </div>

      {/* Image carousel */}
      <div className="relative">
        <div
          className="relative aspect-square bg-white overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute top-2 left-3 text-sm text-gray-500 z-10 bg-white/80 px-2 py-1 rounded">
            {currentIndex + 1} / {productImages.length}
          </div>

          <Image
            src={productImages[currentIndex].src || "/placeholder.svg"}
            alt={productImages[currentIndex].alt}
            fill
            className="object-contain p-2"
            priority
          />

          {/* Favorite button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            className="absolute top-2 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
          </button>

          {/* Share button */}
          <button
            aria-label="Compartilhar produto"
            className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center z-10"
          >
            <Share2 className="w-5 h-5 text-[#3483FA]" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 py-3" role="tablist" aria-label="Navegação de imagens">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            role="tab"
            aria-selected={currentIndex === index}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-[#3483FA]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { ShoppingCart, Heart, Share2 } from "lucide-react"

const CHECKOUT_URL = "https://pedido.pagar-online.shop/pay/6427f093-6aaf-4215-a64b-3f7ad6a61b32"

export function PurchaseButtons() {
  const handleBuyNow = () => {
    // Feedback for screen readers
    const announcement = document.createElement("div")
    announcement.setAttribute("role", "alert")
    announcement.setAttribute("aria-live", "assertive")
    announcement.className = "sr-only"
    announcement.textContent = "Redirecionando para a página de pagamento"
    document.body.appendChild(announcement)
    setTimeout(() => announcement.remove(), 1000)

    window.location.href = CHECKOUT_URL
  }

  const handleAddToCart = () => {
    window.location.href = CHECKOUT_URL
  }

  return (
    <section className="px-4 py-3" aria-label="Opções de compra">
      <div className="space-y-3">
        <button
          onClick={handleBuyNow}
          aria-label="Comprar agora - Ventilador de Coluna Mondial por R$ 282,56"
          className="w-full py-4 bg-[#3483FA] hover:bg-[#2968c8] text-white font-semibold rounded-lg transition-colors text-base"
        >
          Comprar agora
        </button>

        <button
          onClick={handleAddToCart}
          aria-label="Adicionar ao carrinho - Ventilador de Coluna Mondial"
          className="w-full py-4 bg-[#E6F0FF] hover:bg-[#d4e4fc] text-[#3483FA] font-semibold rounded-lg transition-colors text-base flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-5 h-5" aria-hidden="true" />
          Adicionar ao carrinho
        </button>
      </div>

      {/* Gift card option */}
      <div className="mt-4 p-3 border border-gray-200 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="gift-card"
            className="w-5 h-5 rounded border-gray-300 text-[#3483FA] focus:ring-[#3483FA]"
            aria-describedby="gift-card-desc"
          />
          <label htmlFor="gift-card" className="text-sm text-gray-800">
            Incluir vale-troca para presente.{" "}
            <a href="#" className="text-[#3483FA] hover:underline">
              Ver mais
            </a>
          </label>
        </div>
        <div className="text-2xl" aria-hidden="true">
          🎁
        </div>
      </div>

      {/* Action links */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          className="flex items-center gap-2 text-sm text-[#3483FA] hover:underline"
          aria-label="Adicionar aos favoritos"
        >
          <Heart className="w-5 h-5" aria-hidden="true" />
          Adicionar aos favoritos
        </button>
        <button
          className="flex items-center gap-2 text-sm text-[#3483FA] hover:underline"
          aria-label="Compartilhar este produto"
        >
          <Share2 className="w-5 h-5" aria-hidden="true" />
          Compartilhar
        </button>
      </div>
    </section>
  )
}

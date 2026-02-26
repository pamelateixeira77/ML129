"use client"

import { Search, ShoppingCart, Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFE600]" role="banner">
      <div className="flex items-center gap-2 px-2 py-2">
        {/* Logo Mercado Livre - using actual logo image */}
        <a href="/" aria-label="Mercado Livre - Página inicial" className="flex-shrink-0">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed-sLMOKmrg8VLnqbZtscZzKKiRAGAhel.png" alt="Mercado Livre" width={40} height={40} className="w-10 h-10 rounded-lg" />
        </a>

        {/* Search bar - now inline in the header */}
        <div className="flex-1 relative">
          <input
            type="search"
            placeholder="Estou buscando..."
            aria-label="Buscar produtos"
            className="w-full py-2 px-4 rounded bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>

        {/* Menu and Cart icons */}
        <div className="flex items-center gap-1">
          <button aria-label="Menu" className="p-2">
            <Menu className="w-6 h-6 text-[#333]" />
          </button>
          <button aria-label="Carrinho de compras" className="p-2">
            <ShoppingCart className="w-6 h-6 text-[#333]" />
          </button>
        </div>
      </div>

      <div className="bg-[#FFE600] px-3 py-2 flex items-center gap-1 border-t border-[#e6cf00]">
        <svg className="w-4 h-4 text-[#333]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm text-[#333]">Informe seu CEP</span>
      </div>
    </header>
  )
}

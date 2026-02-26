import { Truck, MapPin } from "lucide-react"

export function ShippingSection() {
  return (
    <section className="px-4 py-3 border-t border-gray-100" aria-labelledby="shipping-heading">
      <h2 id="shipping-heading" className="sr-only">
        Informações de entrega
      </h2>

      {/* Free shipping badge */}
      <div className="inline-block bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded mb-3">
        FRETE GRÁTIS ACIMA DE R$ 19
      </div>

      {/* Delivery info */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Truck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="text-sm">
              <span className="text-green-600 font-medium">Receba grátis</span>
              <span className="text-gray-800"> segunda-feira</span>
            </p>
            <a href="#" className="text-sm text-[#3483FA] hover:underline">
              Mais detalhes e formas de entrega
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="text-sm text-gray-800">
              <span className="text-green-600 font-medium">Retire grátis</span> a partir de segunda-feira 13 de março
              em uma agência Mercado Livre
            </p>
            <a href="#" className="text-sm text-[#3483FA] hover:underline">
              Ver no mapa
            </a>
          </div>
        </div>
      </div>

      {/* Stock info */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="text-sm font-medium text-gray-800">Estoque disponível</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-sm text-gray-600">Armazenado e enviado pelo</span>
          <span className="text-sm font-bold text-green-600 flex items-center gap-0.5">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0L7.5 4.5H12L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5H4.5L6 0Z" />
            </svg>
            FULL
          </span>
        </div>
      </div>

      {/* Quantity selector */}
      <div className="mt-4 p-3 border border-gray-200 rounded-lg flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-800">Quantidade: </span>
          <span className="text-sm font-medium text-gray-900">1</span>
          <span className="text-sm text-gray-500"> (+50 disponíveis)</span>
        </div>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  )
}

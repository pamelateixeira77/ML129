import { RefreshCw, Shield, Award } from "lucide-react"
import Image from "next/image"

export function SellerInfo() {
  return (
    <section className="px-4 py-4 border-t border-gray-100" aria-labelledby="seller-heading">
      <h2 id="seller-heading" className="sr-only">
        Informações do vendedor
      </h2>

      {/* Seller badge */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/image.png"
            alt="Logo Mercado Livre"
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-600">Loja oficial</span>
            <a href="#" className="text-sm text-[#3483FA] hover:underline font-medium">
              Mercado Livre
            </a>
            <svg
              className="w-4 h-4 text-[#3483FA]"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-label="Vendedor verificado"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-xs text-gray-500">+1 M vendas</p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <RefreshCw className="w-5 h-5 text-[#3483FA] mt-0.5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm text-gray-800">
            <a href="#" className="text-[#3483FA] hover:underline">
              Devolução grátis.
            </a>{" "}
            Você tem 30 dias a partir da data de recebimento.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#3483FA] mt-0.5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm text-gray-800">
            <a href="#" className="text-[#3483FA] hover:underline">
              Compra Garantida.
            </a>{" "}
            Receba o produto que está esperando ou devolvemos o dinheiro.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <p className="text-sm text-gray-600">12 meses de garantia de fábrica.</p>
        </div>
      </div>
    </section>
  )
}

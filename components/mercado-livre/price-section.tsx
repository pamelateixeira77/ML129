"use client"

import { AlertCircle } from "lucide-react"

interface PriceSectionProps {
  selectedVoltage: string | null
  onVoltageSelect: (voltage: string) => void
}

export function PriceSection({ selectedVoltage, onVoltageSelect }: PriceSectionProps) {
  return (
    <section className="px-4 py-3 border-t border-gray-100" aria-labelledby="price-heading">
      <h2 id="price-heading" className="sr-only">
        Preço e voltagem
      </h2>

      {/* Voltage selection */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-600">Voltagem:</span>
          {!selectedVoltage && (
            <div className="flex items-center gap-1 text-red-500">
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium">Escolha</span>
            </div>
          )}
        </div>

        <div className="flex gap-2" role="radiogroup" aria-label="Selecione a voltagem">
          <button
            role="radio"
            aria-checked={selectedVoltage === "127V"}
            onClick={() => onVoltageSelect("127V")}
            className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
              selectedVoltage === "127V"
                ? "border-[#3483FA] bg-blue-50 text-[#3483FA]"
                : "border-gray-300 text-gray-700 hover:border-gray-400"
            }`}
          >
            127V
          </button>
          <button
            role="radio"
            aria-checked={selectedVoltage === "220V"}
            onClick={() => onVoltageSelect("220V")}
            className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
              selectedVoltage === "220V"
                ? "border-[#3483FA] bg-blue-50 text-[#3483FA]"
                : "border-gray-300 text-gray-700 hover:border-gray-400"
            }`}
          >
            220V
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-500 line-through" aria-label="Preço original: R$ 299,00">
            R$ 299<sup className="text-xs">00</sup>
          </span>
        </div>

        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-3xl font-light text-gray-900" aria-label="Preço atual: R$ 109,90">
            R$ 129<sup className="text-lg align-top">90</sup>
          </span>
          <span className="text-sm font-semibold text-green-600">63% OFF</span>
        </div>

        <div className="mt-1">
          <span className="text-sm text-[#3483FA]">
            6x R$ 18<sup className="text-xs">31</sup> sem juros
          </span>
        </div>

        <a href="#" className="text-sm text-[#3483FA] hover:underline block mt-1">
          Ver os meios de pagamento
        </a>
      </div>
    </section>
  )
}

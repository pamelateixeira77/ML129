import { Check } from "lucide-react"

export function ProductSpecs() {
  const specs = [
    { label: "Frequência", value: "60Hz" },
    { label: "Quantidade de pás", value: "8" },
    { label: "Material das pás", value: "Plástico" },
    { label: "Cor das pás", value: "Prata" },
    { label: "Cor da estrutura", value: "Preto" },
    { label: "Diâmetro", value: "40 cm" },
    { label: "Velocidades", value: "3 velocidades" },
    { label: "Potência", value: "140 W" },
    { label: "Grade removível", value: "Sim" },
    { label: "Ideal para", value: "Refrescar" },
    { label: "Certificação", value: "INMETRO" },
  ]

  const highlights = [
    { label: "Potência", value: "140 W" },
    { label: "Quantidade de velocidades", value: "3" },
    { label: "Inclui controle remoto", value: "Não" },
  ]

  return (
    <section className="px-4 py-4 border-t border-gray-100" aria-labelledby="specs-heading">
      <h2 id="specs-heading" className="text-xl font-semibold text-gray-900 mb-4">
        O que você precisa saber sobre este produto
      </h2>

      <ul className="space-y-2 mb-6">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-gray-500 mt-0.5">•</span>
            <span className="text-gray-700">
              {spec.label}: <span className="text-gray-900">{spec.value}</span>.
            </span>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold text-gray-900 mb-4">Características do produto</h3>

      <ul className="space-y-3">
        {highlights.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Check className="w-4 h-4 text-[#3483FA]" aria-hidden="true" />
            </div>
            <span className="text-sm text-gray-700">
              {item.label}: <span className="font-medium text-gray-900">{item.value}</span>
            </span>
          </li>
        ))}
      </ul>

      <button className="mt-4 w-full py-3 border border-gray-200 rounded-lg text-[#3483FA] text-sm font-medium hover:bg-gray-50 flex items-center justify-between px-4">
        Conferir todas as características
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  )
}

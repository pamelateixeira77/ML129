export function ProductCharacteristics() {
  const characteristics = [
    {
      title: "O que este produto possui",
      items: [
        "Hélice turbo com 8 pás e 40cm de diâmetro",
        "3 velocidades: Máxima, Média e Mínima",
        "Oscilação horizontal automática",
        "Inclinação vertical regulável",
        "Coluna ajustável de 1,19m a 1,50m",
        "Alça de transporte traseira",
        "Grades removíveis para limpeza",
        "Sistema silencioso",
        "Certificação INMETRO",
      ],
    },
    {
      title: "O que este produto NÃO possui",
      items: ["Controle remoto", "Conexão Wi-Fi", "Temporizador", "Iluminação", "Funções inteligentes"],
    },
  ]

  return (
    <section className="px-4 py-4 border-t border-gray-100" aria-labelledby="characteristics-heading">
      <h2 id="characteristics-heading" className="sr-only">
        Características detalhadas
      </h2>

      {characteristics.map((section, sectionIndex) => (
        <div key={sectionIndex} className={sectionIndex > 0 ? "mt-6" : ""}>
          <h3 className="text-base font-semibold text-gray-900 mb-3">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-700">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    sectionIndex === 0 ? "bg-green-500" : "bg-red-400"
                  }`}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

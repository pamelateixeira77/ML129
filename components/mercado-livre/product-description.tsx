"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

export function ProductDescription() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="border-t-8 border-gray-100" aria-labelledby="description-heading">
      {/* Product feature images */}
      <div className="space-y-0">
        <Image
          src="/images/1.jpeg"
          alt="Linha de ventiladores NVT Mondial - Viva o lado bom do calor"
          width={600}
          height={400}
          className="w-full"
        />
        <Image
          src="/images/2.jpeg"
          alt="Vento Turbo com hélice de 8 pás e 40cm, coluna ajustável de 1,19 a 1,50 metros"
          width={600}
          height={400}
          className="w-full"
        />
        <Image
          src="/images/3.jpeg"
          alt="Inclinação vertical regulável e facilidade na limpeza"
          width={600}
          height={400}
          className="w-full"
        />
        <Image
          src="/images/4.jpeg"
          alt="Alça de transporte e controle de velocidade com 3 opções"
          width={600}
          height={400}
          className="w-full"
        />
        <Image
          src="/images/5.jpeg"
          alt="Oscilação horizontal com botão para fixar, mais silêncio e conforto"
          width={600}
          height={400}
          className="w-full"
        />
      </div>

      {/* Text description */}
      <div className="px-4 py-4">
        <h2 id="description-heading" className="text-xl font-semibold text-gray-900 mb-4">
          Descrição
        </h2>

        <div className={`space-y-4 text-sm text-gray-700 leading-relaxed ${!isExpanded ? "line-clamp-6" : ""}`}>
          <p>
            O Ventilador Mondial Turbo 8 Pás possui 40 cm de diâmetro e um design aerodinâmico responsável por uma
            ventilação forte e melhor distribuição de ar, ideal para um ambiente fresco e muito ventilado. O sistema de
            ventilação é silencioso, proporcionando a tranquilidade ideal para sua concentração e uma noite de sono
            perfeita. Conta com inclinação vertical regulável, oscilação horizontal e três opções de velocidade. Saiba
            mais sobre o NVT-40C-8P-B:
          </p>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">VENTO TURBO</h3>
            <p>
              O VT Vento Turbo possui hélice com 8 Pás e 40cm de diâmetro. O design aerodinâmico e de alta performance
              proporciona maior intensidade do vento e melhor distribuição de ar. O resultado é um ambiente mais fresco
              e arejado!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">COLUNA AJUSTÁVEL</h3>
            <p>Possui regulagem de 1,19 a 1,50 metros, permitindo o ajuste ideal da altura do vento.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">MAIS SILÊNCIO E CONFORTO</h3>
            <p>
              O sistema de ventilação da Mondial é silencioso e proporciona o conforto necessário para momentos de
              concentração e uma excelente noite de sono.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">MAIOR DISTRIBUIÇÃO DE AR</h3>
            <p>
              O sistema oscilante horizontal amplia o raio de alcance do vento. Você escolhe distribuir o ar no ambiente
              ou fixar o botão e direcionar o fluxo.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">INCLINAÇÃO VERTICAL REGULÁVEL</h3>
            <p>Para um direcionamento ideal do fluxo do ar.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">CONTROLE DE VELOCIDADE</h3>
            <p>As 3 opções de velocidade permitem adequar o vento à sua necessidade: Máxima, Média e Mínima.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">FACILIDADE NA LIMPEZA</h3>
            <p>
              As grades (frontal e traseira) e a hélice são removíveis e facilitam a limpeza, simplificando a lavagem e
              a remoção da poeira.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-1">ALÇA DE TRANSPORTE</h3>
            <p>
              Além do design compacto, a alça traseira permite que o ventilador seja transportado entre os cômodos da
              casa com facilidade.
            </p>
          </div>

          <p className="font-medium text-gray-800">
            A Mondial é a escolha de milhões de consumidores. Mondial, a escolha inteligente!
          </p>

          <div className="text-xs text-gray-500 pt-2">
            <p className="font-semibold">Aviso legal</p>
            <p>• Certificado pela INMETRO.</p>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 text-[#3483FA] text-sm font-medium hover:underline flex items-center gap-1"
          aria-expanded={isExpanded}
          aria-controls="description-content"
        >
          {isExpanded ? (
            <>
              Ver menos
              <ChevronUp className="w-4 h-4" aria-hidden="true" />
            </>
          ) : (
            <>
              Ver mais
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </section>
  )
}

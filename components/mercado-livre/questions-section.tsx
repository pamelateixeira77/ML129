"use client"

import { MessageCircle } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Olá, gostaria de saber se a grade frontal é fácil de tirar pra limpar?",
    answer:
      "Olá! Sim, as grades frontal e traseira são totalmente removíveis, facilitando muito a limpeza. Basta destravar e remover para lavar. Obrigado pelo contato!",
    date: "Há 3 dias",
  },
  {
    id: 2,
    question: "Esse ventilador faz muito barulho? Preciso de um silencioso para o quarto.",
    answer:
      "Olá! O sistema de ventilação da Mondial é desenvolvido para ser silencioso, ideal para momentos de concentração e para uma boa noite de sono. Pode comprar sem medo!",
    date: "Há 5 dias",
  },
  {
    id: 3,
    question: "Qual a altura máxima que o ventilador alcança?",
    answer: "Olá! A coluna é ajustável de 1,19m até 1,50m de altura. Obrigado!",
    date: "Há 1 semana",
  },
]

export function QuestionsSection() {
  return (
    <section className="px-4 py-4 border-t border-gray-100" aria-labelledby="questions-heading">
      <h2 id="questions-heading" className="text-xl font-semibold text-gray-900 mb-4">
        Perguntas e respostas
      </h2>

      <p className="text-sm text-gray-600 mb-4">O que você quer saber sobre este produto?</p>

      {/* Ask question input */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Escreva sua pergunta..."
          aria-label="Escreva sua pergunta sobre o produto"
          className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3483FA] focus:border-transparent"
        />
        <button aria-label="Enviar pergunta" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3483FA]">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Questions list */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-700">Últimas perguntas</h3>

        {questions.map((q) => (
          <article key={q.id} className="border-b border-gray-100 pb-4">
            <p className="text-sm text-gray-800 mb-2">{q.question}</p>
            <div className="pl-4 border-l-2 border-gray-200">
              <p className="text-sm text-gray-600">{q.answer}</p>
              <span className="text-xs text-gray-400 mt-1 block">{q.date}</span>
            </div>
          </article>
        ))}
      </div>

      <button className="mt-4 text-[#3483FA] text-sm font-medium hover:underline">Ver todas as perguntas</button>
    </section>
  )
}

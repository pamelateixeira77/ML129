"use client"

interface CookieBannerProps {
  onClose: () => void
}

export function CookieBanner({ onClose }: CookieBannerProps) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-[#333] text-white p-4 z-50"
      role="dialog"
      aria-label="Aviso sobre cookies"
    >
      <p className="text-sm text-center mb-3">
        Usamos cookies para melhorar sua experiência no Mercado Livre. Consulte mais informações na nossa{" "}
        <a href="#" className="text-[#3483FA] hover:underline">
          Central de privacidade
        </a>
        .
      </p>

      <div className="flex justify-center gap-3">
        <button
          onClick={onClose}
          className="px-6 py-2 bg-[#3483FA] hover:bg-[#2968c8] text-white text-sm font-medium rounded-md transition-colors"
          aria-label="Aceitar todos os cookies"
        >
          Aceitar cookies
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-transparent border border-white hover:bg-white/10 text-white text-sm font-medium rounded-md transition-colors"
          aria-label="Configurar preferências de cookies"
        >
          Configurar cookies
        </button>
      </div>
    </div>
  )
}

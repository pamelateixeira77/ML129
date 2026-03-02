

      {/* Store banner */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-r from-teal-400 to-teal-500 rounded-lg p-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FFE600] rounded-full flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 50 50" className="w-9 h-9" aria-hidden="true">
              <circle cx="25" cy="25" r="24" fill="#FFE600" stroke="#333" strokeWidth="1" />
              <path d="M15 20 Q25 8 35 20 Q25 32 15 20" fill="none" stroke="#333" strokeWidth="2.5" />
              <ellipse cx="25" cy="28" rx="8" ry="5" fill="none" stroke="#333" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Mercado Livre</h3>
            <p className="text-xs text-white/80">Loja oficial do Mercado Livre</p>
            <p className="text-xs text-white/70">+250mil Seguidores · +50mil Produtos</p>
          </div>
          <button className="px-4 py-2 bg-white text-teal-600 text-sm font-medium rounded-full hover:bg-gray-100">
            Seguir
          </button>
        </div>
      </div>
    </section>
  )
}

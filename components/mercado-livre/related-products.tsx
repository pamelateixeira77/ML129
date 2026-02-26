import Image from "next/image"

const relatedProducts = [
  {
    id: 1,
    name: "Ventilador De Teto Moderno 36 Polegadas Com Luz Led E...",
    originalPrice: 589.18,
    price: 391.72,
    discount: 33,
    installments: "12x R$ 38,32",
    freeShipping: true,
    image: "/ceiling-fan-with-led-light-modern.jpg",
  },
  {
    id: 2,
    name: "Ventilador De Coluna 50cm Oscilante Silencioso 3...",
    originalPrice: 352.77,
    price: 282.22,
    discount: 20,
    installments: "6x R$ 47,04 sem juros",
    freeShipping: true,
    image: "/black-column-fan-standing.jpg",
  },
  {
    id: 3,
    name: "Ventilador De Mesa 40cm Turbo 6 Pás Silencioso...",
    originalPrice: 199.9,
    price: 159.9,
    discount: 20,
    installments: "6x R$ 26,65 sem juros",
    freeShipping: true,
    image: "/table-fan-black-turbo.jpg",
  },
]

export function RelatedProducts() {
  return (
    <section className="py-4 border-t-8 border-gray-100" aria-labelledby="related-heading">
      <div className="px-4 flex items-center justify-between mb-4">
        <h2 id="related-heading" className="text-lg font-semibold text-gray-900">
          Produtos relacionados
        </h2>
        <span className="text-xs text-gray-400">Ad</span>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 pb-4" style={{ width: "max-content" }}>
          {relatedProducts.map((product) => (
            <a
              key={product.id}
              href="#"
              className="block w-44 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              aria-label={`${product.name}, por R$ ${product.price.toFixed(2).replace(".", ",")}`}
            >
              <div className="relative aspect-square bg-white p-2">
                <Image src={product.image || "/placeholder.svg"} alt="" fill className="object-contain" />
              </div>
              <div className="p-2">
                <h3 className="text-xs text-gray-700 line-clamp-2 mb-1">{product.name}</h3>
                <p className="text-xs text-gray-400 line-through">
                  R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                </p>
                <p className="text-base font-semibold text-gray-900">
                  R$ {product.price.toFixed(2).replace(".", ",")}
                  <span className="text-xs font-normal text-green-600 ml-1">{product.discount}% OFF</span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{product.installments}</p>
                {product.freeShipping && <p className="text-xs text-green-600 font-medium mt-1">Frete grátis</p>}
              </div>
            </a>
          ))}
        </div>
      </div>

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

export function Footer() {
  const links = [
    { label: "Termos e condições", href: "#" },
    { label: "Política de privacidade", href: "#" },
    { label: "Ajuda", href: "#" },
    { label: "Contato", href: "#" },
  ]

  return (
    <footer className="bg-gray-100 px-4 py-6 border-t border-gray-200" role="contentinfo">
      <nav aria-label="Links do rodapé">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-gray-600 hover:text-[#3483FA] hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 pt-4 border-t border-gray-300">
        <p className="text-xs text-gray-500 text-center">Copyright © 1999-2024 Mercado Livre LTDA.</p>
        <p className="text-xs text-gray-400 text-center mt-1">CNPJ: 03.007.331/0001-41</p>
      </div>
    </footer>
  )
}

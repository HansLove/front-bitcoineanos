"use client"
import { Button } from "@/components/ui/button"
import { Slide, Zoom } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import Link from "next/link"

const WHATSAPP_URL = "https://wa.me/5215580088161"

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster=""
      >
        <source src="/volcano.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <Zoom triggerOnce cascade>
          <h1 className="max-w-5xl mx-auto mb-6">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold font-spaceGrotesk text-white">
              {t("headline")}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10">
            {t("subtitle")}
          </p>
        </Zoom>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
          <Slide triggerOnce cascade delay={300} direction="up">
            <Link href="#join-consensus">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-base">
                {t("ctaPrimary")}
              </Button>
            </Link>
            <Link href="#new-to-bitcoin">
              <Button
                variant="outline"
                className="border-gray-600 text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                {t("ctaSecondary")}
              </Button>
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 text-sm transition-colors"
            >
              {t("ctaTertiary")} →
            </Link>
          </Slide>
        </div>
      </div>
    </section>
  )
}


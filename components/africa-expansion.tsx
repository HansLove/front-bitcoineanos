"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { useTranslations } from "next-intl"

export function AfricaExpansion() {
  const t = useTranslations("africa")

  const bullets = [
    t("bullet1"),
    t("bullet2"),
    t("bullet3"),
    t("bullet4"),
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-black to-orange-500/5 py-20">
      <div className="container mx-auto max-w-4xl px-6">
        <Fade triggerOnce>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t("intro")}
            </p>
          </div>
        </Fade>

        <Fade triggerOnce delay={100}>
          <p className="text-white font-semibold mb-4 text-center">
            {t("focus")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {bullets.map((bullet, index) => (
              <Slide
                key={index}
                triggerOnce
                direction="up"
                delay={100 + index * 50}
              >
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-orange-500">•</span>
                  {bullet}
                </div>
              </Slide>
            ))}
          </div>
          <p className="text-orange-500 text-lg font-medium text-center">
            {t("closing")}
          </p>
        </Fade>
      </div>
    </section>
  )
}

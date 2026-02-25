"use client"

import { Fade } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useLocale } from "next-intl"

export function ManifestoShort() {
  const t = useTranslations("manifestoShort")
  const locale = useLocale()

  return (
    <section className="relative overflow-hidden bg-black py-20" id="manifesto">
      <div className="container mx-auto max-w-4xl px-6">
        <Fade triggerOnce>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-white mb-12">
              {t("title")}
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              <p>{t("line1")}</p>
              <p>{t("line2")}</p>
              <p>{t("line3")}</p>
              <p className="pt-4">{t("line4")}</p>
              <p>{t("line5")}</p>
              <p>{t("line6")}</p>
              <p className="pt-4">{t("line7")}</p>
              <p>{t("line8")}</p>
              <p className="pt-4 text-orange-500 font-semibold">{t("line9")}</p>
            </div>
            <Link
              href={`/${locale}/manifesto`}
              className="inline-block mt-12 text-orange-500 hover:text-orange-400 font-medium transition-colors"
            >
              {t("readFull")} →
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  )
}

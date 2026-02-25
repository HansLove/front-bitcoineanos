"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

const TELEGRAM_URL = "https://t.me/el_consenso"
const WHATSAPP_URL = "https://wa.me/5215580088161"

export function JoinConsensus({ id }: { id?: string }) {
  const t = useTranslations("joinConsensus")

  return (
    <section
      id={id ?? "join-consensus"}
      className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-orange-500/5 py-20"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <Fade triggerOnce>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {t("intro")}
            </p>
            <div className="space-y-4 text-gray-300 mb-8">
              <p>{t("line1")}</p>
              <p className="text-orange-500 font-medium">{t("line2")}</p>
              <p>{t("line3")}</p>
              <p className="text-orange-500 font-medium">{t("line4")}</p>
            </div>
            <p className="text-xl text-white font-semibold mb-12">
              {t("closing")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Slide triggerOnce direction="up" delay={200}>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 w-full sm:w-auto">
                    {t("ctaTelegram")}
                  </Button>
                </a>
              </Slide>
              <Slide triggerOnce direction="up" delay={250}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-orange-500/50 text-white hover:bg-orange-500/10 px-8 w-full sm:w-auto"
                  >
                    {t("ctaWhatsApp")}
                  </Button>
                </a>
              </Slide>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

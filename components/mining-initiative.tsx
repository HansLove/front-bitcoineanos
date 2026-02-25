"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const SPOON_URL = "https://spoon.energy/"

export function MiningInitiative({ id }: { id?: string }) {
  const t = useTranslations("mining")

  return (
    <section
      id={id ?? "mining-initiative"}
      className="relative overflow-hidden bg-gradient-to-br from-orange-500/5 to-black py-20"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <Fade triggerOnce>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-white mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t("intro")}{" "}
              <a
                href={SPOON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 underline"
              >
                {t("introLink")}
              </a>
              .
            </p>
          </div>
        </Fade>

        <Fade triggerOnce delay={100}>
          <div className="space-y-4 text-center mb-12">
            <p className="text-gray-300 text-lg">{t("miningNotSpec")}</p>
            <p className="text-gray-300 text-lg">{t("proofOfWork")}</p>
            <p className="text-gray-300 text-lg">{t("commitment")}</p>
          </div>
        </Fade>

        <Fade triggerOnce delay={200}>
          <p className="text-white font-semibold mb-4">{t("ecosystem")}</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <Slide triggerOnce direction="up" delay={100}>
              <div className="bg-white/5 rounded-lg p-4 border border-orange-500/20">
                <span className="text-orange-500">•</span> {t("bullet1")}
              </div>
            </Slide>
            <Slide triggerOnce direction="up" delay={150}>
              <div className="bg-white/5 rounded-lg p-4 border border-orange-500/20">
                <span className="text-orange-500">•</span> {t("bullet2")}
              </div>
            </Slide>
            <Slide triggerOnce direction="up" delay={200}>
              <div className="bg-white/5 rounded-lg p-4 border border-orange-500/20">
                <span className="text-orange-500">•</span> {t("bullet3")}
              </div>
            </Slide>
            <Slide triggerOnce direction="up" delay={250}>
              <div className="bg-white/5 rounded-lg p-4 border border-orange-500/20">
                <span className="text-orange-500">•</span> {t("bullet4")}
              </div>
            </Slide>
          </div>
        </Fade>

        <Fade triggerOnce delay={300}>
          <p className="text-orange-500 text-lg font-medium text-center mb-8">
            {t("closing")}
          </p>
          <div className="text-center">
            <Link href={SPOON_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-orange-500/50 text-white hover:bg-orange-500/10 px-8"
              >
                {t("cta")}
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  )
}

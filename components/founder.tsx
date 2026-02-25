"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import Image from "next/image"

const FOUNDER_URL = "https://aarontolentino.com/"

export function Founder({ id }: { id?: string }) {
  const t = useTranslations("founder")

  return (
    <section
      id={id ?? "founder"}
      className="relative overflow-hidden bg-black py-20"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Fade triggerOnce direction="left">
            <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden">
              <Image
                src="/founder-1.JPG"
                alt="Aaron Tolentino - Founder of Bitcoineanos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Fade>
          <div className="space-y-6">
            <Slide triggerOnce direction="right" delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-white">
                {t("title")}
              </h2>
              <p className="text-orange-500 text-lg font-medium">
                {t("tagline")}
              </p>
            </Slide>
            <Fade triggerOnce delay={200}>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t("intro")}{" "}
                <a
                  href={FOUNDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 underline"
                >
                  {t("linkText")}
                </a>
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                {t("whileOthers")}
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  {t("bullet1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  {t("bullet2")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  {t("bullet3")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">•</span>
                  {t("bullet4")}
                </li>
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed pt-4">
                <span className="font-semibold text-white">{t("mission")}</span>{" "}
                {t("missionEnd")}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

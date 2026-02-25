"use client"

import { Fade, Slide } from "react-awesome-reveal"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function NewToBitcoin({ id }: { id?: string }) {
  const t = useTranslations("newToBitcoin")

  const steps = [
    {
      num: 1,
      title: t("step1Title"),
      desc: t("step1Desc"),
    },
    {
      num: 2,
      title: t("step2Title"),
      desc: t("step2Desc"),
    },
    {
      num: 3,
      title: t("step3Title"),
      desc: t("step3Desc"),
    },
  ]

  return (
    <section
      id={id ?? "new-to-bitcoin"}
      className="relative overflow-hidden bg-black py-20"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <Fade triggerOnce>
          <h2 className="text-3xl md:text-4xl font-bold font-spaceGrotesk text-white text-center mb-16">
            {t("title")}
          </h2>
        </Fade>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Slide
              key={step.num}
              triggerOnce
              direction="up"
              delay={index * 100}
            >
              <div className="relative bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-xl p-6 border border-orange-500/20">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 mt-2 font-spaceGrotesk">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-500/50" />
                  </div>
                )}
              </div>
            </Slide>
          ))}
        </div>

        <Fade triggerOnce delay={400}>
          <div className="text-center">
            <Link href="#join-consensus">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8">
                {t("cta")}
              </Button>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  )
}

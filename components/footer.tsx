"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"
import { FaTelegram, FaWhatsapp } from "react-icons/fa"

const TELEGRAM_URL = "https://t.me/el_consenso"
const WHATSAPP_URL = "https://wa.me/5215580088161"

export function Footer() {
  const t = useTranslations("footer")
  const locale = useLocale()

  const links = [
    { href: `/${locale}/manifesto`, label: t("manifesto") },
    { href: "#mining-initiative", label: t("mining") },
    { href: "#founder", label: t("founder") },
    { href: WHATSAPP_URL, label: t("contact"), external: true },
  ]

  return (
    <footer className="mt-10 text-gray-300 pb-10 md:mx-0 mx-4">
      <div className="container mx-auto px-8 py-10 bg-gradient-to-t from-orange-950/80 via-orange-900/50 to-orange-800/30 rounded-3xl border border-orange-500/10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-orange-500 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-orange-500 transition-colors"
          >
            <FaTelegram className="w-5 h-5" />
            {t("telegram")}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-orange-500 transition-colors"
          >
            <FaWhatsapp className="w-5 h-5" />
            {t("whatsapp")}
          </a>
        </div>

        <div className="border-t border-orange-700/50 pt-8 text-center">
          <p className="text-sm">{t("copy")}</p>
        </div>
      </div>
    </footer>
  )
}

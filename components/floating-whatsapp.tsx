"use client"

import { FaWhatsapp } from "react-icons/fa"

const WHATSAPP_URL = "https://wa.me/5215580088161"

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  )
}

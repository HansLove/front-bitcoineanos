import { Manifesto } from "@/components/manifesto"
import Link from "next/link"

export default function ManifestoPage({
  params,
}: {
  params: { locale: string }
}) {
  const backLabel = params.locale === "es" ? "Volver al inicio" : "Back to home"
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 pt-8 pb-4">
        <Link
          href={`/${params.locale}`}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"
        >
          ← {backLabel}
        </Link>
      </div>
      <Manifesto />
    </main>
  )
}

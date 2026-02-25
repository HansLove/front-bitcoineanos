import { Hero } from "@/components/hero"
import { ManifestoShort } from "@/components/manifesto-short"
import { Founder } from "@/components/founder"
import { MiningInitiative } from "@/components/mining-initiative"
import { NewToBitcoin } from "@/components/new-to-bitcoin"
import { AfricaExpansion } from "@/components/africa-expansion"
import { JoinConsensus } from "@/components/join-consensus"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <ManifestoShort />
      <Founder id="founder" />
      <MiningInitiative id="mining-initiative" />
      <NewToBitcoin id="new-to-bitcoin" />
      <AfricaExpansion />
      <JoinConsensus id="join-consensus" />
      <Footer />
    </main>
  )
}


import { DotIcon } from "lucide-react"
import { Feature73 } from "@/components/function/featured"
import QuizCTA from "@/components/function/quiz-cta"
import { Hero } from "@/components/function/site/hero"
import JourneyTimeline from "@/components/function/timeline"

export default function PageHome() {
  return (
    <>
      <Hero />
      <div className="text-border relative w-full border-t border-dashed">
        <DotIcon className="absolute -top-[12px] -left-2.5" />
        <DotIcon className="absolute -top-[12px] -right-2.5" />
      </div>
      <QuizCTA />
      <div className="text-border relative w-full border-t border-dashed">
        <DotIcon className="absolute -top-[12px] -left-2.5" />
        <DotIcon className="absolute -top-[12px] -right-2.5" />
      </div>
      <Feature73 />
      <JourneyTimeline />
    </>
  )
}

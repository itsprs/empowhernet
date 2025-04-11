import Link from "next/link"
import { AmphoraIcon, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Blob } from "@/components/shared/blob"
import { TypingText } from "@/components/shared/typing-text"
import { StarFilled } from "@/lib/icons"
import { Images } from "@/data/assets"
import { Hero as HeroData } from "@/data/data"

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-18rem)] w-full flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-between"
    >
      <Content />
      <Blob
        src={Images.hero}
        className="aspect-square h-auto w-full max-w-[18rem] md:max-w-[20rem] lg:max-w-[24rem]"
      />
    </section>
  )
}

function Content() {
  return (
    <div className="flex flex-col gap-2 text-center md:gap-4 lg:text-start">
      <Badge className="bg-accent mb-3 h-8 w-12 self-center rounded-full shadow-sm shadow-black/[.12] lg:self-start">
        <StarFilled className="animate-rotate-y animate-duration-[3000ms] animate-infinite animate-ease-in-out size-3 fill-zinc-500" />
      </Badge>
      <h1 className="font-secondary text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Empow. Her. Net. <br />
        <span className="text-red-400">
          <TypingText
            words={HeroData.keywords.map((word) => `${word}.`)}
            loop={true}
            cursorStyle="_"
            typeSpeed={30}
            deleteSpeed={25}
            delaySpeed={1000}
            cursor={true}
          />
        </span>
      </h1>
      <p className="max-w-[42rem] text-lg leading-normal sm:text-xl sm:leading-8">
        {HeroData.description}
      </p>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <div className="mt-3 flex flex-row flex-wrap items-center justify-center gap-3 lg:justify-start">
      <Button
        size={"lg"}
        className="relative rounded-full border border-dashed"
        asChild
      >
        <Link href="/products" className="group overflow-hidden ps-12">
          <span className="bg-accent/15 absolute start-0 flex size-10 items-center justify-center rounded-full duration-500 group-hover:w-full">
            <Sparkles
              aria-hidden="true"
              className="animate-wiggle animate-infinite group-hover:animate-wiggle-more group-hover:animate-infinite"
            />
          </span>
          <span className="duration-500 group-hover:translate-x-46">
            Explore Inspiring Stories
          </span>
        </Link>
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        className="rounded-full border-dashed"
        asChild
      >
        <Link href="/about">About</Link>
      </Button>
    </div>
  )
}

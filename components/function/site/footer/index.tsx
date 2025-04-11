import Link from "next/link"
import { SkullIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MinecraftHeartIcon, SiteIcon } from "@/lib/icons"
import { Social } from "@/data/data"
import { SiteMeta, category } from "@/data/site-data"
import { Section } from "./section"

type InsertItem = {
  in: category
  render: React.ReactNode
}

const insertItems: InsertItem[] = []

function provideLinksFooter() {
  return SiteMeta.reduce<Record<string, typeof SiteMeta>>((l, entry) => {
    entry.category?.forEach((c) => {
      if (c !== "More") {
        l[c] = l[c] || []
        l[c].push(entry)
      }
    })
    return l
  }, {})
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-dashed">
      <Header />
      <Content />
      <Bottom />
    </footer>
  )
}

function Header() {
  return (
    <Section className="group flex flex-row flex-wrap items-center justify-center gap-1 bg-black/3 dark:bg-black/20">
      <p>Designed & developed with</p>
      <MinecraftHeartIcon className="animate-jump animate-infinite mx-1 size-4" />
      <p>by</p>
      <Button
        variant={"link"}
        size={"sm"}
        className="px-1 text-base decoration-dashed"
        asChild
      >
        <Link
          prefetch={false}
          href="https://imprs.vercel.app/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pratham Raj Singh
        </Link>
      </Button>
      <SkullIcon
        size={22}
        className="group-hover:animate-wiggle-more group-hover:animate-infinite"
      />
    </Section>
  )
}

function Content() {
  return (
    <Section className="flex flex-col gap-14 py-14 lg:flex-row">
      <div className="grow space-y-3">
        <div className="flex w-fit flex-row items-center gap-2">
          <Button
            aria-label="Home"
            size="icon"
            variant="ghost"
            className="rounded-full"
            asChild
          >
            <Link href="/">
              <SiteIcon className="size-8 fill-current" />
            </Link>
          </Button>
          <h2 className="text-xl font-medium">Empow. Her. Net.</h2>
        </div>
        <p className="text-muted-foreground max-w-xs text-sm">
          — Uniting Women, Breaking Stereotypes, and Advancing Gender Equality.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-4">
        {Object.entries(provideLinksFooter()).map(([cat, value]) => (
          <div className="flex flex-col gap-2" key={cat}>
            <h4 className="mb-2 text-base">{cat}</h4>
            <ul className="space-y-1.5">
              {value.map((i) => (
                <li key={i.title} className="flex items-center gap-1">
                  {i.icon && <i.icon size={18} className="shrink-0" />}
                  <Button
                    variant="link"
                    className="decoration-dashed"
                    size={"sm"}
                    asChild
                  >
                    <Link
                      href={i.href}
                      {...(i.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {i.title}
                    </Link>
                  </Button>
                </li>
              ))}
              {insertItems?.length > 0 &&
                insertItems
                  .filter((i) => i.in === cat)
                  .map((i, idx) => <li key={idx}>{i.render}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Bottom() {
  return (
    <Section className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
      <span className="text-sm">
        © 2025 Empow.Her.Net. All rights reserved.
      </span>
      <div className="flex space-x-2">
        {Social.filter((s) =>
          ["Instagram", "Facebook", "X"].includes(s.name)
        ).map((s) => (
          <Button
            key={s.name}
            variant={"ghost"}
            size={"icon"}
            aria-label={s.name}
            asChild
          >
            <a href={s.link} target="_blank" rel="noopener noreferrer">
              <img src={s.icon} alt={s.name} className="size-4 dark:invert" />
            </a>
          </Button>
        ))}
      </div>
    </Section>
  )
}

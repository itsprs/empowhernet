import {
  BoxIcon,
  BriefcaseBusiness,
  FileClockIcon,
  GlobeLockIcon,
  HandshakeIcon,
  HouseIcon,
  ImagePlayIcon,
  LucideIcon,
  PenLineIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react"

type SiteMeta = {
  title: string
  description: string
  href: string
  category?: category[]
  pos?: number
  external?: boolean
  icon?: LucideIcon
}

export type category = "Site" | "Resources" | "Support" | "Legal" | "More"

export const SiteData = {
  name: "Imprs",
  description:
    "Explore a treasure trove of projects and side ventures that blend artistry with technology at Pratham Raj's Creative Hub!",
  keywords: [
    "PRS",
    "Imprs",
    "Pratham Raj",
    "Pratham Raj Singh",
    "Freelancer",
    "Personal Portfolio",
  ],
}

export const SiteMeta: SiteMeta[] = [
  {
    title: "Home",
    description: "Welcome to Pratham Raj's Creative Hub!",
    href: "/",
    category: ["Site"],
    pos: 1,
    icon: HouseIcon,
  },
  {
    title: "Jobs",
    description: "View the latest artworks and creative pieces.",
    href: "/job",
    category: ["Resources"],
    pos: 3,
    icon: BriefcaseBusiness,
  },
  {
    title: "Blog",
    description: "Read the latest articles and blog posts.",
    href: "/blog",
    category: ["Resources"],
    pos: 4,
    icon: PenLineIcon,
  },
  {
    title: "About",
    description: "Learn more about Pratham Raj and his creative journey.",
    href: "/about",
    category: ["Site"],
    pos: 5,
    icon: UserIcon,
  },
  {
    title: "Contact",
    description: "Contact me for any queries or collaborations.",
    href: "/contact",
    category: ["Support"],
    pos: 6,
    icon: PhoneIcon,
  },

  {
    title: "Changelog",
    description: "View the latest updates and changes to the website.",
    href: "/changelog",
    category: ["More", "Resources"],
    icon: FileClockIcon,
  },
  {
    title: "Privacy Policy",
    description: "Read the privacy policy and data protection guidelines.",
    href: "/privacy-policy",
    category: ["Legal"],
    icon: GlobeLockIcon,
  },
  {
    title: "Terms of Use",
    description: "Read the terms of use and service guidelines.",
    href: "/terms-of-use",
    category: ["Legal"],
    icon: HandshakeIcon,
  },
]

"use client"

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline"

const journey = [
  {
    id: 1,
    date: "Jan 2024",
    title: "The Spark",
    description:
      "The idea of EmpowerHerNet was born — a platform to amplify unheard voices and celebrate women's achievements.",
  },
  {
    id: 2,
    date: "Feb 2024",
    title: "Building the Platform",
    description:
      "Development began using Next.js, Tailwind CSS, and ShadCN. Core features like Stories, Categories, and Dynamic Routing were implemented.",
  },
  {
    id: 3,
    date: "Mar 2024",
    title: "Community Begins",
    description:
      "The first batch of powerful stories was submitted. Users could now read and add their own empowering experiences.",
  },
  {
    id: 4,
    date: "Apr 2024",
    title: "Future Ahead",
    description:
      "Integrations like reactions, tag filters, and world impact map are in progress — expanding voices, one story at a time.",
  },
]

export default function JourneyTimeline() {
  return (
    <section className="bg-muted rounded-xl px-4 py-20 shadow-sm md:px-8">
      <h2 className="mb-10 text-center text-3xl font-bold">
        Journey of EmpowerHerNet
      </h2>
      <Timeline defaultValue={journey.length}>
        {journey.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:sm:ms-32"
          >
            <TimelineHeader>
              <TimelineSeparator />
              <TimelineDate className="group-data-[orientation=vertical]/timeline:sm:absolute group-data-[orientation=vertical]/timeline:sm:-left-32 group-data-[orientation=vertical]/timeline:sm:w-20 group-data-[orientation=vertical]/timeline:sm:text-right">
                {item.date}
              </TimelineDate>
              <TimelineTitle className="sm:-mt-0.5">{item.title}</TimelineTitle>
              <TimelineIndicator />
            </TimelineHeader>
            <TimelineContent className="text-muted-foreground">
              {item.description}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  )
}

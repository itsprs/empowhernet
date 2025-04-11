import Image from "next/image"
import { notFound } from "next/navigation"
import { stories } from "@/data/stories"

interface StoryPageProps {
  params: {
    id: string
  }
}

export default function StoryPage({ params }: StoryPageProps) {
  const story = stories.find((s) => s.id === params.id)

  if (!story) return notFound()

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div className="relative h-64 w-full overflow-hidden rounded-xl">
        <img src={story.image} alt={story.name} className="object-cover" />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{story.name}</h1>
        <p className="text-muted-foreground text-sm">{story.title}</p>
      </div>
      <p className="text-lg leading-relaxed">{story.story}</p>
    </div>
  )
}

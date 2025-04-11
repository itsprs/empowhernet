import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cta10 } from "@/components/function/add-story"
import { stories } from "@/data/stories"

export default function StoriesPage() {
  return (
    <section className="space-y-6 p-6">
      <h1 className="text-center text-3xl font-bold">Inspiring Stories</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <Link href={`/stories/${story.id}`} key={story.id}>
            <Card
              // key={story.id}
              className="rounded-2xl pt-0 shadow-md transition hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <img
                  src={story.image}
                  alt={story.name}
                  width={500}
                  height={300}
                  className="h-60 w-full rounded-t-2xl object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2 p-4">
                <div className="flex items-center justify-between">
                  <CardTitle>{story.name}</CardTitle>
                  <Badge variant="outline">{story.category}</Badge>
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  {story.title}
                </p>
                <p className="line-clamp-3 text-sm leading-relaxed">
                  {story.story}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <Cta10 />
    </section>
  )
}

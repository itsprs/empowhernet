import { Button } from "@/components/ui/button"

interface Cta10Props {
  heading?: string
  description?: string
  buttons?: {
    primary?: {
      text: string
      url: string
    }
    secondary?: {
      text: string
      url: string
    }
  }
}

const Cta10 = ({
  heading = "Add Your Inspirational Story",
  description = "Your story has the power to inspire others. Share your journey and be a voice for change, equality, and empowerment.",
  buttons = {
    primary: {
      text: "Share Your Story",
      url: "/share-story",
    },
    secondary: {
      text: "Read Stories",
      url: "/stories",
    },
  },
}: Cta10Props) => {
  return (
    <section className="mt-12">
      <div>
        <div className="bg-accent flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h3>
            <p className="text-muted-foreground max-w-xl lg:text-lg">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            {buttons.secondary && (
              <Button variant="outline" asChild>
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild>
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Cta10 }

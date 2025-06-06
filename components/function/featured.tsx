import { ArrowRight } from "lucide-react"

interface Feature {
  id: string
  title: string
  description: string
  image: string
}

interface Feature73Props {
  heading?: string
  description?: string
  linkUrl?: string
  linkText?: string
  features?: Feature[]
}

const Feature73 = ({
  heading = "Empowering Features",
  description = "Explore how EmpowerHerNet is driving change through technology, storytelling, and community. Every feature is built to amplify voices, challenge norms, and create equal opportunities.",
  linkUrl = "/stories",
  linkText = "Explore Stories",
  features = [
    {
      id: "feature-1",
      title: "Inspiring Stories",
      description:
        "Real-life journeys of women breaking barriers and challenging stereotypes across science, tech, leadership, and more.",
      image:
        "https://media.istockphoto.com/id/1391976932/vector/childrens-perception-of-community.jpg?s=612x612&w=0&k=20&c=HT3Hppnm9uQWrHK6YBF-a_2mphexed8usm_UeFF1aMI=",
    },
    {
      id: "feature-2",
      title: "Opportunities Hub",
      description:
        "Discover job roles, scholarships, and training programs tailored to support and uplift women in various industries.",
      image:
        "https://www.shutterstock.com/image-vector/recruitment-human-resources-searching-candidate-600nw-2410790417.jpg",
    },
    {
      id: "feature-3",
      title: "Community Voices",
      description:
        "A platform to share opinions, discuss challenges, and build solidarity through a supportive digital community.",
      image:
        "https://img.freepik.com/free-vector/people-recording-listening-podcasts_23-2148780926.jpg",
    },
  ],
}: Feature73Props) => {
  return (
    <section>
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-2xl">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="text-muted-foreground mb-8 lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features[0] && (
            <div className="border-border flex flex-col overflow-clip rounded-xl border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
            <div
              key={feature.id}
              className="border-border flex flex-col overflow-clip rounded-xl border"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Feature73 }

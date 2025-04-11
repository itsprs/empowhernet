export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-20 md:px-10 lg:px-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl leading-tight font-semibold md:text-5xl lg:text-7xl">
          About <span className="text-primary">EmpowerHerNet</span>
        </h1>

        <p className="text-muted-foreground max-w-2xl text-lg">
          EmpowerHerNet is a platform dedicated to amplifying the voices of
          women, breaking gender stereotypes, and promoting equal opportunities
          for all. We believe that every story matters — and by sharing these
          stories, we pave the way for a more inclusive, equitable world.
        </p>

        <p className="text-muted-foreground max-w-2xl text-lg">
          Through community-driven stories, resources, and education,
          EmpowerHerNet aims to inspire action, challenge societal norms, and
          support individuals and organizations working toward gender equity.
          Whether you're here to share your journey, learn from others, or join
          a movement — you're in the right place.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="/stories"
            className="border-primary text-primary hover:bg-primary/10 rounded-md border px-6 py-3 font-medium transition"
          >
            Read Inspiring Stories
          </a>
          <a
            href="/contact"
            className="border-primary text-primary hover:bg-primary/10 rounded-md border px-6 py-3 font-medium transition"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  )
}

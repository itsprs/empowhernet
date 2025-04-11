import { Button } from "@/components/ui/button"
import { PaginationBar } from "@/components/pagination-bar"
import { SearchBar } from "@/components/search-bar"

export default function PageCategory() {
  const categories = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Blockchain",
    "Cybersecurity",
    "Cloud Computing",
    "Web Development",
    "Mobile Apps",
    "Augmented Reality",
    "Virtual Reality",
    "DevOps",
    "UI/UX",
    "3D Printing",
    "E-commerce",
    "Automotive",
    "Space",
    "Aerospace",
    "Biotech",
    "Genetics",
    "Mental Health",
    "Nutrition",
    "Wellness",
    "Parenting",
    "Relationships",
    "Self Improvement",
    "Productivity",
    "Meditation",
    "Yoga",
    "Sustainability",
    "Green Energy",
    "Climate Change",
    "Recycling",
    "Zero Waste",
    "Interior Design",
    "Architecture",
    "Crafts",
    "Handmade",
    "Woodworking",
    "Knitting",
    "Sewing",
    "Calligraphy",
    "Poetry",
    "Writing",
    "Journaling",
    "Comics",
    "Animation",
    "Vlogging",
    "Podcasting",
    "Photography Gear",
    "Drone Photography",
    "Street Photography",
    "Wildlife Photography",
    "Pet Care",
    "Animal Rescue",
    "Bird Watching",
    "Hiking",
    "Camping",
    "Backpacking",
    "Adventure Travel",
    "Road Trips",
    "Budget Travel",
    "Luxury Travel",
    "Cultural Travel",
    "Language Learning",
    "Expat Life",
    "Digital Nomad",
    "Entrepreneurship",
    "Freelancing",
    "Remote Work",
    "Work From Home",
    "Career Development",
    "Resumes & Interviews",
    "Public Speaking",
    "Leadership",
    "Investing",
    "Personal Finance",
    "Stock Market",
    "Cryptocurrency",
    "Real Estate",
    "Insurance",
    "Taxes",
    "Cooking",
    "Baking",
    "Vegan",
    "Vegetarian",
    "Keto",
    "Paleo",
    "Street Food",
    "Fine Dining",
    "Tea",
    "Coffee",
    "Wines",
    "Craft Beer",
    "Mixology",
    "Board Games",
    "Card Games",
    "Esports",
    "Game Development",
    "Console Gaming",
    "PC Gaming",
    "Indie Games",
    "Fan Art",
    "Memes",
    "Tattoo Art",
    "Skincare",
    "Haircare",
    "Nail Art",
    "Thrifting",
    "Minimalism",
  ]

  return (
    <>
      <section className="text-center">
        <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
          Explore by <span className="text-muted-foreground">Category</span>
        </h2>
        <p className="text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
          Browse content grouped by topics to discover what interests you most
          and navigate through blogs, projects, and insights with ease.
        </p>
      </section>
      <div className="space-y-16">
        <SearchBar className="mx-auto" />
        <section className="flex flex-wrap items-center justify-center gap-2 lg:max-w-5xl">
          {categories.slice(0, 20).map((category) => (
            <Button
              key={category}
              className="w-fit border border-dashed"
              variant={"ghost"}
            >
              {category}
            </Button>
          ))}
        </section>
        <PaginationBar
          totalItems={categories.length}
          itemsPerPage={20}
          currentPage={1}
        />
      </div>
    </>
  )
}

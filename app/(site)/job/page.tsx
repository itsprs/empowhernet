import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PaginationBar } from "@/components/pagination-bar"
import { SearchBar } from "@/components/search-bar"
import { getJobs } from "@/lib/db/jobDB"

const ITEMS_PER_PAGE = 6

interface PageProps {
  searchParams: {
    search?: string
    page?: string
  }
}

export default async function PageJob({ searchParams }: PageProps) {
  const search = searchParams.search?.toLowerCase() || ""
  const currentPage = parseInt(searchParams.page || "1", 10)

  const allJobs: Job[] = await getJobs()

  const filteredJobs = allJobs.filter((job) =>
    `${job.role} ${job.field}`.toLowerCase().includes(search)
  )

  const totalJobs = filteredJobs.length
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  const jobs = filteredJobs.slice(start, end)

  if (currentPage > 1 && jobs.length === 0) return notFound()

  return (
    <section className="w-full space-y-6 p-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-2xl font-semibold">
          Open Doors for Women in Every Field
        </h1>

        <SearchBar />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className="rounded-2xl border shadow-sm transition hover:shadow-md"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold">{job.role}</CardTitle>
                <Badge variant="outline">{job.field}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">
                  Vacant
                </span>
                <span>{job.vacant}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">
                  Filled
                </span>
                <span>{job.filled}</span>
              </div>
              <Button className="mt-4 w-full" variant="default">
                Apply Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalJobs > ITEMS_PER_PAGE && (
        <PaginationBar
          currentPage={currentPage}
          totalItems={totalJobs}
          limit={ITEMS_PER_PAGE}
          className="mx-auto pt-4"
        />
      )}
    </section>
  )
}

"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

interface PaginationBarProps {
  currentPage: number
  totalItems: number
  limit: number
  className?: string
}

export function PaginationBar({
  currentPage = 1,
  totalItems,
  limit = 10,
  className,
  ...props
}: PaginationBarProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const totalPages = Math.ceil(totalItems / limit)
  const params = new URLSearchParams(searchParams)

  const updatePage = (page: number) => {
    params.set("page", String(page))
    replace(`${pathname}?${params.toString()}`)
  }

  const pageNumbers = Array.from(
    new Set([
      1,
      ...(currentPage > 3 ? ["ellipsis-start"] : []),
      ...Array.from(
        { length: Math.min(3, totalPages - 2) },
        (_, i) => Math.max(2, currentPage - 1) + i
      ),
      ...(currentPage < totalPages - 2 ? ["ellipsis-end"] : []),
      totalPages,
    ])
  ).filter(
    (page) => typeof page === "string" || (page > 0 && page <= totalPages)
  )

  return (
    <Pagination className={cn("w-fit", className)} {...props}>
      <PaginationContent className="flex flex-wrap">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => updatePage(currentPage - 1)}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}

        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {typeof page === "string" ? (
              <PaginationEllipsis />
            ) : (
              <Button
                size="icon"
                variant={page === currentPage ? "outline" : "ghost"}
                onClick={() => updatePage(page)}
              >
                {page}
              </Button>
            )}
          </PaginationItem>
        ))}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => updatePage(currentPage + 1)}
              className="cursor-pointer"
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

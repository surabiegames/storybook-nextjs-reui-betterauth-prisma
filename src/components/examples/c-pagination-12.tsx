import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { ChevronFirstIcon, ChevronLeftIcon, ChevronRightIcon, ChevronLastIcon } from "lucide-react"

export function Pattern() {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            Rows per page
          </span>
          <NativeSelect className="w-18" defaultValue="25">
            <NativeSelectOption value="10">10</NativeSelectOption>
            <NativeSelectOption value="25">25</NativeSelectOption>
            <NativeSelectOption value="50">50</NativeSelectOption>
            <NativeSelectOption value="100">100</NativeSelectOption>
          </NativeSelect>
        </PaginationItem>
        <PaginationItem className="flex items-center gap-3">
          <span className="text-muted-foreground text-sm whitespace-nowrap">
            1-25 of 100
          </span>
          <div className="flex gap-1">
            <PaginationLink href="#" size="icon" aria-label="Go to first page">
              <ChevronFirstIcon className="size-4" />
            </PaginationLink>
            <PaginationLink
              href="#"
              size="icon"
              aria-label="Go to previous page"
            >
              <ChevronLeftIcon className="size-4" />
            </PaginationLink>
            <PaginationLink href="#" size="icon" aria-label="Go to next page">
              <ChevronRightIcon className="size-4" />
            </PaginationLink>
            <PaginationLink href="#" size="icon" aria-label="Go to last page">
              <ChevronLastIcon className="size-4" />
            </PaginationLink>
          </div>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
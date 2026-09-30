import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SearchIcon } from "lucide-react"

export function Pattern() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Search">
            <SearchIcon
            />
          </Button>
        }
      />
      <TooltipContent className="flex items-center gap-3">
        Search
        <Kbd className="-mr-1">⌘K</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AlertTriangleIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="outline" size="icon" aria-label="Warning" />}
        >
          <AlertTriangleIcon
          />
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex items-center gap-2 text-sm">
            <AlertTriangleIcon className="size-4 shrink-0" />
            This action cannot be undone
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
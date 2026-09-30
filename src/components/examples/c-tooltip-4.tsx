import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SaveIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="outline" size="icon-sm" aria-label="Save" />}
        >
          <SaveIcon
          />
        </TooltipTrigger>
        <TooltipContent className="pr-1.5">
          <div className="flex items-center gap-2 text-sm">
            Save Changes <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
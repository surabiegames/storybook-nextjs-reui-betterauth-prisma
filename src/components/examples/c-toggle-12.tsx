import { Toggle } from "@/components/ui/toggle"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PinIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger
          render={<Toggle variant="outline" aria-label="Pin to sidebar" />}
        >
          <PinIcon
          />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm">Pin to sidebar</p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
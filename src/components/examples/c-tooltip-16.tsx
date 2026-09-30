import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { BellIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="ghost" size="icon" aria-label="Notifications" />
          }
        >
          <div className="relative">
            <BellIcon
            />
            <span className="bg-destructive absolute -top-1 -right-1 block size-2 rounded-full" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="flex flex-col gap-1.5">
            <p className="text-sm font-medium">3 new notifications</p>
            <a
              href="#"
              className="text-xs font-medium underline underline-offset-2"
            >
              View all &rarr;
            </a>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
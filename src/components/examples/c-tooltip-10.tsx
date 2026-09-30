import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { LockIcon, ArrowRightIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" size="icon" aria-label="Pro feature" />
          }
        >
          <LockIcon
          />
        </TooltipTrigger>
        <TooltipContent className="max-w-64 p-3">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Advanced Analytics</span>
              <Badge variant="success" size="sm">
                Pro
              </Badge>
            </div>
            <p className="text-xs opacity-80">
              Unlock detailed insights, custom reports, and real-time
              dashboards.
            </p>
            <Button size="sm" className="border-border/40 border">
              Upgrade to Pro
              <ArrowRightIcon
              />
            </Button>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
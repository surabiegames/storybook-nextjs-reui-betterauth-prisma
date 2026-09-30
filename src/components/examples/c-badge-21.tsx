import { Badge } from "@/components/reui/badge"

import { Button } from "@/components/ui/button"
import { XIcon } from "lucide-react"

export function Pattern() {
  return (
    <Badge variant="outline" className="gap-0.5">
      Badge
      <Button
        variant="ghost"
        size="icon"
        className="size-3 hover:bg-transparent"
      >
        <XIcon
        />
      </Button>
    </Badge>
  )
}
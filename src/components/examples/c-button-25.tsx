import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button size="icon-sm" variant="ghost" aria-label="Notifications">
      <BellIcon aria-hidden="true" />
    </Button>
  )
}
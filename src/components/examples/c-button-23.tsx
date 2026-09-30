import { Button } from "@/components/ui/button"
import { CircleAlertIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button variant="destructive">
      Confirm Removal
      <CircleAlertIcon aria-hidden="true" />
    </Button>
  )
}
import { Button } from "@/components/ui/button"
import { HelpCircleIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button variant="link">
      <HelpCircleIcon aria-hidden="true" />
      Help Center
    </Button>
  )
}
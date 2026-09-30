import { Button } from "@/components/ui/button"
import { ZapIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button size="lg">
      <ZapIcon aria-hidden="true" />
      Upgrade Now
    </Button>
  )
}
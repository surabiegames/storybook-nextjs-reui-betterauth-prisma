import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button variant="secondary">
      Open Project
      <ExternalLinkIcon aria-hidden="true" />
    </Button>
  )
}
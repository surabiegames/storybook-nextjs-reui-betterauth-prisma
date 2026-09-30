import { Button } from "@/components/ui/button"
import { ArrowUpRightIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button variant="link" className="group/link-button">
      View Documentation
      <ArrowUpRightIcon aria-hidden="true" className="transition-transform group-hover/link-button:rotate-45" />
    </Button>
  )
}
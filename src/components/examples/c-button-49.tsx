import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button variant="link" render={<a href="#" />} nativeButton={false}>
      <ChevronLeftIcon data-icon="inline-start" aria-hidden="true" />
      Go back
    </Button>
  )
}
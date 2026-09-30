import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm">
        <ArrowLeftIcon aria-hidden="true" />
        Previous
      </Button>
      <Button variant="outline" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="outline" size="sm">
        Next
        <ArrowRightIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  )
}
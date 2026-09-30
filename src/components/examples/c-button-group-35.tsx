import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <ChevronLeftIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        1
      </Button>
      <Button variant="outline" size="icon">
        2
      </Button>
      <Button variant="default" size="icon" className="border-primary border">
        3
      </Button>
      <Button variant="outline" size="icon">
        4
      </Button>
      <Button variant="outline" size="icon">
        5
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  )
}
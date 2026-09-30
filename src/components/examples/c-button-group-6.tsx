import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { FlipHorizontalIcon, FlipVerticalIcon, RotateCwIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <FlipHorizontalIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <FlipVerticalIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon">
        <RotateCwIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  )
}
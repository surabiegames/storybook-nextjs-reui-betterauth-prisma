import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { PlusIcon, MinusIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup orientation="vertical">
      <Button variant="outline" size="icon" aria-label="Add">
        <PlusIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Subtract">
        <MinusIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  )
}
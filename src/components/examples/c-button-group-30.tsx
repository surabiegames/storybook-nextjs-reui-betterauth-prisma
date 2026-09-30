import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { StarIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button
        size="sm"
        variant="default"
        aria-label="Following 2.4k"
        className="border-primary"
      >
        <StarIcon
        />
        Star
      </Button>
      <ButtonGroupText className="border-primary">2.4k</ButtonGroupText>
    </ButtonGroup>
  )
}
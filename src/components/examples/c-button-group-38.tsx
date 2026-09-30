import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { SkipBackIcon, PlayIcon, SkipForwardIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Skip back">
        <SkipBackIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Play">
        <PlayIcon aria-hidden="true" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Skip forward">
        <SkipForwardIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  )
}
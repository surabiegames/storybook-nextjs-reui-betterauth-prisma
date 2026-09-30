import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Share2Icon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button size="sm" className="border-primary">
        <Share2Icon
        />
        Share
      </Button>
      <ButtonGroupText className="text-muted-foreground bg-transparent px-2">
        128 Shares
      </ButtonGroupText>
    </ButtonGroup>
  )
}
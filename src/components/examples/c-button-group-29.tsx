import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { UserPlusIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button size="sm" variant="outline">
        <UserPlusIcon aria-hidden="true" />
        Follow
      </Button>
      <ButtonGroupText className="text-muted-foreground">
        2.4k followers
      </ButtonGroupText>
    </ButtonGroup>
  )
}
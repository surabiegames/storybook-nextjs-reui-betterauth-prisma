import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { HeartIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <HeartIcon aria-hidden="true" />
        Like
      </Button>
      <Button
        variant="outline"
        className="w-12"
        render={<span />}
        nativeButton={false}
      >
        1.2K
      </Button>
    </ButtonGroup>
  )
}
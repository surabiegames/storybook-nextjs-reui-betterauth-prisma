import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SendIcon, AudioLinesIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size="icon">
          <SendIcon aria-hidden="true" />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." />
          <Tooltip>
            <TooltipTrigger render={<InputGroupAddon align="inline-end" />}>
              <AudioLinesIcon aria-hidden="true" />
            </TooltipTrigger>
            <TooltipContent>Voice Mode</TooltipContent>
          </Tooltip>
        </InputGroup>
      </ButtonGroup>
    </ButtonGroup>
  )
}
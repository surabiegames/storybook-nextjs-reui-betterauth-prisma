import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { InfoIcon } from "lucide-react"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <ButtonGroup>
        <ButtonGroupText>https://</ButtonGroupText>
        <InputGroup>
          <InputGroupInput placeholder="example" />
          <InputGroupAddon align="inline-end">
            <InfoIcon className="text-muted-foreground size-4" />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </Field>
  )
}
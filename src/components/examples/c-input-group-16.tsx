import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { InfoIcon } from "lucide-react"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <InputGroup className="h-auto">
        <InputGroupInput placeholder="First name" />
        <InputGroupAddon align="block-start">
          <InputGroupText className="font-medium">User Profile</InputGroupText>
          <InfoIcon className="ml-auto" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
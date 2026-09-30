import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { SearchIcon } from "lucide-react"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon className="text-muted-foreground size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search logs..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground text-xs">
            12 results
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}
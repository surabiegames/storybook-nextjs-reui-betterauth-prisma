import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HelpCircleIcon } from "lucide-react"

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <div className="flex items-center gap-2">
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Tooltip>
          <TooltipTrigger className="inline-flex items-center">
            <HelpCircleIcon className="text-muted-foreground size-3.5" />
          </TooltipTrigger>
          <TooltipContent>
            Your unique identifier on the platform.
          </TooltipContent>
        </Tooltip>
      </div>
      <Input id="username" placeholder="johndoe" />
      <FieldDescription>
        Your unique identifier on the platform.
      </FieldDescription>
    </Field>
  )
}
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react"

export function Pattern() {
  return (
    <Field className="w-full max-w-xs">
      <Label htmlFor="label-tooltip" className="gap-1">
        API Key
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="inline-flex items-center">
              <span className="text-muted-foreground inline-flex cursor-help">
                <InfoIcon className="size-3.5" />
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Your API key can be found in the developer settings.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Label>
      <Input
        id="label-tooltip"
        placeholder="sk_live_..."
        className="font-mono"
      />
    </Field>
  )
}
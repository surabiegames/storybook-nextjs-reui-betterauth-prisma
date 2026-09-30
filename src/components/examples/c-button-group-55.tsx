import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CreditCardIcon, CheckIcon, ChevronDownIcon, CalendarIcon, FileTextIcon, XIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ButtonGroup>
        <ButtonGroupText className="border-input bg-muted/40 text-muted-foreground gap-1.5 border px-2.5 text-xs">
          <CreditCardIcon className="size-3.5 opacity-60" aria-hidden="true" />
          <span className="text-foreground font-medium tabular-nums">
            USD 12,480
          </span>
        </ButtonGroupText>
        <Button variant="outline" size="sm">
          Hold
        </Button>
      </ButtonGroup>

      <ButtonGroup className="**:data-[slot=button]:border-r-0">
        <Button size="sm">
          <CheckIcon aria-hidden="true" />
          Release
        </Button>
        <ButtonGroupSeparator className="bg-primary/72" />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                size="icon-sm"
                className="border-primary-foreground/20 rounded-l-none border-l"
                aria-label="More payout actions"
              />
            }
          >
            <ChevronDownIcon aria-hidden="true" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={8} className="w-44">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CalendarIcon className="size-4 opacity-60" aria-hidden="true" />
                Schedule for Friday
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon className="size-4 opacity-60" aria-hidden="true" />
                Change destination
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileTextIcon className="size-4 opacity-60" aria-hidden="true" />
                Export receipt
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <XIcon aria-hidden="true" />
                Cancel payout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </div>
  )
}
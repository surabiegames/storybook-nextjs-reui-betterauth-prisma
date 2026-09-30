import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ListFilterIcon, ChevronDownIcon, XIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup className="max-w-xs">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" aria-label="Filter">
              <ListFilterIcon aria-hidden="true" />
              Filter
              <ChevronDownIcon aria-hidden="true" />
            </Button>
          }
        />
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuItem>All Records</DropdownMenuItem>
          <DropdownMenuItem>Recent</DropdownMenuItem>
          <DropdownMenuItem>Archived</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Input placeholder="Filter records..." />
      <Button variant="outline" size="icon">
        <XIcon aria-hidden="true" />
      </Button>
    </ButtonGroup>
  )
}
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BellIcon, CheckIcon } from "lucide-react"

const icons = {
  bell: (
    <BellIcon aria-hidden="true" />
  ),
  check: (
    <CheckIcon aria-hidden="true" />
  ),
}

export function Pattern() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Notifications" />
        }
      >
        {icons.bell}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuItem>
            <span className="flex-1">New message from Alex</span>
            {icons.check}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex-1">Document approved</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className="flex-1">Pipeline stage updated</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PlusIcon, MoreHorizontalIcon, UserPlusIcon, ShoppingCartIcon, FileTextIcon } from "lucide-react"

const icons = {
  plus: (
    <PlusIcon aria-hidden="true" />
  ),
  more: (
    <MoreHorizontalIcon aria-hidden="true" />
  ),
  userPlus: (
    <UserPlusIcon aria-hidden="true" />
  ),
  cart: (
    <ShoppingCartIcon aria-hidden="true" />
  ),
  fileText: (
    <FileTextIcon aria-hidden="true" />
  ),
}

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" size="sm" aria-label="More options">
        {icons.plus}
        New
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button size="icon-sm" variant="outline">
              {icons.more}
            </Button>
          }
        />
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Create</DropdownMenuLabel>
            <DropdownMenuItem>
              {icons.userPlus}
              New Customer
            </DropdownMenuItem>
            <DropdownMenuItem>
              {icons.cart}
              New Order
            </DropdownMenuItem>
            <DropdownMenuItem>
              {icons.fileText}
              New Invoice
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
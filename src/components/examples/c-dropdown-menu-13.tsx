import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Share2Icon, MailIcon, MessageCircleIcon, LinkIcon, FileTextIcon, FileSpreadsheetIcon, ImageIcon, PrinterIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" className="w-fit gap-2">
              <Share2Icon aria-hidden="true" />
              Share
            </Button>
          }
        />
        <DropdownMenuContent className="w-48" align="start">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Share via</DropdownMenuLabel>
            <DropdownMenuItem>
              <MailIcon aria-hidden="true" />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageCircleIcon aria-hidden="true" />
              Message
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LinkIcon aria-hidden="true" />
              Copy Link
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Export as</DropdownMenuLabel>
            <DropdownMenuItem>
              <FileTextIcon aria-hidden="true" />
              PDF
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileSpreadsheetIcon aria-hidden="true" />
              CSV
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ImageIcon aria-hidden="true" />
              PNG
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PrinterIcon aria-hidden="true" />
            Print
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
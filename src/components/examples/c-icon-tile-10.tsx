import { IconTile } from "@/components/reui/icon-tile"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { FileTextIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex w-full max-w-sm items-center justify-center">
      <Item variant="outline">
        <ItemMedia>
          <IconTile variant="elevated" size="sm" aria-hidden="true">
            <FileTextIcon
            />
          </IconTile>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Quarterly report</ItemTitle>
          <ItemDescription>Updated 2 hours ago by Anna</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
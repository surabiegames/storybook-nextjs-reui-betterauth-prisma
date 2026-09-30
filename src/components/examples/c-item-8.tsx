import { Badge } from "@/components/reui/badge"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { InboxIcon, SendIcon, FileIcon, ArchiveIcon, Trash2Icon } from "lucide-react"

const menuItems = [
  {
    icon: (
      <InboxIcon
      />
    ),
    label: "Inbox",
    count: 12,
  },
  {
    icon: (
      <SendIcon
      />
    ),
    label: "Sent",
    count: 0,
  },
  {
    icon: (
      <FileIcon
      />
    ),
    label: "Drafts",
    count: 3,
  },
  {
    icon: (
      <ArchiveIcon
      />
    ),
    label: "Archive",
    count: 0,
  },
  {
    icon: (
      <Trash2Icon
      />
    ),
    label: "Trash",
    count: 0,
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-64 flex-col gap-0.5">
      {menuItems.map((item) => (
        <Item key={item.label} size="xs" render={<a href="#" />}>
          <ItemMedia variant="icon">{item.icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>{item.label}</ItemTitle>
          </ItemContent>
          {item.count > 1 && (
            <ItemActions>
              <Badge variant="success-light" className="rounded-full" size="xs">
                {item.count}
              </Badge>
            </ItemActions>
          )}
        </Item>
      ))}
    </div>
  )
}
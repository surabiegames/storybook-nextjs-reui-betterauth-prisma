import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Kbd } from "@/components/ui/kbd"
import { SearchIcon, PlusIcon, SaveIcon, SettingsIcon, LogOutIcon } from "lucide-react"

const commands = [
  {
    icon: (
      <SearchIcon
      />
    ),
    label: "Search",
    shortcut: "⌘K",
  },
  {
    icon: (
      <PlusIcon
      />
    ),
    label: "New File",
    shortcut: "⌘N",
  },
  {
    icon: (
      <SaveIcon
      />
    ),
    label: "Save",
    shortcut: "⌘S",
  },
  {
    icon: (
      <SettingsIcon
      />
    ),
    label: "Settings",
    shortcut: "⌘,",
  },
  {
    icon: (
      <LogOutIcon
      />
    ),
    label: "Sign Out",
    shortcut: "⌘Q",
  },
]

export function Pattern() {
  return (
    <div className="mx-auto flex w-full max-w-64 flex-col gap-0.5">
      {commands.map((cmd) => (
        <Item key={cmd.label} render={<a href="#" />} size="xs">
          <ItemMedia variant="icon">{cmd.icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>{cmd.label}</ItemTitle>
          </ItemContent>
          <ItemActions>
            <Kbd>{cmd.shortcut}</Kbd>
          </ItemActions>
        </Item>
      ))}
    </div>
  )
}
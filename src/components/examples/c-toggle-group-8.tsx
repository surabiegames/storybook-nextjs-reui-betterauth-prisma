import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ListIcon, LayoutGridIcon, Columns2Icon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup defaultValue={["list"]} variant="outline">
        <ToggleGroupItem value="list" aria-label="List view">
          <ListIcon
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="grid" aria-label="Grid view">
          <LayoutGridIcon
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="kanban" aria-label="Kanban view">
          <Columns2Icon
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
import { IconTile } from "@/components/reui/icon-tile"
import { LayoutDashboardIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <IconTile variant="frame" aria-hidden="true">
        <LayoutDashboardIcon
        />
      </IconTile>
    </div>
  )
}
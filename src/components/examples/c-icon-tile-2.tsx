import { IconTile } from "@/components/reui/icon-tile"
import { PackageIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <IconTile variant="elevated" aria-hidden="true">
        <PackageIcon
        />
      </IconTile>
    </div>
  )
}
import { IconTile } from "@/components/reui/icon-tile"
import { ImageIcon, Settings2Icon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-4">
      <IconTile variant="elevated" className="size-14" aria-hidden="true">
        <ImageIcon className="size-7" />
      </IconTile>
      <IconTile
        variant="elevated"
        className="[--icon-tile-icon-size:--spacing(7)] [--icon-tile-size:--spacing(14)]"
        aria-hidden="true"
      >
        <Settings2Icon
        />
      </IconTile>
    </div>
  )
}
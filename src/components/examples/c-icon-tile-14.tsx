import { IconTile } from "@/components/reui/icon-tile"
import { GlobeIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <span className="relative inline-flex" aria-hidden="true">
        <IconTile variant="elevated">
          <GlobeIcon
          />
        </IconTile>
        <span className="border-background bg-success absolute -end-0.5 -top-0.5 size-3 rounded-full border-2" />
      </span>
    </div>
  )
}
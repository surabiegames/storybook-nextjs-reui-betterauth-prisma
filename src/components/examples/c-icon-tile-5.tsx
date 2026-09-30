import { IconTile } from "@/components/reui/icon-tile"
import { PackageIcon } from "lucide-react"

const sizes = ["xs", "sm", "default", "lg", "xl"] as const

export function Pattern() {
  return (
    <div className="flex items-end justify-center gap-4">
      {sizes.map((size) => (
        <IconTile key={size} variant="elevated" size={size} aria-hidden="true">
          <PackageIcon
          />
        </IconTile>
      ))}
    </div>
  )
}
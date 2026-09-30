import { IconTile } from "@/components/reui/icon-tile"
import { StarIcon, MessageSquareIcon, Settings2Icon, CircleAlertIcon } from "lucide-react"

// The `elevated` variant keeps its background-colored ring and shadow while the
// fill is overridden with a raw Tailwind color plus a white glyph, for solid
// brand-colored tiles.
const tiles = [
  {
    className: "bg-indigo-500 text-white",
    icon: (
      <StarIcon
      />
    ),
  },
  {
    className: "bg-amber-500 text-white",
    icon: (
      <MessageSquareIcon
      />
    ),
  },
  {
    className: "bg-emerald-600 text-white",
    icon: (
      <Settings2Icon
      />
    ),
  },
  {
    className: "bg-rose-500 text-white",
    icon: (
      <CircleAlertIcon
      />
    ),
  },
]

export function Pattern() {
  return (
    <div className="flex items-center justify-center gap-4">
      {tiles.map((tile) => (
        <IconTile
          key={tile.className}
          variant="elevated"
          className={tile.className}
          aria-hidden="true"
        >
          {tile.icon}
        </IconTile>
      ))}
    </div>
  )
}
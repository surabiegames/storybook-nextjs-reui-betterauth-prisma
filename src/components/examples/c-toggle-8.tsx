import { Toggle } from "@/components/ui/toggle"
import { StarIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Small</span>
        <Toggle variant="outline" size="sm" aria-label="Toggle star small">
          <StarIcon
          />
        </Toggle>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Default</span>
        <Toggle
          variant="outline"
          size="default"
          aria-label="Toggle star default"
        >
          <StarIcon
          />
        </Toggle>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-muted-foreground w-16 text-sm">Large</span>
        <Toggle variant="outline" size="lg" aria-label="Toggle star large">
          <StarIcon
          />
        </Toggle>
      </div>
    </div>
  )
}
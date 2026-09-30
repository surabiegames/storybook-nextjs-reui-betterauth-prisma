import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup
        multiple
        orientation="vertical"
        variant="outline"
        spacing={1}
      >
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <BoldIcon
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ItalicIcon
          />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon
          />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
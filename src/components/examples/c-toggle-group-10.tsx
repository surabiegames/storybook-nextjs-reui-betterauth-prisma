import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup defaultValue={["light"]} variant="outline">
        <ToggleGroupItem value="light" aria-label="Light theme">
          <SunIcon
          />
          Light
        </ToggleGroupItem>
        <ToggleGroupItem value="dark" aria-label="Dark theme">
          <MoonIcon
          />
          Dark
        </ToggleGroupItem>
        <ToggleGroupItem value="system" aria-label="System theme">
          <MonitorIcon
          />
          System
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
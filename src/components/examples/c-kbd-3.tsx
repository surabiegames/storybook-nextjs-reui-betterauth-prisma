import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { ArrowLeftIcon, CircleDashedIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <KbdGroup>
        <Kbd>
          <ArrowLeftIcon
          />
          Left
        </Kbd>
        <Kbd>
          <CircleDashedIcon
          />
          Voice Enabled
        </Kbd>
      </KbdGroup>
    </div>
  )
}
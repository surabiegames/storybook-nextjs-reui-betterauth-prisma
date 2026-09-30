import { Button } from "@/components/ui/button"
import { ThumbsUpIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button className="pe-0">
      <ThumbsUpIcon aria-hidden="true" />
      Like
      <span className="relative ms-1 px-3 text-xs font-medium opacity-80 before:absolute before:inset-0 before:left-0 before:w-px before:bg-[currentColor]/60">
        456
      </span>
    </Button>
  )
}
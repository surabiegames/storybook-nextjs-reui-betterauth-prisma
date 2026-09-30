"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"

import { Toggle } from "@/components/ui/toggle"
import { BellIcon } from "lucide-react"

export function Pattern() {
  const [pressed, setPressed] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <Toggle
        aria-label="Toggle notifications"
        pressed={pressed}
        onPressedChange={setPressed}
      >
        <div className="relative">
          <BellIcon
          />
          {!pressed && (
            <Badge
              variant="destructive"
              size="xs"
              className="absolute -top-2 -right-2 rounded-full!"
            >
              3
            </Badge>
          )}
        </div>
      </Toggle>
    </div>
  )
}
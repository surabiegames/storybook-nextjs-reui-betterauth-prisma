"use client"

import { useState } from "react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MessageSquareIcon, ShieldCheckIcon, ZapIcon, ChevronDownIcon } from "lucide-react"

const modes = [
  {
    id: "assist",
    label: "Assist",
    icon: (
      <MessageSquareIcon className="size-3.5 opacity-60" aria-hidden="true" />
    ),
  },
  {
    id: "review",
    label: "Review",
    icon: (
      <ShieldCheckIcon className="size-3.5 opacity-60" aria-hidden="true" />
    ),
  },
  {
    id: "auto",
    label: "Auto",
    icon: (
      <ZapIcon className="size-3.5 opacity-60" aria-hidden="true" />
    ),
  },
] as const

const limits = ["2k credits", "10k credits", "Unlimited"]

type ModeId = (typeof modes)[number]["id"]

export function Pattern() {
  const [active, setActive] = useState<ModeId>("review")
  const [limit, setLimit] = useState(limits[1])

  return (
    <ButtonGroup>
      {modes.map((mode) => (
        <Button
          key={mode.id}
          variant="outline"
          size="sm"
          className={cn(active === mode.id && "bg-muted")}
          onClick={() => setActive(mode.id)}
        >
          {mode.icon}
          {mode.label}
        </Button>
      ))}
      <ButtonGroupSeparator />
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs"
              aria-label="Select credit cap"
            />
          }
        >
          {limit}
          <ChevronDownIcon className="size-3 opacity-60" aria-hidden="true" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuGroup>
            {limits.map((item) => (
              <DropdownMenuItem key={item} onClick={() => setLimit(item)}>
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
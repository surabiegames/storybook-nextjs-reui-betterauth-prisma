"use client"

import { useState } from "react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RouteIcon, WaypointsIcon, BotIcon, ChevronDownIcon } from "lucide-react"

const items = [
  {
    id: "Routes",
    label: "Routes",
    icon: (
      <RouteIcon aria-hidden="true" className="size-3.5 opacity-60" />
    ),
  },
  {
    id: "Paths",
    label: "Paths",
    icon: (
      <WaypointsIcon aria-hidden="true" className="size-3.5 opacity-60" />
    ),
  },
  {
    id: "Bot Name",
    label: "Bot Name",
    icon: (
      <BotIcon aria-hidden="true" className="size-3.5 opacity-60" />
    ),
  },
]

export function Pattern() {
  const [active, setActive] = useState("Paths")

  return (
    <ButtonGroup>
      {items.map((item) => (
        <Button
          key={item.id}
          variant="outline"
          className={cn(active === item.id ? "bg-muted" : "")}
          onClick={() => setActive(item.id)}
        >
          {item.icon}
          {item.label}
        </Button>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
          <ChevronDownIcon aria-hidden="true" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuItem>Filter by Group</DropdownMenuItem>
          <DropdownMenuItem>Sort by Name</DropdownMenuItem>
          <DropdownMenuItem>Export Data</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
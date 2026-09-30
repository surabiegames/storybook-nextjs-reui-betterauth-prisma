"use client"

import { useState } from "react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ListFilterIcon, LayoutGridIcon, ListIcon, ChevronDownIcon, PlusIcon } from "lucide-react"

export function Pattern() {
  const [view, setView] = useState<"grid" | "list">("list")

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline" size="icon" aria-label="Sort" />}
        >
          <ListFilterIcon
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-40">
          <DropdownMenuItem>Newest</DropdownMenuItem>
          <DropdownMenuItem>Oldest</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Recently Updated</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ButtonGroup>
        <Button
          variant="outline"
          size="icon"
          className={cn(view === "grid" && "bg-muted")}
          onClick={() => setView("grid")}
          aria-label="Grid view"
        >
          <LayoutGridIcon aria-hidden="true" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn(view === "list" && "bg-muted")}
          onClick={() => setView("list")}
          aria-label="List view"
        >
          <ListIcon aria-hidden="true" />
        </Button>
      </ButtonGroup>

      <DropdownMenu>
        <DropdownMenuTrigger render={<Button />}>
          Add New...
          <ChevronDownIcon aria-hidden="true" className="opacity-60" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-40">
          <DropdownMenuItem>
            <PlusIcon aria-hidden="true" />
            Project
          </DropdownMenuItem>
          <DropdownMenuItem>
            <PlusIcon aria-hidden="true" />
            Domain
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusIcon aria-hidden="true" />
            Team
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
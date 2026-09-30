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
import { ListFilterIcon, DownloadIcon, ChevronDownIcon, LayoutGridIcon, ListIcon, FileSpreadsheetIcon, FileJsonIcon, FileTextIcon } from "lucide-react"

const icons = {
  filter: (
    <ListFilterIcon aria-hidden="true" />
  ),
  download: (
    <DownloadIcon aria-hidden="true" />
  ),
  chevronDown: (
    <ChevronDownIcon aria-hidden="true" />
  ),
  grid: (
    <LayoutGridIcon aria-hidden="true" />
  ),
  list: (
    <ListIcon aria-hidden="true" />
  ),
  fileSpreadsheet: (
    <FileSpreadsheetIcon aria-hidden="true" />
  ),
  fileJson: (
    <FileJsonIcon aria-hidden="true" />
  ),
  filePdf: (
    <FileTextIcon aria-hidden="true" />
  ),
}

export function Pattern() {
  const [view, setView] = useState<"grid" | "list">("grid")

  return (
    <ButtonGroup>
      <Button variant="outline">
        {icons.filter}
        Filter
      </Button>
      <Button variant="outline">
        {icons.download}
        Export CSV
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              aria-label="More export options"
            />
          }
        >
          {icons.chevronDown}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              {icons.fileSpreadsheet}
              Export Excel
            </DropdownMenuItem>
            <DropdownMenuItem>
              {icons.fileJson}
              Export JSON
            </DropdownMenuItem>
            <DropdownMenuItem>
              {icons.filePdf}
              Export PDF
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="outline"
        size="icon"
        aria-label="Grid view"
        className={cn(view === "grid" ? "bg-muted" : "")}
        onClick={() => setView("grid")}
      >
        {icons.grid}
      </Button>
      <Button
        variant="outline"
        size="icon"
        aria-label="List view"
        className={cn(view === "list" ? "bg-muted" : "")}
        onClick={() => setView("list")}
      >
        {icons.list}
      </Button>
    </ButtonGroup>
  )
}
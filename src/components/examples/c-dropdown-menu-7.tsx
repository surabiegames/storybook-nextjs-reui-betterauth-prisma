"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpIcon, ArrowDownIcon, ArrowRightIcon } from "lucide-react"

export function Pattern() {
  const [position, setPosition] = useState("bottom")

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={<Button variant="outline" className="w-fit" />}
        >
          Radio Group
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="top">
                <ArrowUpIcon
                />
                Top
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                <ArrowDownIcon
                />
                Bottom
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right" disabled>
                <ArrowRightIcon
                />
                Right
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
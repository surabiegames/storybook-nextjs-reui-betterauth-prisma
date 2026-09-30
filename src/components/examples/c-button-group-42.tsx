"use client"

import { useState } from "react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TrendingUpIcon, TargetIcon, ShieldAlertIcon, ShieldCheckIcon } from "lucide-react"

const orderTypes = [
  {
    id: "market",
    label: "Market",
    tooltip: "Execute immediately at best available price",
    icon: (
      <TrendingUpIcon aria-hidden="true" />
    ),
  },
  {
    id: "limit",
    label: "Limit",
    tooltip: "Execute only at your specified price or better",
    icon: (
      <TargetIcon aria-hidden="true" />
    ),
  },
  {
    id: "stop",
    label: "Stop",
    tooltip: "Trigger a market order at stop level",
    icon: (
      <ShieldAlertIcon aria-hidden="true" />
    ),
  },
  {
    id: "stop-limit",
    label: "Stop-Limit",
    tooltip: "Trigger a limit order at stop level",
    icon: (
      <ShieldCheckIcon aria-hidden="true" />
    ),
  },
]

export function Pattern() {
  const [active, setActive] = useState("market")

  return (
    <ButtonGroup>
      {orderTypes.map((type) => (
        <Tooltip key={type.id}>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className={cn(active === type.id ? "bg-muted" : "")}
                onClick={() => setActive(type.id)}
              >
                {type.icon}
                {type.label}
              </Button>
            }
          />
          <TooltipContent className="max-w-52 text-center">
            {type.tooltip}
          </TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  )
}
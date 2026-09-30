"use client"

import { useState } from "react"
import { Badge } from "@/components/reui/badge"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ZapIcon, BrainIcon, FlaskConicalIcon } from "lucide-react"

const models = [
  {
    id: "gpt4o",
    label: "GPT-4o",
    badge: "Fast",
    badgeVariant: "success-light" as const,
    tooltip: "128k context, fastest response",
    icon: (
      <ZapIcon aria-hidden="true" />
    ),
  },
  {
    id: "claude",
    label: "Claude",
    badge: "Pro",
    badgeVariant: "info-light" as const,
    tooltip: "200k context, best for analysis",
    icon: (
      <BrainIcon aria-hidden="true" />
    ),
  },
  {
    id: "gemini",
    label: "Gemini",
    badge: "Preview",
    badgeVariant: "warning-light" as const,
    tooltip: "1M context, experimental",
    icon: (
      <FlaskConicalIcon aria-hidden="true" />
    ),
  },
]

export function Pattern() {
  const [active, setActive] = useState("claude")

  return (
    <ButtonGroup>
      {models.map((model) => (
        <Tooltip key={model.id}>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className={cn(active === model.id ? "bg-muted" : "")}
                onClick={() => setActive(model.id)}
              >
                {model.icon}
                {model.label}
                <Badge variant={model.badgeVariant} size="xs">
                  {model.badge}
                </Badge>
              </Button>
            }
          />
          <TooltipContent>{model.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  )
}
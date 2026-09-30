"use client"

import { useState } from "react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Code2Icon, TestTube2Icon, GlobeIcon } from "lucide-react"

const environments = [
  {
    id: "development",
    label: "Dev",
    tooltip: "Local development environment",
    icon: (
      <Code2Icon aria-hidden="true" />
    ),
  },
  {
    id: "staging",
    label: "Staging",
    tooltip: "Pre-production mirror",
    icon: (
      <TestTube2Icon aria-hidden="true" />
    ),
  },
  {
    id: "production",
    label: "Production",
    tooltip: "Live environment — affects real users",
    icon: (
      <GlobeIcon aria-hidden="true" />
    ),
  },
]

export function Pattern() {
  const [active, setActive] = useState("development")

  return (
    <ButtonGroup>
      {environments.map((env) => (
        <Tooltip key={env.id}>
          <TooltipTrigger
            render={
              <Button
                variant="outline"
                className={cn(active === env.id ? "bg-muted" : "")}
                onClick={() => setActive(env.id)}
              >
                {env.icon}
                {env.label}
              </Button>
            }
          />
          <TooltipContent>{env.tooltip}</TooltipContent>
        </Tooltip>
      ))}
      {active === "production" ? (
        <ButtonGroupText className="bg-transparent">
          <div className="bg-success size-1.5 rounded-full" />
          <span>Live</span>
        </ButtonGroupText>
      ) : null}
    </ButtonGroup>
  )
}
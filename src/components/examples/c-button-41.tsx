"use client"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { Button } from "@/components/ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"

export function Pattern() {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1500 })

  return (
    <Button
      variant="outline"
      aria-label={isCopied ? "Copied" : "Copy"}
      onClick={() => copyToClipboard("https://reui.io")}
    >
      {isCopied ? (
        <CheckIcon aria-hidden="true" />
      ) : (
        <CopyIcon aria-hidden="true" />
      )}
      <span>{isCopied ? "Copied" : "Copy"}</span>
    </Button>
  )
}
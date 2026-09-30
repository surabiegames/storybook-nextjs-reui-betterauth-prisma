import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button variant="secondary">
      <GithubIcon aria-hidden="true" />
      Github
    </Button>
  )
}
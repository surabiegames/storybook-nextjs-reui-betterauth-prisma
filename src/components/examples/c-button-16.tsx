import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons/github-icon"

export function Pattern() {
  return (
    <Button variant="secondary">
      <GithubIcon aria-hidden="true" />
      Github
    </Button>
  )
}
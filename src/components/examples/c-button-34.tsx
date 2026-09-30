import { Button } from "@/components/ui/button"
import { MailIcon } from "lucide-react"

export function Pattern() {
  return (
    <Button>
      <MailIcon aria-hidden="true" />
      Login with Email
    </Button>
  )
}
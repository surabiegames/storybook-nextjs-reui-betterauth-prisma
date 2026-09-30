import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { MailIcon, PhoneIcon, BellIcon, MessageSquareIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup
        multiple
        defaultValue={["email", "push"]}
        variant="outline"
        spacing={1}
      >
        <ToggleGroupItem value="email" aria-label="Email notifications">
          <MailIcon
          />
          Email
        </ToggleGroupItem>
        <ToggleGroupItem value="sms" aria-label="SMS notifications">
          <PhoneIcon
          />
          SMS
        </ToggleGroupItem>
        <ToggleGroupItem value="push" aria-label="Push notifications">
          <BellIcon
          />
          Push
        </ToggleGroupItem>
        <ToggleGroupItem value="slack" aria-label="Slack notifications">
          <MessageSquareIcon
          />
          Slack
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
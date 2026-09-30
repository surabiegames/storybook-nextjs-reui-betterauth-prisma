import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { Separator } from "@/components/ui/separator"
import { LaptopIcon, MailIcon, SmartphoneIcon } from "lucide-react"

export function Pattern() {
  return (
    <Card className="w-full max-w-xs p-0">
      <FieldGroup className="gap-0">
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <LaptopIcon aria-hidden="true" className="size-4 opacity-60" />
              Push notifications
            </FieldTitle>
            <Checkbox defaultChecked />
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <MailIcon aria-hidden="true" className="size-4 opacity-60" />
              Email notifications
            </FieldTitle>
            <Checkbox />
          </FieldLabel>
        </Field>
        <Separator />
        <Field>
          <FieldLabel className="justify-between px-4 py-3">
            <FieldTitle className="flex items-center gap-2">
              <SmartphoneIcon aria-hidden="true" className="size-4 opacity-60" />
              SMS notifications
            </FieldTitle>
            <Checkbox />
          </FieldLabel>
        </Field>
      </FieldGroup>
    </Card>
  )
}
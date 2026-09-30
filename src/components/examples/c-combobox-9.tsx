import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"
import { Field } from "@/components/ui/field"
import { InputGroupAddon } from "@/components/ui/input-group"
import { GlobeIcon } from "lucide-react"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function Pattern() {
  return (
    <Field className="max-w-xs">
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework">
          <InputGroupAddon>
            <GlobeIcon className="text-muted-foreground size-4" />
          </InputGroupAddon>
        </ComboboxInput>
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </Field>
  )
}
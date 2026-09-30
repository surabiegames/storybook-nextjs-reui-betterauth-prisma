import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { WifiIcon, BluetoothIcon, PlaneIcon, MapPinIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <ToggleGroup
        multiple
        orientation="vertical"
        spacing={1}
        defaultValue={["wifi", "bluetooth"]}
      >
        <ToggleGroupItem value="wifi" aria-label="Wi-Fi" className="w-full">
          <WifiIcon
          />
          Wi-Fi
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bluetooth"
          aria-label="Bluetooth"
          className="w-full"
        >
          <BluetoothIcon
          />
          Bluetooth
        </ToggleGroupItem>
        <ToggleGroupItem
          value="airplane"
          aria-label="Airplane Mode"
          className="w-full"
        >
          <PlaneIcon
          />
          Airplane Mode
        </ToggleGroupItem>
        <ToggleGroupItem
          value="location"
          aria-label="Location"
          className="w-full"
        >
          <MapPinIcon
          />
          Location
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
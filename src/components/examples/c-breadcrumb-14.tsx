import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { HouseIcon, ChevronRightIcon, LayoutGridIcon, SettingsIcon } from "lucide-react"

export function Pattern() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="sm:gap-1">
        <BreadcrumbItem>
          <BreadcrumbLink
            render={<Button variant="ghost" size="sm" />}
            href="#"
          >
            <HouseIcon
            />
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRightIcon
          />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbLink
            href="#"
            render={<Button variant="ghost" size="sm" />}
          >
            <LayoutGridIcon
            />
            Workspace
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRightIcon
          />
        </BreadcrumbSeparator>

        <BreadcrumbItem>
          <BreadcrumbPage>
            <Button variant="secondary" size="sm">
              <SettingsIcon
              />
              Settings
            </Button>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
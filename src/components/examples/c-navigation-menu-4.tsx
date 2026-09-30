import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { UserIcon, BuildingIcon, CircleDollarSignIcon, LayoutGridIcon, SparklesIcon, RadioIcon } from "lucide-react"

const industries = [
  {
    title: "Individuals",
    description: "Keep your finances organized.",
    href: "#",
    icon: (
      <UserIcon
      />
    ),
  },
  {
    title: "LLCs",
    description: "Benefit from tax write-offs.",
    href: "#",
    icon: (
      <BuildingIcon
      />
    ),
  },
  {
    title: "Freelancers",
    description: "For independent workers.",
    href: "#",
    icon: (
      <CircleDollarSignIcon
      />
    ),
  },
  {
    title: "Investors",
    description: "Make and grow your money.",
    href: "#",
    icon: (
      <LayoutGridIcon
      />
    ),
  },
  {
    title: "Small businesses",
    description: "We take care of your taxes.",
    href: "#",
    icon: (
      <SparklesIcon
      />
    ),
  },
  {
    title: "Crypto",
    description: "For tech enthusiasts.",
    href: "#",
    icon: (
      <CircleDollarSignIcon
      />
    ),
  },
  {
    title: "Big companies",
    description: "Run your finances easily.",
    href: "#",
    icon: (
      <BuildingIcon
      />
    ),
  },
  {
    title: "Investments",
    description: "Launch your ideas worldwide.",
    href: "#",
    icon: (
      <RadioIcon
      />
    ),
  },
]

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[500px]">
                <ul className="grid grid-cols-2 gap-1">
                  {industries.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink
                        render={<a href="#" />}
                        className="flex items-start gap-2 p-3"
                      >
                        {item.icon}
                        <div className="flex flex-col gap-0.5">
                          <div className="text-sm leading-none font-medium">
                            {item.title}
                          </div>
                          <p className="text-muted-foreground text-xs leading-snug">
                            {item.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 px-1 pb-1">
                  <Button className="w-full" render={<a href="#" />}>
                    Learn more
                  </Button>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
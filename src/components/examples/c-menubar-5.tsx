import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { BoldIcon, ItalicIcon, ImageIcon, LinkIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Format</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <BoldIcon
              />
              Bold <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ItalicIcon
              />
              Italic <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
            <MenubarCheckboxItem>Code</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Insert</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <ImageIcon
                />
                Media
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Image</MenubarItem>
                <MenubarItem>Video</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              <LinkIcon
              />
              Link <MenubarShortcut>⌘K</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
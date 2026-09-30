import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { FileIcon, FolderIcon, SaveIcon, UserIcon, LogOutIcon } from "lucide-react"

export function Pattern() {
  return (
    <div className="flex items-center justify-center">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileIcon
              />
              New File <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <FolderIcon
              />
              Open Folder
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <SaveIcon
              />
              Save <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <UserIcon
                />
                Profile
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="destructive">
                <LogOutIcon
                />
                Sign out
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
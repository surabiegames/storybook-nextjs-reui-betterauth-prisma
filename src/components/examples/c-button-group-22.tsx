import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { FileIcon, FolderIcon, TrashIcon } from "lucide-react"

export function Pattern() {
  return (
    <ButtonGroup>
      <Button variant="outline" aria-label="Files">
        <FileIcon aria-hidden="true" />
        Files
      </Button>
      <Button variant="outline" disabled aria-label="Folder">
        <FolderIcon aria-hidden="true" />
        Folder
      </Button>
      <Button variant="outline" aria-label="Trash">
        <TrashIcon aria-hidden="true" />
        Trash
      </Button>
    </ButtonGroup>
  )
}
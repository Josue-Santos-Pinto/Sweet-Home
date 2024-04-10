import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MenuIcon, UserIcon } from "lucide-react"
import { UserDialog } from "./user-dialog"

export function UserPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="flex justify-around rounded-full gap-2" variant="outline"><MenuIcon className="size-4" /><UserIcon /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-62 rounded-xl flex flex-col">
        <UserDialog title='Cadastrar-se' />
        <UserDialog title='Entrar' />
      </PopoverContent>
    </Popover>
  )
}

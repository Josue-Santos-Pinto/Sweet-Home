import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/search/date-picker"
import { SearchCombobox } from "@/components/search/search-combobox"
import { SearchIcon } from "lucide-react"
import { UserPopover } from "./user-popover"

export const UserCard = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-4 px-10">
            <Button className="rounded-full py-2 px-4" variant='ghost'>Anunciar Excursão</Button>
            <UserPopover />
            
        </div>
    )
}
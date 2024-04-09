import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/search/date-picker"
import { SearchCombobox } from "@/components/search/search-combobox"
import { SearchIcon } from "lucide-react"

export const SearchCard = () => {
    return (
        <div className="flex flex-row w-3/4 max-w-screen-lg items-center gap-4 justify-center p-10">
            <SearchCombobox />
            <DatePicker />
            <Button size='icon' className="size-10"><SearchIcon className="size-6"/></Button>
        </div>
    )
}
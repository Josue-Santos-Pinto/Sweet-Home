import { PopoverBtn } from "../popover"
import { Button } from "../ui/button"
import { DatePickerWithRange } from "./date-ranger"

export const SearchCard = () => {
    return (
        <div className="flex flex-row w-3/4 h-16 items-center justify-center rounded-full border-2 px-10 border-black overflow-hidden">
            <PopoverBtn title='Onde' />
            <DatePickerWithRange />
            <PopoverBtn title='Quem' />
        </div>
    )
}
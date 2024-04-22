import { Button } from "@/components/ui/button"
import { UserPopover } from "./user-popover"

export const UserCard = () => {
    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <Button className="rounded-full py-2 px-4" variant='ghost'>Anunciar Excursão</Button>
            <UserPopover />
            
        </div>
    )
}
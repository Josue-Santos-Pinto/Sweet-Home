import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { SearchCard } from "./search/search-card"
import { UserCard } from "./user/user-card"

export const Header = () => {
    return (
        <header>
            <div className="flex flex-row justify-between items-center mx-auto max-w-screen-xl">
                
                    <Logo />
                
                <div className="flex flex-1 items-center justify-center">
                    <SearchCard />
                </div>
                
                    <UserCard />
                
            </div>
            <Separator className="my-4"/>
        </header>
    )
}


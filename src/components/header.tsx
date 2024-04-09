import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { SearchCard } from "./search/search-card"
import { UserCard } from "./user/user-card"

export const Header = () => {
    return (
        <header>
            <div className="flex flex-row justify-around items-center px-10 mx-auto max-w-screen-2xl">
                <div className="flex justify-center items-center mx-10">
                    <Logo />
                </div>
                <div className="flex flex-1 items-center justify-center px-10">
                    <SearchCard />
                </div>
                <div>
                    <UserCard />
                </div>
            </div>
            <Separator className="my-4"/>
        </header>
    )
}


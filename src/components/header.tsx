import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { SearchCard } from "./search/search-card"

export const Header = () => {
    return (
        <header>
            <div className="flex flex-row justify-between items-center px-10 py-12 mx-auto max-w-7xl">
                <Logo />
                <div className="flex flex-1 items-center justify-center px-14">
                    <SearchCard />
                </div>
                <div>...</div>
            </div>
            <Separator className="my-4"/>
        </header>
    )
}


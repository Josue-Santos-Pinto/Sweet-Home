import { StarIcon } from "lucide-react"
import { TourCarousel } from "./tour-carousel"

const TourItem = () => {
    return (
        <div className="flex flex-col w-72 mx-6 rounded-xl">
            <TourCarousel />
            <div className="w-full my-2 flex font-semibold text-base justify-between">
                <div>Rio de Janeiro, Brasil</div>
                <div className="flex flex-row gap-2">
                    <StarIcon />
                    <div>5,0</div>
                </div>
                </div>
                <div className="flex flex-col text-sm">
                            <div>Sala Temaica e mais</div>
                            <div>28 de abr. - 3 de mai.</div>
                        
                            <div className="my-2">
                                <span className="font-semibold text-base">R$2.447</span> noite
                            </div>
                </div>
            
        </div>
    )
}

export default TourItem
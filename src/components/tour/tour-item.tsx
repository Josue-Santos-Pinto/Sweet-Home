import { StarIcon } from "lucide-react"
import { TourCarousel } from "./tour-carousel"
import { Tour } from "@/types/tour"
import { formatDate } from "@/services/formatDate"

type Props = {
    item: Tour
}

const TourItem = ({item}: Props) => {
    return (
        <div className="flex flex-col w-72 mx-6 rounded-xl">
            <TourCarousel images={item.images} />
            <div className="w-full my-2 flex font-semibold text-base justify-between">
                <div>{item.address.state}, {item.address.country}</div>
                <div className="flex flex-row gap-2">
                    <StarIcon />
                    <div>5,0</div>
                </div>
                </div>
                <div className="flex flex-col text-sm">
                            <div>Sala Temaica e mais</div>
                            <div>{formatDate(item.date.start)}. - {formatDate(item.date.finish)}.</div>
                        
                            <div className="my-2">
                                <span className="font-semibold text-base">R${item.price}</span> noite
                            </div>
                </div>
            
        </div>
    )
}

export default TourItem
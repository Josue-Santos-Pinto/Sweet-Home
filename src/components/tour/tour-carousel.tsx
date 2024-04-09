import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { apiTeste } from "@/data/apiTeste"



export function TourCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  console.log(current)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full overflow-hidden rounded-xl">
      <Carousel setApi={setApi} className="max-w-xs bg-white cursor-pointer"  
        opts={{
            align: "start",
            loop: true,
         }}>
        <CarouselContent>
        
        {apiTeste.images.map((i, index)=>(
            <CarouselItem key={index}>
                <img key={i.id} src={i.img} className="object-cover" />    
            </CarouselItem>
          ))} 
        </CarouselContent>
      </Carousel>
     
            
      
    </div>
  )
}

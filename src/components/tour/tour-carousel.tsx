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
    <div className="w-full h-72 overflow-hidden rounded-xl">
      <Carousel setApi={setApi} className="group max-w-xs w-full relative bg-white cursor-pointer"  
        opts={{
            align: "center",
         }}>
        <CarouselContent>
        {apiTeste.images.map((i, index)=>(
            <CarouselItem key={index} >
                <Card>
                    <CardContent className="w-full h-72">
                        <img key={i.id} src={i.img} className="w-full h-full object-cover " />     
                    </CardContent>
                </Card>
            </CarouselItem>
          ))} 

        </CarouselContent>

        <div className="absolute left-16 top-1/2 hidden group-hover:block">
          <CarouselPrevious />
        </div>
        <div className="absolute right-16 top-1/2 hidden group-hover:block">
          <CarouselNext />
        </div>
          
        
        <div className="w-full flex flex-row justify-center items-center gap-2 absolute bottom-3 z-10 ">
          {apiTeste.images.map((i,index)=>(
            <div key={i.id} className={`rounded-full ${i.id == current ? 'w-2 h-2 bg-white' : 'w-1 h-1 bg-slate-400'} `} />
          ))}
        </div>
        
      </Carousel>
     
            
      
    </div>
  )
}

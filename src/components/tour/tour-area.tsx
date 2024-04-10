"use client"

import TourItem from "@/components/tour/tour-item"
import { getAllProducts } from "@/services/tours"
import { TourEmpty } from "@/components/tour/tour-empty"
import { Tour } from "@/types/tour"
import { Suspense } from "react"

const TourArea = async () => {

    const tours: Tour[] = await getAllProducts()

    return (
        <div className={`max-w-screen-2xl mx-auto ${tours.length == 0 ? 'flex justify-center items-center' : 'grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'}`}>
            

            {tours.length > 0 && tours.map((i,index)=>(
                <TourItem key={index} item={i} />
            ))}
            
            {tours.length == 0 && <TourEmpty />}
            
        </div>
    )
}

export default TourArea
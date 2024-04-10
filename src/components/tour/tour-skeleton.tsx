import { Skeleton } from "@/components/ui/skeleton"

export function TourSkeleton() {
  return (
    
      <div className="max-w-screen-2xl mx-auto grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 ">
        {Array.from({length: 8}).map((item, index)=>(
            <div key={index} className="w-72 mx-6">
                    <Skeleton className="w-72 h-72 max-w-xs mx-auto rounded-xl"/>
                    <div className="flex flex-row justify-between items-center">
                        <Skeleton className="w-44 h-6 my-4 rounded-full" />
                        <Skeleton className="w-14 h-6 my-4 rounded-full"/>
                    </div>
                    <Skeleton className="w-44 h-3"/>
                    <Skeleton className="w-44 h-3 my-2" />
                    <Skeleton className="w-36 h-6"/>
            </div>
        ))}
      </div>
    
  )
}

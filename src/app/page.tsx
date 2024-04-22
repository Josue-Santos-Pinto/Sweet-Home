import { Footer } from "@/components/footer";
import TourArea from "@/components/tour/tour-area";
import { Suspense } from "react";
import { TourSkeleton } from "@/components/tour/tour-skeleton";


const Page = () => {
  return (
    <div className="w-full">
        <div className="mx-3">
          <Suspense fallback={<TourSkeleton />}>
            <TourArea />
          </Suspense>
        </div>
      <Footer />
    </div>
    
  );
}

export default Page

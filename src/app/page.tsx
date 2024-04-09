import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import TourArea from "@/components/tour/tour-area";


const Page = () => {
  return (
    <div>
      <Header />
        <div>
          <TourArea />
        </div>
      <Footer />
    </div>
    
  );
}

export default Page

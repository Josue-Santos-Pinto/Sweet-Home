import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { apiTeste } from "@/data/apiTeste";
import { HeartIcon } from "lucide-react";

type Props = {
    params: {
        postId: string
    }
}



const Page = ({params}: Props) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="w-full my-4 flex justify-between">
                <h1 className="text-2xl font-semibold">{apiTeste[0].title}</h1>      
                    <Button className="p-4 underline flex flex-row justify-center items-center" variant='ghost'>
                    <HeartIcon className="size-4 mr-2 text-sm" />
                        Salvar
                    </Button>  
            </div>
            <div className="flex w-full h-[600px]">
                <section className="grid grid-cols-4 gap-2">
                    <div className="col-span-2 row-span-2 rounded-l-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src={apiTeste[0].images[0].img} />
                    </div>

                    <div>
                        <img className="w-full h-full object-cover" src={apiTeste[0].images[0].img} />
                    </div>
                    <div className="rounded-tr-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src={apiTeste[0].images[0].img} />
                    </div>
                    <div>
                        <img className="w-full h-full object-cover" src={apiTeste[0].images[0].img} />
                    </div>
                    <div className="rounded-br-xl overflow-hidden">
                        <img className="w-full h-full object-cover" src={apiTeste[0].images[0].img} />
                    </div>

                </section>
            </div>

            <div className="my-4">
                <h1 className="font-bold text-xl">{apiTeste[0].address.city}, {apiTeste[0].address.state}, {apiTeste[0].address.country}</h1>
            </div>


            <div className="w-1/2 text-wrap">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga possimus ipsam asperiores neque. 
                    Animi, odio enim, voluptatibus, hic voluptas eligendi culpa fugiat vero id eius architecto molestias alias? Earum, sit.
                </p>
            </div>

            <div className="w-1/2 mb-10">
                <Separator className="my-4"/>
                <h1 className="text-xl font-bold">Anfitriã(o): {apiTeste[0].host}</h1>
            </div>

        </div>
    );
}

export default Page
import Heading from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
    return (
        <div className="flex flex-col min-h-full items-center justify-center dark:bg-[#1F1F1F]">
            <div className=" flex-1 flex flex-col items-center justify-center md:justify-start text-center gap-y-8 px-6 pb-10 ">
                <Heading />
                <Heroes />
            </div>
            <Footer />
        </div>
    )
}

export default MarketingPage ;

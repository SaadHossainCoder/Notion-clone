
import Image from "next/image";

export const Heroes = () => {

    return (
        <div className="flex flex-col items-center dark:bg-[#1F1F1F] justify-center max-w-5xl text-center ">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
                    <Image
                        src="/documents.webp"
                        alt="documents.webp"
                        fill
                        className="object-contain dark:hidden"
                    />  
                    <Image
                        src="/documents-dark.webp"
                        alt="documents-dark.webp"
                        fill
                        className="object-contain hidden dark:block"
                    />  
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image
                        src="/reading.webp"
                        alt="reading.webp"
                        fill
                        className="object-contain dark:hidden"
                    />  
                    <Image
                        src="/reading-dark.webp"
                        alt="reading-dark.webp"
                        fill
                        className="object-contain hidden dark:block"
                    />  
                </div>
                
            </div>
        </div>
    );
};
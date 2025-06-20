import Link from "next/link";
import Image from "next/image";

interface OtherServicesCardProps {
    slug: string;
    imageUrl: string;
    name: string;
}

export default function OtherServicesCard({ slug, imageUrl, name }: OtherServicesCardProps) {
    return (
        <Link href={slug} target="_blank" className="w-full max-w-[1250px] h-[500px] mx-auto">
            <div className='w-full h-full relative text-white overflow-hidden'>
                <Image 
                    src={imageUrl} 
                    alt={name} 
                    width={1440} 
                    height={960} 
                    className="w-full h-full absolute top-0 left-0 right-0 object-cover" 
                /> 
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
                <div className='h-full relative z-20 flex flex-col justify-around items-center text-center md:hover:bg-[rgba(255,255,255,0.1)]'>
                    <h2 className="text-3xl md:text-5xl font-light">{name}</h2>
                    <p className="text-[10px] md:text-sm uppercase tracking-[2px]">Click aquí / Click here</p>
                </div>
            </div>
        </Link>
    );
}

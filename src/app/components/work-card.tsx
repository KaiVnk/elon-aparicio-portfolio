import Link from 'next/link';
import Image from 'next/image'

interface WorkProps {
    slug: string;
    imageUrl: string;
    name: string;
}

export default function WorkCard({ slug, imageUrl, name }: WorkProps) {
    return (
        <Link href={slug}>
            <div className='w-auto h-[300px] relative bg-gray-100 text-white overflow-hidden md:h-[600px]'>
                <Image 
                    src={imageUrl} 
                    alt={name} 
                    className="w-full h-full absolute top-0 left-0 right-0 object-cover" 
                    width={1440} 
                    height={960} 
                /> 
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
                <div className='h-full relative z-20 flex flex-col justify-around items-center text-center md:hover:bg-[rgba(255,255,255,0.1)]'>
                    <h2 className="text-xl md:text-2xl">{name}</h2>
                    <p className="text-[10px] md:text-xs uppercase tracking-[2px]">Click aquí / Click here</p>
                </div>
            </div>
        </Link>
    );
}

import Link from 'next/link'
import Image from 'next/image'

interface LinkCardProps {
    slug: string, 
    urlImage: string,
    name: string,
}

export default function LinkCard({ slug, urlImage, name }: LinkCardProps) {
    return (
          <Link href={slug}>
            <div className='w-full h-[225px] relative bg-gray-100 text-white overflow-hidden md:h-[250px]'>
                <Image 
                  src={`/${urlImage}`} 
                  alt={name} 
                  className="w-full h-full absolute top-0 left-0 right-0 object-cover" 
                  width={500}
                  height={500}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
                <div className='h-full relative z-20 flex flex-col justify-evenly items-center text-center md:hover:bg-[rgba(255,255,255,0.1)]'>
                  <h2 className="text-2xl font-light">{name}</h2>
                  <p className="text-xs uppercase tracking-[2px]">Click aquí / Click here</p>
                </div>
            </div>
          </Link>
    );
}

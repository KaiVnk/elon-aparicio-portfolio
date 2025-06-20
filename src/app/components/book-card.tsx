import Link from 'next/link'
import Image from 'next/image'

interface BookCardProps {
    slug: string,
    urlImage: string,
    bookName: string,
    direction: string
}

export default function BookCard({ slug, urlImage, bookName, direction }: BookCardProps) {
    return(
        <div className={`flex flex-col text-center gap-[10px] ${direction} md:h-[400px]`}>
            <Link href={slug} target='_blank' className='relative w-full h-[400px] bg-[#f8f8f8]'>
                <div className='absolute top-0 left-0 right-0 w-full h-full bg-black opacity-30 z-10'></div>
                <div className='absolute top-0 left-0 right-0 w-full h-full z-20 md:hover:bg-[rgba(255,255,255,0.1)]'></div>
                <Image 
                    src={urlImage} 
                    alt={bookName} 
                    width={500}
                    height={500}
                    className='w-full h-full object-cover object-[50%_25%] z-20'
                />
            </Link>
            <div className='w-full h-full md:flex md:justify-center md:items-center'>
                <h2 className='text-2xl md:text-4xl font-light'>{bookName}</h2>
            </div>
        </div>
    );
}

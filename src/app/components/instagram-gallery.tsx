import Link from 'next/link';
import Image from 'next/image'

export default function InstagramGallery() {
    return (
      <section className="section md:px-4 lg:px-8">
        <div className="text-sm text-center uppercase tracking-[3px] flex flex-col justify-start items-center my-[25px] gap-[5px] md:flex-row md:gap-[100px]">
          <p>Sigueme en instagram</p>
          <p>@elon.aparicio</p>
        </div>
        <div className="grid grid-cols-2 grid-rows-3 justify-center items-center gap-[15px] overflow-hidden md:h-[175px] lg:h-[250px] md:flex">
          <Link href="https://www.instagram.com/elon.aparicio" target="_blank" className='h-[250px] w-full md:h-full md:w-auto bg-[#f8f8f8]'>
            <Image 
                src="/n01.jpg" 
                alt="n01" 
                className='object-cover w-full h-full' 
                width={1440}
                height={960}
            />
          </Link>
          <Link href="https://www.instagram.com/elon.aparicio" target="_blank" className='h-[250px] w-full md:h-full md:w-auto bg-[#f8f8f8]'>
            <Image 
                src="/n02.jpg" 
                alt="n02" 
                className='object-cover w-full h-full' 
                width={2612}
                height={4640}
            />
          </Link>
          <Link href="https://www.instagram.com/elon.aparicio" target="_blank" className='h-[250px] w-full md:h-full md:w-auto bg-[#f8f8f8]'>
            <Image 
                src="/n03.jpg" 
                alt="n03" 
                className='object-cover w-full h-full' 
                width={720}
                height={1280}
            />
          </Link>
          <Link href="https://www.instagram.com/elon.aparicio" target="_blank" className='h-[250px] w-full md:h-full md:w-auto bg-[#f8f8f8]'>
            <Image 
                src="/n04.jpg" 
                alt="n04" 
                className='object-cover w-full h-full' 
                width={1440}
                height={1081}
            />
          </Link>
          <Link href="https://www.instagram.com/elon.aparicio" target="_blank" className='h-[250px] w-full md:h-full md:w-auto bg-[#f8f8f8]'>
            <Image 
                src="/n05.jpg" 
                alt="n05" 
                className='object-cover w-full h-full' 
                width={1080}
                height={1350}
            />
          </Link>
          <Link href="https://www.instagram.com/elon.aparicio" target="_blank" className='h-[250px] w-full md:h-full md:w-auto bg-[#f8f8f8]'>
            <Image 
                src="/n06.jpg" 
                alt="n06" 
                className='object-cover w-full h-full' 
                width={3516}
                height={6247}
            />
          </Link>
        </div>
      </section>
    );
}

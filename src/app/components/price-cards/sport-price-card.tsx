import Image from 'next/image'

interface SportPriceCardProps {
    urlImage: string;
    name: string;
    description: string;
    cityPrice: number;
    edoPrice: number;
}

export default function SportPriceCard({ urlImage, name, description, cityPrice, edoPrice }: SportPriceCardProps) {
    return (
        <div className={`w-full flex flex-col justify-start items-center gap-4 md:gap-8`}>
            <div className='w-full grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-1'>
                <div className='w-full h-[325px] bg-[#f8f8f8]'>
                    <Image 
                        src={urlImage} 
                        alt={name} 
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='md:hidden py-[25px]'>
                    <h2 className='text-4xl mb-[25px] text-start'>{name}</h2>
                    <div className='flex flex-col'>
                        <span className='font-light'><b>${cityPrice} CDMX</b></span>
                        <span className='font-light'><b>${edoPrice} EdoMex</b></span>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <h2 className='hidden md:block text-4xl mb-[10px] text-center'>{name}</h2>
                <div className='w-full'>
                    <p className='uppercase font-sm tracking-[3px] mb-[25px]'>(Solo video)</p>
                    <ul className='list-disc list-inside pl-[50px] text-start'>
                        {description.split(',').map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                    <div className="flex flex-col mt-[50px]">
                        <span className='hidden md:inline-block font-extralight'><b>${cityPrice} CDMX</b></span>
                        <span className='hidden md:inline-block font-extralight'><b>${edoPrice} EdoMex</b></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

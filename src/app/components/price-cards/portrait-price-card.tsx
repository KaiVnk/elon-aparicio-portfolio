import Image from 'next/image'

interface PortraitPriceCardProps {
    urlImage: string;
    name: string;
    price: number;
    description: string;
    direction: string;
}

export default function PortraitPriceCard({ urlImage, name, price, description, direction }: PortraitPriceCardProps) {
    return (
        <div className={`w-full max-w-[1250px] flex flex-col justify-start items-center ${direction} gap-4 mx-auto md:gap-8 lg:gap-12`}>
            <div className='grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-1 md:w-[40%]'>
                <div className='w-full h-[300px] md:h-[550px] bg-gray-500'>
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
                    <span className='text-xl p-[2px] border-b-[1px] font-light'>${price}</span>
                </div>
            </div>
            <div className='w-full md:w-[60%]'>
                <h2 className='hidden md:block text-5xl mb-[25px] md:text-start'>{name}</h2>
                <div className='w-full'>
                    <p className='uppercase tracking-[3px] mb-[15px]'>¿Qué incluye?</p>
                    <ul className='list-disc list-inside pl-[50px] text-start'>
                        {description.split(',').map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                    <span className='hidden md:inline-block text-xl p-[2px] border-b-[1px] mt-[25px] font-extralight'><b>${price}</b></span>
                </div>
            </div>
        </div>        
    );
}
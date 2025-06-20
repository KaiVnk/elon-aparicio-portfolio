import Image from 'next/image'

interface BookPriceCardProps {
    urlImage: string;
    name: string;
    description: string;
    price: number;
    direction: string;
}

export default function BookPriceCard({ urlImage, name, description, price, direction }: BookPriceCardProps) {
    return (
        <div className={`flex flex-col justify-start items-center gap-4 md:gap-8`}>
            <div className={`w-full flex ${direction} gap-4 md:grid-cols-1`}>
                <div className='w-full max-h-[275px] bg-[#f8f8f8]'>
                    <Image 
                        src={urlImage} 
                        alt={name} 
                        width={500}
                        height={500}
                        className='w-full h-full object-cover object-[50%_25%]'
                    />
                </div>
                <div className='w-full py-[25px] md:hidden'>
                    <h2 className='text-4xl mb-[25px]'>{name}</h2>
                    <span className='text-xl p-[2px] border-b-[1px] font-light'>${price}</span>
                </div>
            </div>
            <div className='w-full'>
                <h2 className='hidden md:block text-4xl mb-[25px] md:text-center'>{name}</h2>
                <div className='w-full'>
                    <ul className='list-disc list-inside pl-[50px] text-start'>
                        {description.split(',').map((item, index) => (
                            <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                    <span className='hidden md:inline-block p-[2px] border-b-[1px] mt-[25px] font-extralight'><b>${price}</b></span>
                </div>
            </div>
        </div>
    );
}

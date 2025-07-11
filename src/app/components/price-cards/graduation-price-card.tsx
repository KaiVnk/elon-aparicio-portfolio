interface GraduationPriceCardProps {
    name: string;
    description: string;
    price: number;
}

export default function GruaduationPriceCard({ name, description, price }: GraduationPriceCardProps) {
    return (
        // bg-[#f4f2ee]
        <div className={`w-full h-full flex flex-col justify-start items-center gap-4 md:gap-8 bg-white p-[15px]`}>
            <div className='w-full'>
                <h2 className='text-4xl mb-[15px] md:text-center'>{name}</h2>
                <div className='w-full'>
                    <p className='uppercase font-sm tracking-[3px] mb-[25px]'>¿Qué incluye?</p>
                    <ul className='list-disc list-inside pl-[25px] text-start'>
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

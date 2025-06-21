import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import InstagramGallery from "@/app/components/instagram-gallery";
import Image from "next/image";
import PortraitPriceCard from "@/app/components/price-cards/portrait-price-card";

export default function Portraits() {
    return (
        <>
            <Header />

            <section className="section" id='home'>
                <div className='section__headings-container'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Retratos</h1>
                    <h2 className="text-xl">Portraits</h2>
                </div>
            </section>

            <section className="section">
                <div className="max-w-[1250px] mx-auto grid grid-cols-2 grid-rows-2 justify-center items-start gap-[15px] overflow-hidden md:grid-cols-4 md:grid-rows-1">
                    <div className="flex flex-col gap-[15px]">
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n01.JPG" 
                                alt="n01" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n05.JPG" 
                                alt="n05" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n09.JPG" 
                                alt="n09" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n13.JPG" 
                                alt="n13" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n17.JPG" 
                                alt="n17" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n21.JPG" 
                                alt="n21" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n02.JPG" 
                                alt="n02" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n06.JPG" 
                                alt="n06" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n10.JPG" 
                                alt="n10" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n14.JPG" 
                                alt="n14" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n18.JPG" 
                                alt="n18" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n22.JPG" 
                                alt="n22" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n03.JPG" 
                                alt="n03" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n07.JPG" 
                                alt="n07" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n11.JPG" 
                                alt="n11" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n15.JPG" 
                                alt="n15" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n19.jpg" 
                                alt="n19" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n23.JPG" 
                                alt="n23" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n04.JPG" 
                                alt="n04" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n08.JPG" 
                                alt="n08" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n12.JPG" 
                                alt="n12" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n16.JPG" 
                                alt="n16" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n20.JPG" 
                                alt="n20" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-auto w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/portraits/n24.JPG" 
                                alt="n24" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section text-center bg-white">
                <div className="max-w-[1100px] mx-auto flex flex-col justify-center items-center gap-[35px]">
                    <PortraitPriceCard
                        urlImage="/investment/portrait-standard.JPG"
                        name="Retrato Paquete Standard"
                        description="1 hora de sesión, 15 fotos editadas, Una locación, Todas las fotos originales, Sin limite de outfits, Entrega de fotos editadas en 2 días"
                        price={1500}
                        direction="md:flex-row"
                    />
                    <PortraitPriceCard
                        urlImage="/investment/portrait-average.JPG"
                        name="Retrato Paquete Promedio"
                        description="Hora y media de sesión, 22 fotos editadas, Una locación o dos cercanas, Todas las fotos originales, Sin limite de outfits, Entrega de editadas en 2 días"
                        price={1700}
                        direction="md:flex-row-reverse"
                    />
                    <PortraitPriceCard
                        urlImage="/investment/portrait-deluxe.JPG"
                        name="Retrato Paquete Deluxe"
                        description="2 horas de sesión, 30 fotos editadas, Una locación o dos cercanas, Todas las fotos originales, Sin limite de outfits, Entrega de editadas en 2 días"
                        price={2000}
                        direction="md:flex-row"
                    />
                </div>
            </section>

            <InstagramGallery />

            <Footer />
        </>
    );
}

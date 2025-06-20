import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import InstagramGallery from "@/app/components/instagram-gallery";
import GruaduationPriceCard from "@/app/components/price-cards/graduation-price-card";
import Image from "next/image";

export default function Graduations() {
    return (
        <>
            <Header />

            <section className="section" id='home'>
                <div className='section__headings-container'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Graduaciones</h1>
                    <h2 className="text-xl">Graduations</h2>
                </div>
            </section>

            <section className="section">
                <div className="max-w-[1250px] mx-auto grid grid-cols-2 grid-rows-3 justify-center items-center gap-[15px] overflow-hidden md:grid-cols-4 md:grid-rows-2">
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/graduations/n01.JPG" 
                          alt="n01" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/graduations/n02.JPG" 
                          alt="n02" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/graduations/n03.JPG" 
                          alt="n03" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/graduations/n04.JPG" 
                          alt="n04" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='block md:hidden h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/graduations/n05.JPG" 
                            alt="n05" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className="hidden md:grid w-full h-full grid-cols-1 grid-rows-2 gap-[15px]">
                        <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/graduations/n05.JPG" 
                                alt="n05" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/graduations/n09.JPG" 
                                alt="n09" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/graduations/n06.JPG" 
                          alt="n06" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='block md:hidden h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/graduations/n07.JPG" 
                            alt="n07" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className="hidden md:grid w-full h-full grid-cols-1 grid-rows-2 gap-[15px]">
                        <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/graduations/n07.JPG" 
                                alt="n07" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                        <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                            <Image 
                                src="/graduations/n10.JPG" 
                                alt="n10" 
                                className='w-full h-full object-cover' 
                                width={1440}
                                height={960}
                            />
                        </div>
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/graduations/n08.JPG" 
                          alt="n08" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='block md:hidden h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/graduations/n09.JPG" 
                            alt="n09" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className='block md:hidden h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/graduations/n10.JPG" 
                            alt="n10" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                </div>
            </section>

            <section className="section text-center bg-white">
                <div className="max-w-[1250px] md:min-h-[400px] lg:h-[400px] mx-auto flex flex-col justify-center items-center gap-[35px] md:gap-[25px] md:flex-row md:justify-between md:items-start">
                    <GruaduationPriceCard
                        name="Graduación Standard"
                        description="1 hora de sesión, 15 fotos editadas, Una locación, Todas las fotos originales, Sin limite de outfits, Entrega de editadas en 2 días"
                        price={1500}
                    />
                    <GruaduationPriceCard
                        name="Graduación Promedio"
                        description="Hora y media de sesión, 22 fotos editadas, Una locación o dos cercanas, Todas las fotos originales, Sin limite de outfits, Entrega de editadas en 2 días"
                        price={1700}
                    />
                    <GruaduationPriceCard
                        name="Graduación Deluxe"
                        description="2 horas de sesión, 30 fotos editadas, Una locación o dos cercanas, Todas las fotos originales, Sin limite de outfits, Entrega de editadas en 2 días"
                        price={2200}
                    />
                </div>
            </section>

            <InstagramGallery />

            <Footer />
        </>
    );
}

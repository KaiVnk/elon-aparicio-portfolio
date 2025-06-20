import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import InstagramGallery from "@/app/components/instagram-gallery";
import Image from "next/image";
import SportPriceCard from "@/app/components/price-cards/sport-price-card";

export default function Sports() {
    return (
        <>
            <Header />

            <section className="section" id='home'>
                <div className='section__headings-container'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Deportes</h1>
                    <h2 className="text-xl">Sports</h2>
                </div>
            </section>

            <section className="section">
                <div className="max-w-[1250px] mx-auto grid grid-cols-2 grid-rows-1 justify-center items-start gap-[15px] overflow-hidden">
                    <div className="flex flex-col gap-[15px]">
                        {Array.from({ length: 24 }, (_, i) => i + 1)
                            .filter(num => num % 2 !== 0)
                            .map(num => (
                                <div key={num} className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                                    <Image
                                        src={`/sports/n${num.toString().padStart(2, '0')}.JPG`}
                                        alt={`n${num}`}
                                        className='w-full h-full object-cover'
                                        width={1440}
                                        height={960}
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        {Array.from({ length: 24 }, (_, i) => i + 1)
                            .filter(num => num % 2 === 0)
                            .map(num => (
                                <div key={num} className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                                    <Image
                                        src={`/sports/n${num.toString().padStart(2, '0')}.JPG`}
                                        alt={`n${num}`}
                                        className='w-full h-full object-cover'
                                        width={1440}
                                        height={960}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <section className="section text-center bg-white">
                <div className="max-w-[1250px] mx-auto flex flex-col justify-center items-center gap-[35px] md:gap-[25px] md:flex-row md:justify-center md:items-start">
                    <SportPriceCard
                        urlImage="/investment/sport-standard.JPG"
                        name="Deportes Standard"
                        description="sesión (preparación entrenamiento y/o partido), 1.5hr aprox, ⁠Grabación full hd (opcional 4k), ⁠1 hora de contenidos a cámara normal (desde la banca), ⁠2 reels editados para redes con duración entre 20-45seg"
                        cityPrice={1000}
                        edoPrice={1200}
                    />
                    <SportPriceCard
                        urlImage="/investment/sport-pro1.JPG"
                        name="Deportes Pro1"
                        description=" ⁠1 sesión (preparación entrenamiento y/o partido), 1.5hr aprox, ⁠Grabación full hd (opcional 4k), ⁠Hora completa de contenido tipo POV (cámara montada a cuerpo), ⁠45-60min de contenidos a cámara normal (desde la banca), ⁠3 reels editados para redes con duración entre 20-45seg "
                        cityPrice={1500}
                        edoPrice={1700}
                    />
                    <SportPriceCard
                        urlImage="/investment/sport-pro2.JPG"
                        name="Deportes Pro2"
                        description=" ⁠2 sesiones (preparación entrenamiento y/o partido), 3hr aprox, ⁠Grabación full hd (opcional 4k), ⁠2 horas completas de contenido tipo POV (cámara montada a cuerpo), ⁠20-40min de contenidos con dron, 45-60min de contenidos a cámara normal (desde la banca), ⁠50-100 fotografias sin edición, ⁠5-10 fotografías editadas, ⁠3 reels editados para redes con duración entre 20-45seg "
                        cityPrice={2000}
                        edoPrice={2400}
                    />
                </div>
            </section>

            <InstagramGallery />

            <Footer />
        </>
    );
}

import Header from "@/app/components/header";
import InstagramGallery from "@/app/components/instagram-gallery";
import Footer from "@/app/components/footer";
import PortraitPriceCard from "@/app/components/price-cards/portrait-price-card";
import BookPriceCard from "@/app/components/price-cards/book-price-card"
import SportPriceCard from "@/app/components/price-cards/sport-price-card";
import Form from "@/app/components/form";

export default function Investment() {
    return (
        <>
            <Header />

            <section className="section text-center" id="home">
                <div className='section__headings-container'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Inversión</h1>
                    <h2 className="text-xl">Pricing</h2>
                </div>
                <div className="section__content-container">
                    <p className='big-paragraph'>Ofrezco paquetes personalizados que se adaptan a tus necesidades y presupuesto. Cada sesión incluye asesoría previa, edición profesional y entrega oportuna de las imágenes. Contáctame para crear juntos una experiencia fotográfica inolvidable.</p>
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

            <section className="section text-center">
                <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-[35px] md:gap-[25px] md:flex-row md:justify-between md:items-start">
                    <BookPriceCard
                        urlImage="/investment/book-standard.JPG"
                        name="Book Standard"
                        description="2 horas y media de sesión, En locación proveída por el cliente (casa o departamento), 30 fotos editadas, Todas las fotos originales, Todos los outfits necesarios"
                        price={1500}
                        direction="flex-row-reverse"
                    />
                    <BookPriceCard
                        urlImage="/investment/book-average.JPG"
                        name="Book Promedio"
                        description="2 horas y media de sesión, En mi estudio personal con iluminación sencilla, 30 fotos editadas, Todas las fotos originales, Todos los outfits necesarios"
                        price={2000}
                        direction="flex-row-reverse"
                    />
                    <BookPriceCard
                        urlImage="/investment/book-deluxe.JPG"
                        name="Book Deluxe"
                        description="2 horas y media de sesión, Incluye estudio e iluminación profesional, 30 fotos editadas, Todas las fotos originales, Todos los outfits necesarios"
                        price={3000}
                        direction="flex-row-reverse"
                    />
                </div>
            </section>

            <section className="section text-center bg-white">
                <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-[35px] md:gap-[25px] md:flex-row md:justify-center md:items-start">
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

            <Form />

            <InstagramGallery />

            <Footer />
        </>
    );
}

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import InstagramGallery from "@/app/components/instagram-gallery";
import Image from "next/image";
import BookPriceCard from "@/app/components/price-cards/book-price-card";
import BookCard from "@/app/components/book-card"

export default function Books() {
    return (
        <>
            <Header />

            <section className="section" id='home'>
                <div className='section__headings-container'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Books</h1>
                    <h2 className="text-xl">Books</h2>
                </div>
            </section>

            <section className="section">
                <div className="max-w-[1250px] mx-auto grid grid-cols-2 grid-rows-8 justify-center items-center gap-[15px] overflow-hidden py-[50px] md:grid-cols-4 md:grid-rows-4">
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n01.JPG" 
                          alt="n01" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n02.JPG" 
                          alt="n02" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n03.JPG" 
                          alt="n03" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n04.JPG" 
                          alt="n04" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/books/n05.JPG" 
                            alt="n05" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n06.JPG" 
                          alt="n06" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/books/n07.JPG" 
                            alt="n07" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n08.JPG" 
                          alt="n08" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/books/n09.JPG" 
                            alt="n09" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                        <Image 
                            src="/books/n10.JPG" 
                            alt="n10" 
                            className='w-full h-full object-cover' 
                            width={1440}
                            height={960}
                        />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n11.JPG" 
                          alt="n11" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n12.JPG" 
                          alt="n12" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n13.JPG" 
                          alt="n13" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n14.JPG" 
                          alt="n14" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n15.JPG" 
                          alt="n15" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                    <div className='h-[250px] w-full md:h-auto md:w-full bg-[#f8f8f8]'>
                      <Image 
                          src="/books/n16.JPG" 
                          alt="n16" 
                          className='w-full h-full object-cover' 
                          width={1440}
                          height={960}
                      />
                    </div>
                </div>
                <div className="max-w-[1250px] mx-auto py-[50px] flex flex-col gap-[50px] md:gap-[25px]">
                    <BookCard 
                        slug="https://elonaparicio.pixieset.com/bookmaryfer/"
                        urlImage="/books/marifer-book.JPG"
                        bookName="Marifer Book"
                        direction="md:flex-row"
                        />
                    <BookCard 
                        slug="https://elonaparicio.pixieset.com/bookandres/"
                        urlImage="/books/andres-book.JPG"
                        bookName="Andrés Book"
                        direction="md:flex-row-reverse"
                    />
                </div>
            </section>

            <section className="section text-center bg-white">
                <div className="max-w-[1250px] mx-auto flex flex-col justify-center items-center gap-[35px] md:gap-[25px] md:flex-row md:justify-between md:items-start">
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

            <InstagramGallery />

            <Footer />
        </>
    );
}

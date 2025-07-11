import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import InstagramGallery from '@/app/components/instagram-gallery';
import Image from 'next/image';
import LinkCard from './components/link-card';
import TestimonialCarousel from './components/testimonials-carousel';

export default function Home() {
  return (
    <>
      <Header />

      <section className="section" id='home'>
        <div className='max-w-[1250px] mx-auto'>
          <div className='flex flex-col justify-center items-center text-center py-[150px]'>
            <h1 className="text-4xl mb-[5px] md:text-5xl font-light">Hola, Soy Elon</h1>
            <h2 className="text-lg">Hi, I&#39;m Elon</h2>
          </div>
          <div className='md:grid md:grid-cols-2 md:grid-rows-1 md:gap-[15px] lg:grid-cols-3 lg:gap-[50px]'>
            <div className='bg-[#e5e5db] md:h-full lg:col-span-2'>
              <div className="flex justify-between items-center gap-2 p-4 md:justify-center md:p-8">
                <div className="w-[40%] md:w-full">
                  <h2 className="uppercase tracking-[3px] mb-[25px]">Who am I?</h2>
                  <h2 className="text-3xl md:text-4xl pl-[15px]">¿Quién soy?</h2>
                </div>
                <div className="w-[60%] md:hidden rounded-full bg-[#f8f8f8]">
                  <Image 
                    src="/elon-aparicio.jpg" 
                    alt="Elon Aparicio" 
                    width={1500}
                    height={2250}
                    className="rounded-full" 
                  />
                </div>
              </div>
              <div className="py-2 px-8">
                <p className="paragraph">Mi pasión por la fotografía comenzó hace seis años y desde entonces no he dejado de explorar el mundo a través de mi lente. Me fascina la diversidad de la fotografía, desde la belleza de un paisaje hasta la espontaneidad de un retrato. Cada imagen es una oportunidad para contar una historia, para capturar un instante único e irrepetible.</p>
                <p className="paragraph">Me encanta viajar y conocer gente nueva, lo que me permite nutrir mi creatividad con nuevas perspectivas y experiencias. Como fotógrafo profesional, me comprometo a brindar un servicio de excelencia, trabajando de cerca contigo para comprender tus necesidades y superar tus expectativas.</p>
                <p className="paragraph">My passion for photography began six years ago and since then I have not stopped exploring the world through my lens. I am fascinated by the diversity of photography, from the beauty of a landscape to the spontaneity of a portrait. Each image is an opportunity to tell a story, to capture a unique and unrepeatable moment.</p>
                <p className="paragraph">I love to travel and meet new people, which allows me to nurture my creativity with new perspectives and experiences. As a professional photographer, I am committed to providing excellent service, working closely with you to understand your needs and exceed your expectations.</p>
              </div>
            </div>
            <div className="hidden md:block bg-[#f8f8f8] md:h-full rounded-full overflow-hidden">
              <Image 
                src="/elon-aparicio.jpg" 
                alt="Elon Aparicio" 
                width={1500}
                height={2250}
                className='w-full h-full object-cover' 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className='text-center font-light px-[15px]'>
          <h2 className='text-3xl md:text-4xl'>Así es como puedo ayudarte</h2>
        </div>
        <div className='max-w-[1250px] mx-auto grid grid-cols-2 md:grid-cols-5 md:auto-rows-[325px] gap-[15px] py-[25px]'>
          <div className='w-full max-w-[1250px] flex flex-col justify-center items-start bg-[#e5e5db] mx-auto p-8 col-span-2 md:col-span-3'>
            <ul className="">
              <li className="flex justify-stat items-center gap-1 my-3">
                <Image 
                  src='/icons/check_circle.svg' 
                  alt='Check Circle' 
                  width={30} 
                  height={30} 
                  className='w-[30px] h-[30px]'
                />
                Máxima calidad en todas tus fotos y videos (4k Full HD)
              </li>
              <li className="flex justify-stat items-center gap-1 my-3">
                <Image 
                  src='/icons/check_circle.svg' 
                  alt='Check Circle' 
                  width={30} 
                  height={30} 
                  className='w-[30px] h-[30px]'
                />
                Asesoría personalizada para cada proyecto
              </li>
              <li className="flex justify-stat items-center gap-1 my-3">
                <Image 
                  src='/icons/check_circle.svg' 
                  alt='Check Circle' 
                  width={30} 
                  height={30} 
                  className='w-[30px] h-[30px]'
                />
                Fotografía de eventos, retratos, paisajes y productos para negocios y redes sociales
              </li>
              <li className="flex justify-stat items-center gap-1 my-3">
                <Image 
                  src='/icons/check_circle.svg' 
                  alt='Check Circle' 
                  width={30} 
                  height={30} 
                  className='w-[30px] h-[30px]'
                />
                Estilo de edición basado en tus necesidades
              </li>
              <li className="flex justify-stat items-center gap-1 my-3">
                <Image 
                  src='/icons/check_circle.svg' 
                  alt='Check Circle' 
                  width={30} 
                  height={30} 
                  className='w-[30px] h-[30px]'
                />
                Entregas en menos de 1 semana
              </li>
              <li className="flex justify-stat items-center gap-1 my-3">
                <Image 
                  src='/icons/check_circle.svg' 
                  alt='Check Circle' 
                  width={30} 
                  height={30} 
                  className='w-[30px] h-[30px]'
                />
                Videograbaciones profesionales (Cámara y Dron)
              </li>
            </ul>
          </div>
          <Image 
            src="/all-xanat.JPG" 
            alt='Xanat'
            width={1500} 
            height={2250}
            className='w-full h-full bg-[#f8f8f8] object-cover col-span-2'
          />
          <Image 
            src="/sincerely.jpg" 
            alt='Sincerely'
            width={1500} 
            height={2250}
            className='w-full h-full bg-[#f8f8f8] object-cover'
          />
          <Image 
            src="/xanat.JPG" 
            alt='Xanat'
            width={1500} 
            height={2250}
            className='w-full h-full bg-[#f8f8f8] object-cover hidden md:block'
          />
          <Image 
            src="/ricky-walias.JPG" 
            alt='Ricky Walias'
            width={1500} 
            height={2250}
            className='w-full h-full bg-[#f8f8f8] object-cover block md:hidden'
          />
          <Image 
            src="/marce&mau.JPG" 
            alt='Marce & Mau'
            width={1500} 
            height={2250}
            className='w-full h-full bg-[#f8f8f8] object-cover col-span-2 '
          />
          <Image 
            src="/ricky-walias.JPG" 
            alt='Ricky Walias'
            width={1500} 
            height={2250}
            className='w-full h-full bg-[#f8f8f8] object-cover hidden md:block'
          />
        </div>
      </section>

      <section className='max-w-[2000px] mx-auto py-[50px]'>
        <div className='text-center font-light px-[15px]'>
          <h2 className='text-3xl md:text-4xl'>Checa lo que los demás dicen sobre mi trabajo</h2>
        </div>
        <TestimonialCarousel cardWidth="375px" speed={60} />
      </section>

      <section className='section'>
        <div className='max-w-[1250px] mx-auto grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-[15px]'>
          <LinkCard 
            slug='/portfolio'
            urlImage='portfolio-background.jpg'
            name='Portafolio / Work'
          />
          <LinkCard 
            slug='/investment'
            urlImage='prices-background.JPG'
            name='Inversión / Pricing'
          />
        </div>
      </section>

      <section className='section text-center'>
        <div className='max-w-[850px] mx-auto'>
          <h2 className='text-3xl font-light mb-[15px] md:text-4xl md:mb-[20px]'>&quot;Si pudiera contar la historia con palabras, no necesitaría cargar una cámara a todos lados&quot;</h2>
          <p className='uppercase tracking-[3px] text-sm'>-Lewis Hine</p>
        </div>
      </section>

      <InstagramGallery />

      <Footer />
    </>
  );
}

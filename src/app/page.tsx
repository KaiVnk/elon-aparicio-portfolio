import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import InstagramGallery from '@/app/components/instagram-gallery';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />

      <section className="max-w-[1500px] mx-auto pt-[70px] pb-[50px] px-[15px]" id='home'>
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
              <div className="w-[60%] md:hidden">
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
          <div className="hidden md:block bg-white md:h-full rounded-full overflow-hidden">
            <Image 
              src="/elon-aparicio.jpg" 
              alt="Elon Aparicio" 
              width={1500}
              height={2250}
              className='w-full h-full object-cover' 
            />
          </div>
        </div>
      </section>

      <section className='max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[15px] py-[50px] px-[15px]'>
        <Link href="/portfolio">
          <div className='w-full h-[225px] relative bg-gray-100 text-white overflow-hidden md:h-[250px]'>
              <Image 
                src="/portfolio-background.jpg" 
                alt="Mi Trabajo / Portfolio" 
                className="w-full h-full absolute top-0 left-0 right-0 object-cover" 
                width={500}
                height={500}
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
              <div className='h-full relative z-20 flex flex-col justify-evenly items-center text-center md:hover:bg-[rgba(255,255,255,0.1)]'>
                <h2 className="text-3xl font-light">Mi Trabajo / Portfolio</h2>
                <p className="text-xs uppercase tracking-[2px]">Click aquí / Click here</p>
              </div>
          </div>
        </Link>
        <Link href="/investment">
          <div className='w-full h-[225px] relative bg-gray-100 text-white overflow-hidden md:h-[250px]'>
              <Image 
                src="/prices-background.jpg" 
                alt="Inversión / Pricing" 
                className="w-full h-full absolute top-0 left-0 right-0 object-cover" 
                width={500}
                height={500}
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60 z-10"></div>
              <div className='h-full relative z-20 flex flex-col justify-evenly items-center text-center md:hover:bg-[rgba(255,255,255,0.1)]'>
                <h2 className="text-3xl font-light">Inversión / Pricing</h2>
                <p className="text-xs uppercase tracking-[2px]">Click aquí / Click here</p>
              </div>
          </div>
        </Link>
      </section>

      <section className='py-[100px] px-[15px] text-center'>
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

import Link from 'next/link'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import InstagramGallery from '@/app/components/instagram-gallery'

export default function Custom404() {
    return (
        <>
            <Header />

            <section className='max-w-[1500px] max-h-[2000px] mx-auto py-[50px] px-[15px]'>
                <div className='w-full h-full flex flex-col justify-center items-center text-center gap-[10px] py-[50px]'>
                    <h2 className='text-6xl md:text-8xl font-bold tracking-[1px] mb-[15px]'>404</h2>
                    <h1 className='text-3xl md:text-4xl tracking-[1px]'>Oops! Página no encontrada</h1>
                    <h2 className='text-base md:text-lg font light tracking-[2px]'>Asegurese de revisar la url y escribirla correctamente</h2>
                    
                    <div className="mt-[25px]">
                        <Link href='/' type="submit" className="btn-form text-sm md:text-base">Regresar al inicio</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

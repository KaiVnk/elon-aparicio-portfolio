import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import InstagramGallery from '@/app/components/instagram-gallery'
import WorkCard from '../components/work-card';

export default function Portfolio() {
    return (
        <>
            <Header />

            <section className="max-w-[1500px] mx-auto pt-[70px] pb-[50px] px-[15px] text-center" id='home'>
                <div className='min-h-[40vh] flex flex-col justify-center items-center text-center'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Mi Trabajo</h1>
                    <h2 className="text-xl">My Work</h2>
                </div>
                <div className="max-w-[850px] mx-auto">
                    <p className='big-paragraph'>Cada imagen cuenta una historia, y en mi portafolio encontrarás el reflejo de experiencias auténticas, marcas con propósito y momentos irrepetibles. Ya sea para tu imagen personal, tus redes sociales, tu empresa, tu evento o inmortalizar tus logros,  aquí verás lo que podemos crear juntos: contenido visual que conecta y emociona.</p>
                    <p className='big-paragraph'>Every image tells a story, and in my portfolio you will find the reflection of authentic experiences, purposeful brands and unrepeatable moments. Whether it's for your personal image, your social media, your company, your event or to immortalize your achievements, here you'll see what we can create together: visual content that connects and excites.</p>
                </div>
            </section>

            <section className="max-w-[1500px] mx-auto py-[50px] px-[15px]">
                <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-[15px]">
                    <WorkCard slug="/portfolio/portraits" imageUrl="/portfolio/portraits.jpg" name="Retrato / Portraits" />
                    <WorkCard slug="/portfolio/books" imageUrl="/portfolio/books.jpg" name="Books" />
                    <WorkCard slug="/portfolio/graduations" imageUrl="/portfolio/graduations.jpg" name="Graduaciones / Graduations" />
                    <WorkCard slug="/portfolio/sports" imageUrl="/portfolio/sports.jpg" name="Deportes / Sports" />
                    <WorkCard slug="/portfolio/socials" imageUrl="/portfolio/socials.jpg" name="Sociales / Socials" />
                    <WorkCard slug="/portfolio/other-services" imageUrl="/portfolio/other-services.jpg" name="Otros servicios / Other services" />
                </div>
            </section>

            <InstagramGallery />

            <Footer />
        </>
    );
}

import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import InstagramGallery from "@/app/components/instagram-gallery";
import OtherServicesCard from "@/app/components/work/other-services-card";

export default function OtherServices() {
    return (
        <>
            <Header />

            <section className="section" id='home'>
                <div className='section__headings-container'>
                    <h1 className="text-4xl mb-[5px] md:text-5xl">Otros servicios</h1>
                    <h2 className="text-xl">Other Services</h2>
                </div>
                <div className="section__content-container">
                    <p className='big-paragraph'>Además de las opciones anteriores, ofrezco servicios personalizados diseñados para satisfacer las necesidades de eventos que requieren una atención más detallada y una producción de alto nivel. Ya sea que estés organizando un evento corporativo, un lanzamiento de producto o una celebración especial, estoy preparado para ofrecerte soluciones adaptadas a tus requerimientos específicos.</p>
                    <p className='big-paragraph'>Contáctame para conocer las opciones avanzadas y encontrar la cobertura ideal para tu ocasión.</p>
                    <p className='big-paragraph'>In addition to the above options, I offer customized services designed to meet the needs of events that require more detailed attention and high-level production. Whether you are organizing a corporate event, a product launch or a special celebration, I am prepared to offer solutions tailored to your specific requirements.</p>
                    <p className='big-paragraph'>Contact me to learn about advanced options and find the ideal coverage for your occasion.</p>
                </div>
            </section>

            <section className="section">
                <div className="flex flex-col gap-[50px]">
                    <OtherServicesCard slug="https://acergomedia.mypixieset.com/" imageUrl="/portfolio/socials/socials.JPG" name="Sociales / Socials" />
                    <OtherServicesCard slug="https://acergomedia.mypixieset.com/events/" imageUrl="/portfolio/other-services/events.JPG" name="Empresas / Events" />
                    <OtherServicesCard slug="https://acergomedia.mypixieset.com/Comercial/" imageUrl="/portfolio/other-services/comercial.JPG" name="Comercial / Product" />
                    <OtherServicesCard slug="https://acergomedia.mypixieset.com/concerts/" imageUrl="/portfolio/other-services/parties.JPG" name="Conciertos / Parties" />
                </div>
            </section>

            <InstagramGallery />

            <Footer />
        </>
    );
}

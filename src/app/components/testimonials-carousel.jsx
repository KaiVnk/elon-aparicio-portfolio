import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    name: "Mariana López",
    image: "/portfolio/graduations.JPG",
    context: "Graduada",
    text: "La sesión fue mágica. Me sentí celebrada y libre, y las fotos capturaron toda la emoción de ese día tan especial.",
  },
  {
    name: "Marifer Ramírez",
    image: "/books/marifer-book.JPG",
    context: "Modelo en Book Fotográfico",
    text: "Cada toma fue pensada con cuidado. Me hizo sentir segura y auténtica frente a la cámara.",
  },
  {
    name: "Andrés Ortega",
    image: "/books/andres-book.JPG",
    context: "Modelo en Book Fotográfico",
    text: "Necesitaba un book profesional y lo que obtuve superó mis expectativas. Puro talento detrás del lente.",
  },
  {
    name: "Laura Ibáñez",
    image: "/portraits/n14.JPG",
    context: "Retrato Personal",
    text: "Nunca me había gustado cómo salía en fotos, hasta ahora. Gracias por mostrarme desde otra luz.",
  },
  {
    name: "Cassandra Torres",
    image: "/portraits/n21.JPG",
    context: "Retrato Corporativo",
    text: "Buscaba una imagen profesional pero cercana. El resultado fue impecable y fiel a mi personalidad.",
  },
  {
    name: "Marce & Mau",
    image: "/portfolio/socials/socials.JPG",
    context: "Pareja – Boda",
    text: "Capturaste el alma de nuestra boda. Cada imagen cuenta una historia, y revivimos ese día cada vez que las vemos.",
  }
];

export default function TestimonialScroller({
  cardWidth = "300px",
  cardHeight = "auto",
  speed = 60,
}) {
  const animationStyle = {
    animation: `scroll ${speed}s linear infinite`,
  };

  return (
    <div className="w-full overflow-hidden py-8 relative">
      <div
        className="flex w-max gap-[25px] animate-scroll"
        style={animationStyle}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 bg-[#e5e5db] p-4 text-left flex flex-col gap-[35px]"
            style={{ width: cardWidth, height: cardHeight }}
          >
            <div className="text-lg flex items-center gap-[10px]">
              <div className='w-[50px] h-[50px] rounded-full bg-[#f4f2ee] overflow-hidden'>
                <Image 
                  src={t.image} 
                  alt={t.name} 
                  width={50} 
                  height={50}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className='flex flex-col items-start justify-center'>
                <Link href="https://www.instagram.com" target='_blank' className="font-medium md:hover:opacity-80">@{t.name}</Link>
                <span className="text-base text-gray-900">{t.context}</span>
              </div>
            </div>
            <p className="text-gray-900 leading-relaxed"><span className='text-3xl font-semibold leading-0'>“</span>{t.text}<span className='text-3xl font-semibold leading-0'>”</span></p>
          </div>
        ))}
      </div>

      <style>
        {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
        `}
      </style>
    </div>
  );
}

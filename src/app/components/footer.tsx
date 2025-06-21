'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Footer() {
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // md: Tailwind breakpoint
        };

        handleResize(); // Inicial
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const togglePortfolio = () => {
        if (isMobile) {
            setIsPortfolioOpen(prev => !prev);
        }
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsPortfolioOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsPortfolioOpen(false);
        }
    };

    return (
        <footer className="max-w-[1500px] mx-auto py-[75px] px-8">
            <div className="flex justify-center items-center py-[25px] mb-[50px]">
                <div className='text-center'>
                    <ul className='flex flex-col gap-[15px] md:flex-row md:items-center md:gap-[50px]'>
                        <li><Link href="/" className='link'>Inicio</Link></li>
                        <li
                            className='relative'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='link flex justify-center items-center' onClick={togglePortfolio}>
                                <Link href="/portfolio">Portafolio</Link>
                                <button className="cursor-pointer">
                                    <Image 
                                        src={`/icons/${isPortfolioOpen ? 'keyboard-arrow-up-icon' : 'keyboard-arrow-down-icon'}.svg`}
                                        alt={isPortfolioOpen ? "Cerrar Portafolio" : "Desplegar Portafolio"} 
                                        width={30} 
                                        height={30}
                                    />
                                </button>
                            </div>
                            <ul className={`min-w-[250px] bg-transparent py-2 px-4 ${isPortfolioOpen ? 'flex' : 'hidden'} flex-col justify-center items-center gap-[10px] md:absolute md:top-[125%] md:left-[50%] md:-translate-x-[50%] md:bg-[#e5e5db]`}>
                                <div className='absolute top-[-15px] left-0 right-0 w-full h-[20px]'></div>
                                <li><Link href="/portfolio/portraits" className='link'>Retrato</Link></li>
                                <li><Link href="/portfolio/books" className='link'>Book</Link></li>
                                <li><Link href="/portfolio/graduations" className='link'>Graduación</Link></li>
                                <li><Link href="/portfolio/sports" className='link'>Deportes</Link></li>
                                <li><Link href="/portfolio/other-services" className='link'>Otros Servicios</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/investment" className='link'>Inversión</Link></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-between items-center py-[25px] gap-[50px] md:flex-row md:gap-[25px]">
                <div className="text-sm uppercase tracking-[3px] flex flex-col-reverse justify-start items-center gap-[25px] md:gap-[50px] md:flex-row">
                    <p>© 2025 Elon Aparicio</p>
                    <Link href="https://www.instagram.com/elon.aparicio" target='_blank' className='link'>
                        <Image 
                            src="/icons/instagram-icon.png" 
                            alt="Instagram" 
                            width={20} 
                            height={20} 
                        />
                    </Link>
                </div>
                <div>
                    <Link href="#home">
                        <Image src="/icons/up-icon.svg" alt="Regresar al inicio" width={24} height={24} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

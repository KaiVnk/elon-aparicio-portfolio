'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const togglePortfolio = () => {
        setIsPortfolioOpen(!isPortfolioOpen);
    };

    const handleMouseEnter = () => {
        setIsPortfolioOpen(true);
    };

    const handleMouseLeave = () => {
        setIsPortfolioOpen(false);
    };
    
    return (
        <>
            <header className='bg-[#f4f2ee] fixed w-full z-80'>
                <div className="max-w-[1500px] h-[70px] mx-auto flex justify-between items-center px-8 py-2 top-0 left-0 right-0 z-50">
                    <Link href="/" className='h-full'>
                        <Image 
                            src="/icons/elon-aparicio-icon.png" 
                            alt="Inicio" 
                            width={500}
                            height={291}
                            className="max-h-full w-auto"
                        />
                    </Link>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden box-border fixed w-screen h-screen top-0 left-0 right-0 bg-[#e5e5db] z-100`}>
                        <div className="w-full h-[70px] flex justify-end py-2 px-12">
                            <button onClick={toggleMenu} className="cursor-pointer">
                                <Image 
                                    src="/icons/close-icon.svg" 
                                    alt="Cerrar menú" 
                                    width={40}
                                    height={40}
                                />
                            </button>
                        </div>
                        <ul className='w-full h-full flex flex-col justify-start items-center pt-[150px] text-center text-xl gap-[20px]'>
                            <li><Link href="/">Inicio</Link></li>
                            <li >
                                <div className='flex'>
                                    <Link href="/portfolio">Portafolio</Link>
                                    <button className="cursor-pointer" onClick={togglePortfolio}>
                                        <Image 
                                            src={`/icons/${isPortfolioOpen ? 'keyboard-arrow-up-icon' : 'keyboard-arrow-down-icon'}.svg`}
                                            alt={isPortfolioOpen ? "Cerrar Portafolio" : "Desplegar Portafolio"} 
                                            width={30} 
                                            height={30} 
                                        />
                                    </button>
                                </div>
                                <ul className={`text-base ${isPortfolioOpen ? 'flex' : 'hidden'} flex-col gap-[5px] mt-[10px]`}>
                                    <li><Link href="/portfolio/portraits">Retrato</Link></li>
                                    <li><Link href="/portfolio/books">Book</Link></li>
                                    <li><Link href="/portfolio/graduations">Graduación</Link></li>
                                    <li><Link href="/portfolio/sports">Deportes</Link></li>
                                    <li><Link href="/portfolio/other-services">Otros Servicios</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/investment">Inversión</Link></li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <ul className='flex justify-center items-center gap-[30px]'>
                            <li><Link href="/" className='link'>Inicio</Link></li>
                            <li 
                                className='relative'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className='link flex items-center'>
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
                                <ul className={`min-w-[250px] absolute top-[150%] left-[50%] -translate-x-[50%] bg-[#e5e5db] p-4 ${isPortfolioOpen ? 'flex' : 'hidden'} flex-col items-center gap-[10px]`}>
                                    <div className='absolute top-[-20px] left-0 right-0 w-full h-[25px]'></div>
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
                    <div className='block md:hidden'>
                        <button onClick={toggleMenu} className="cursor-pointer">
                            <Image 
                                src="/icons/menu-icon.svg" 
                                alt="Abrir menú" 
                                width={40}
                                height={40}
                            />
                        </button>
                    </div>
                </div>
            </header>
            <div className='relative w-full h-[70px]'></div>
        </>
    );
}

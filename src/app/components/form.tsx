import Image from 'next/image'

export default function Form() {
    return (
        <section className="relative py-[50px] px-[15px]">
            <Image 
                src="/bg-form.JPG" 
                alt="background form" 
                width={1500}
                height={1000}
                className="absolute top-0 left-0 right-0 w-full h-full object-cover" 
            />
            <div className="absolute top-0 left-0 right-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
            <div className="relative max-w-[700px] py-[50px] px-[25px] mx-auto bg-[#f4f2ee] md:px-[50px]">
                <div className="text-center mb-[25px]">
                    <h2 className="text-4xl font-light">Contáctame</h2>
                </div>            
                <form 
                    action="https://formspree.io/f/xvgrrebq"
                    method="POST" 
                    className="flex flex-col gap-[15px]"
                >
                    <label className="label-form">
                        Nombre*
                        <input type="text" name="name" placeholder="Elon Aparicio" required className="input-form outline-none" />
                    </label>
                    <label className="label-form">
                        Correo*
                        <input type="email" name="email" placeholder="elon.aparicio@gmail.com" required className="input-form outline-none" />
                    </label>
                    <label className='label-form' htmlFor='phone'>
                        Teléfono*
                        <div className='flex items-center border-[1px] border-[#ccc] rounded-[5px] p-[10px]'>
                            <select name="lada" required className='py-[9px]'>
                                <option value="+52">🇲🇽 (+52)</option>
                                <option value="+1">🇺🇸 (+1)</option>
                                <option value="+34">🇪🇸 (+34)</option>
                                <option value="+54">🇦🇷 (+54)</option>
                            </select>
                            <input type="tel" name="phone" id='phone' placeholder="55 1234 5678" required className="w-full py-[5px] px-[10px] outline-none" />
                        </div>
                    </label>
                    <label className="label-form">
                        Mensaje*
                        <textarea name="message" placeholder="Quisiera agendar una cita para una sesión fotografíca para mi evento..." required className="input-form textarea-form outline-none"></textarea>
                    </label>
                    <div className="flex justify-center items-center pt-[10px]">
                        <button type="submit" className="btn-form">Enviar mensaje</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

import img from '../../assets/teste.jpg'
import logo from '../../assets/SETROC.png'
import chill from '../../assets/chill.png'
import lider from '../../assets/lider.png'
import valores from '../../assets/valores.png'
import './Nosotros.css'
import { useState } from 'react'


const Nosotros = () => {

    const [animation, setAnimation] = useState({
        a: 'hidden',
        b: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
        c: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
        title: 'Misión',
        text: 'Ofrecer a nuestros clientes servicios profesionales inmobiliarios que les permitan encontrar y obtener el máximo beneficio en sus inversiones. Comprometidos en cada negociación con una comunicación responsable e inteligente.',
        img: chill
    })

    const setAnimationFn = (panel) => {
        switch (panel) {
            case 1:
                setAnimation({
                    a: 'hidden',
                    b: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                    c: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                    title: 'Misión',
                    text: <div className='flex flex-col gap-4 animate-jump animate-once'>Ofrecer a nuestros clientes servicios profesionales inmobiliarios que les permitan encontrar y obtener el máximo beneficio en sus inversiones. Comprometidos en cada negociación con una comunicación responsable e inteligente.</div>,
                    img: chill
                })
                break;
            case 2:
                setAnimation({
                    a: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                    b: 'hidden',
                    c: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                    title: 'Visión',
                    text: <div className='flex flex-col gap-4 animate-jump-in animate-once'>Convertirnos en la empresa líder del sector inmobiliario, actuando con ética, responsabilidad y profesionalismo con nuestros clientes y colaboradores. Comprometidos a impulsar el crecimiento personal de ambas partes, trabajando juntos para alcanzar el éxito deseado en nuestras operaciones y relaciones comerciales.</div>,
                    img: lider

                })
                break;
            case 3:
                setAnimation({
                    a: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                    b: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                    c: 'hidden',
                    title: 'Valores',
                    text: <ul className='flex flex-col gap-4 animate-jump animate-once'>
                        <li>Pasión: La pasión impulsa el compromiso, la creatividad y el deseo de superar obstáculos para asegurar el éxito de nuestros clientes.
                        </li>
                        <li>Profesionalismo: Comprometidos con altos estándares de competencia y ética en todas las operaciones. Esto implica actuar con integridad, eficiencia y conocimiento especializado en el mercado inmobiliario.
                        </li>
                        <li>Confianza: Construir relaciones sólidas basadas en la confianza mutua con clientes, socios y colaboradores. La transparencia, la honestidad y el cumplimiento de compromisos son fundamentales para generar y mantener dicha confianza.
                        </li>
                        <li>Servicio al cliente: Ofrecer un servicio personalizado, atendiendo las necesidades específicas de cada cliente y estableciendo soluciones integrales.
                        </li>
                        <li>Innovación: Ofrecemos formas de mejorar los servicios, procesos y tecnologías para adaptarse a un mercado en constante cambio. La innovación incluye el uso de nuevas herramientas tecnológicas, estrategias de marketing creativas y enfoques disruptivos para otorgar servicios inmobiliarios de calidad</li>

                    </ul>,
                    img: valores

                })
                break;

            default: setAnimation({
                a: 'animate-pulse animate-infinite animate-duration-[5000ms] animate-ease-linear',
                b: '',
                c: ''
            })
                break;
        }
    }


    return (
        <div className="w-full flex flex-col justify-center items-center back">

            <div className="w-full flex flex-col justify-center items-center gap-20 md:p-40 p-2">
                <h1 className="text-5xl font-roboto">Comprometidos con el futuro de tu inversion</h1>
                <span className='text-2xl font-afacad h-full md:p-20'>Setroc Inmobiliaria, forma parte del Grupo Cobague, especializado en construcción, arquitectura, diseño y remodelación. Nuestra excelencia, innovación y compromiso con nuestros clientes nos permite ofrecer soluciones personalizadas y de calidad en proyectos residenciales y comerciales</span>
                <div className="w-full flex flex-col-reverse md:flex-row gap-12">
                    <div className='w-full flex flex-col justify-center'>
                        <div className='flex w-full justify-center'>
                            <img src={logo} alt='logo' />
                        </div>

                    </div>

                    <div className='w-full'>
                        <img src={img} alt="gpi" className='rounded-lg w-full' />
                    </div>
                </div>



                <div className='w-full flex flex-row justify-center md:justify-evenly items-center'>
                    <div onClick={() => setAnimationFn(1)} className={`circle text-3xl ${animation.a} `}><p className={`text-white font-afacad`}>Mision</p></div>
                    <div onClick={() => setAnimationFn(2)} className={`circle text-3xl ${animation.b}`}><p className='text-white font-afacad'>Vision</p></div>
                    <div onClick={() => setAnimationFn(3)} className={`circle text-3xl ${animation.c}`}><p className='text-white font-afacad'>Valores</p></div>
                </div>

                <div className='w-full p-2 md:p-2 lg:px-64 flex flex-col gap-4 justify-center items-center'>
                    <h1 className='w-full text-4xl font-roboto text-p2'>{animation.title}</h1>
                    <span className='w-full text-2xl font-afacad text-p4 flex flex-row justify-center items-center'>{animation.text}</span><img src={animation.img} className='w-full' />
                </div>

            </div>

        </div>
    )
}


export default Nosotros
import img from '../../assets/teste.jpg'
import logo from '../../assets/SETROC.png'
import './Nosotros.css'
import { useEffect, useState } from 'react'



const Nosotros = () => {

    const [bottomClass, setBottomClass] = useState('bottom-64')
    const [opacityClass, setOpacityClass] = useState('opacity-100')
    const [bottomClassInverse, setBottomClassInverse] = useState('bottom-12 scale-50')
    const [opacityClassInverse, setOpacityClassInverse] = useState('opacity-40')



    useEffect(() => {
        const interval = setInterval(() => {
            setBottomClass(prevClassName =>
                prevClassName === 'bottom-64' ? 'bottom-12 scale-50' : 'bottom-64'
            );
            setOpacityClass(previousClassName =>
                previousClassName === 'opacity-40' ? 'opacity-100' : 'opacity-40'
            );
            setOpacityClassInverse(arg => arg === 'opacity-40' ? 'opacity-100' : 'opacity-40')
            setBottomClassInverse(arg => arg === 'bottom-12 scale-50' ? 'bottom-64' : 'bottom-12 scale-50')
        }, 2500)
        return () => clearInterval(interval);
    }, [])


    const visor = `w-80 md:absolute ${bottomClass} ${opacityClass} ease-in transition-all`;
    const visorInverse = `md:absolute ${bottomClassInverse} ${opacityClassInverse} ease-in transition-all`


    return (
        <div className="w-full flex flex-col justify-center items-center bg-p5">

            <div className="w-full flex flex-col justify-center items-center gap-20 md:p-40 p-2">

                <section className='flex flex-col md:flex-row'>
                    <div className='w-full flex flex-col gap-10'>
                        <h1 className='font-roboto text-5xl text-p3 text-center'>Comprometidos contigo y tu futuro.</h1>
                        <span className='text-2xl font-afacad text-p2 h-full '>Setroc Inmobiliaria, forma parte del Grupo Cobague, especializado en construcción, arquitectura, diseño y remodelación. Nuestra excelencia, innovación y compromiso con nuestros clientes nos permite ofrecer soluciones personalizadas y de calidad en proyectos residenciales y comerciales</span>
                    </div>
                    <div className="w-full flex flex-col justify-center items-center relative md:top-32">
                        <div className={visorInverse}>
                            <img src={logo} alt='logo' />
                        </div>
                        <div className={visor}>
                            <img src={img} alt="gpi" className='rounded-xl w-full' />
                        </div>
                    </div>
                </section>


                <div className='w-full flex flex-col justify-center items-center p-2 md:p-20 md:flex-row gap-12'>
                    <div className='w-full flex flex-col justify-center items-center gap-8'>
                        <h1 className='font-roboto text-4xl text-p3'>Misión</h1>
                        <span className='text-xl font-afacad text-p2 md:p-12'>Ofrecer a nuestros clientes servicios profesionales inmobiliarios que les permitan encontrar y obtener el máximo beneficio en sus inversiones. Comprometidos en cada negociación con una comunicación responsable e inteligente.</span>
                    </div>

                    <div className='w-full flex flex-col justify-center items-center gap-5'>
                        <h1 className='font-roboto text-4xl text-p3'>Visión</h1>
                        <span className='text-xl font-afacad text-p2 md:p-12'>Convertirnos en la empresa líder del sector inmobiliario, actuando con ética, responsabilidad y profesionalismo con nuestros clientes y colaboradores. Comprometidos a impulsar el crecimiento personal de ambas partes, trabajando juntos para alcanzar el éxito deseado en nuestras operaciones y relaciones comerciales.</span>
                    </div>
                </div>


                <div className='w-full flex flex-col justify-center items-center gap-2'>
                    <h1 className='font-roboto text-4xl text-p3'>Valores</h1>
                    <div className='w-full md:grid grid-cols-3 justify-center text-white text-center place-items-center flex flex-col'>
                        <div className={`circle p-7 flex flex-col gap-2 justify-center items-center`}><h1 className='text-2xl font-roboto'>Pasión</h1><span className='text-lg font-afacad'>La pasión impulsa el compromiso, la creatividad y el deseo de superar obstáculos para asegurar el éxito de nuestros clientes.
                        </span></div>
                        <div className={`circle p-7 flex flex-col gap-2 justify-center items-center`}><h1 className='text-2xl font-roboto'>Profesionalismo</h1><span className='text-sm font-afacad'>Comprometidos con altos estándares de competencia y ética en todas las operaciones. Esto implica actuar con integridad, eficiencia y conocimiento especializado en el mercado inmobiliario.</span></div>
                        <div className={`circle p-7 flex flex-col gap-2 justify-center items-center`}><h1 className='text-2xl font-roboto'>Confianza</h1><span className='text-md font-afacad p-4'>Construir relaciones sólidas basadas en la confianza mutua con clientes, socios y colaboradores. La transparencia, la honestidad y el cumplimiento de compromisos son fundamentales para generar y mantener dicha confianza.</span></div>
                    </div>

                    <div className='w-full md:grid grid-cols-2 justify-center text-white text-center place-items-center flex flex-col'>
                        <div className={`circle p-7 flex flex-col gap-2 justify-center items-center`}><h1 className='text-2xl font-roboto'>Servicio al cliente</h1><span className='text-lg font-afacad p-4'>Ofrecer un servicio personalizado, atendiendo las necesidades específicas de cada cliente y estableciendo soluciones integrales.</span></div>
                        <div className={`circle p-7 flex flex-col gap-2 justify-center items-center`}><h1 className='text-xl font-roboto'>Innovación</h1><span className='text-sm font-afacad'>Ofrecemos formas de mejorar los servicios, procesos y tecnologías para adaptarse a un mercado en constante cambio. La innovación incluye el uso de nuevas herramientas tecnológicas, estrategias de marketing creativas y enfoques disruptivos para otorgar servicios inmobiliarios de calidad</span></div>

                    </div>

                </div>

                {/* <div className='w-full p-2 md:p-2 lg:px-64 gap-4 justify-center items-center'>
                    <h1 className='w-full text-4xl font-roboto text-p2'>{animation.title}</h1>
                    <span className='w-full text-2xl font-afacad text-p4 flex flex-row justify-center items-center'>{animation.text}</span><img src={animation.img} className='w-full' />
                </div> */}

            </div>

        </div>
    )
}


export default Nosotros
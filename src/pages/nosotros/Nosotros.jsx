import img from '../../assets/teste.jpg'
import logo from '../../assets/SETROC.png'
import './Nosotros.css'


const Nosotros = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">

            <div className="w-full flex flex-col justify-center items-center gap-20 md:p-16 p-2">
                <h1 className="text-5xl font-roboto">Comprometidos con el futuro de tu inversion</h1>
                <span className='text-2xl font-afacad h-full'>Setroc Inmobiliaria, forma parte del Grupo Cobague, especializado en construcción, arquitectura, diseño y remodelación. Nuestra excelencia, innovación y compromiso con nuestros clientes nos permite ofrecer soluciones personalizadas y de calidad en proyectos residenciales y comerciales</span>
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



                <div className='w-full flex flex-col md:flex-row justify-center items-center'>
                    <div className="circle text-3xl"><p>Mision</p></div>
                    <div className="circle text-3xl">Vision</div>
                    <div className="circle text-3xl">Valores</div>

                </div>


            </div>

        </div>
    )
}


export default Nosotros
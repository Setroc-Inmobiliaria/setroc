import DetalleTerreno from "../../components/pageComponents/detalle/Detalle";

// eslint-disable-next-line react/prop-types
const Propiedades = ({dbFirebase}) => {
    return (
        <div>
            <div>

<DetalleTerreno dbFirebase={dbFirebase}/>
            </div>
            
        </div>
      
    )
}

export default Propiedades
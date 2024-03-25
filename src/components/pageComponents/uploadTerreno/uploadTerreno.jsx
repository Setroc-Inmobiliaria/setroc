import { useState } from "react";
import Loader from "../Loader/Loader";
import TextFieldComponent from '../../styledComponents/textfield/TextfieldComponent'
import TextAreaComponent from '../../styledComponents/textfield/TextareaComponent'
import { Button, Checkbox } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { fire_db } from "../../../firebase";


const UploadTerreno = () => {

  const [images, setImages] = useState([]);
  const [metrosCuadrados, setMetrosCuadrados] = useState('')
  const [amenidades, setAmenidades] = useState('')
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [nombre, setNombre] = useState("")
  const [municipio, setMunicipio] = useState("")
  const [estado, setEstado] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [tipoEscritura, setTipoEscritura] = useState("")
  const [precio, setPrecio] = useState(0)
  const [costoPorMetroCuadrado, setCostoPorMetroCuadrado] = useState('')
  const [electricidad, setElectricidad] = useState(false)
  const [pavimentacion, setPavimentacion] = useState(false)
  const [mensualidades, setMensualidades] = useState([])
  const [coorX, setCoorX] = useState(0)
  const [coorY, setCoorY] = useState(0)



  const setArrayMonths = (e) => {
    e.preventDefault()
    setMensualidades([
      ...mensualidades,
      parseFloat(e.target.value)
    ])
  }



  const uploadToDB = async () => {
    setLoading(true);
    const data = new FormData();
    let imagesUrl = [];
    let m2 = [];
    try {
      // Esperar a que todas las solicitudes fetch se completen
      await Promise.all(
        images.map(async (image) => {
          data.append("file", image);
          data.append(
            "upload_preset",
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
          );
          data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
          data.append("folder", "Cloudinary-Setroc");

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: data,
            }
          );
          const res = await response.json();
          console.log('res', res);

          imagesUrl.push(res.secure_url)
        })
      );
      const coor = [parseFloat(coorX), parseFloat(coorY)]
      const arrayMetrosCuadrados = metrosCuadrados.split(',')
      arrayMetrosCuadrados.map(x => {
        m2.push(parseFloat(x))
      })

      const newTerreno = {
        nombre,
        municipio,
        estado,
        descripcion,
        amenidades,
        tipoEscritura,
        precio: parseFloat(precio),
        metrosCuadrados: m2,
        costoPorMetroCuadrado: parseFloat(costoPorMetroCuadrado),
        servicios: {
          electricidad,
          pavimentacion
        },
        mensualidades,
        coordenadas: coor,
        imagenes: imagesUrl,
        active: true
      }

      await addDoc(collection(fire_db, 'terrenos'), newTerreno)
    } catch (error) {
      console.error("Error al cargar las imágenes:", error);
    }


    setLoading(false);
    setPreview(null);
    setImages([]);
  };
  


  const handleImageChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files)
    setImages(filesArray)
    setPreview(filesArray)
    console.log(filesArray);
  };

  const handleResetClick = () => {
    setPreview(null);
    setImages(null);
  };


  return (
    <div className="flex h-full flex-col md:flex-row gap-12 p-2 md:p-12">

      <div className="w-full flex flex-col gap-4">
        <h2 className="text-3xl font-afacad">Informacion necesaria para anadir un terreno</h2>

        <TextFieldComponent
          placeholder="Nombre del terreno"
          name="nombre"
          setData={setNombre}
        />

        <TextFieldComponent
          placeholder="Municipio"
          name="municipio"
          setData={setMunicipio}

        />

        <TextFieldComponent
          placeholder="Estado"
          name="estado"
          setData={setEstado}

        />

        <label>Amenidades: </label>
        <TextAreaComponent
          placeholder="Descripcion"
          name="descripcion"
          setData={setAmenidades}
        />

        <label>Descripcion del terreno: </label>
        <TextAreaComponent
          placeholder="Descripcion"
          name="descripcion"
          setData={setDescripcion}
        />

        <TextFieldComponent
          placeholder="Tipo de escritura"
          name="tipoEscritura"
          setData={setTipoEscritura}
        />

        <TextFieldComponent
          placeholder="Precio"
          name="precio"
          type="number"
          setData={setPrecio}
        />
        
        <label>{`Escribe los metros cuadrados separados por una coma (",")`}</label>
        <label>Ejemplo: 345.12, 100, 222, 450</label>
        <TextFieldComponent
          placeholder="Metros cuadrados"
          name="metros cuadrados"
          setData={setMetrosCuadrados}
        />

        <TextFieldComponent
          placeholder="Costo por metro cuadrado"
          name="costoPorMetroCuadrado"
          type="number"
          setData={setCostoPorMetroCuadrado}
        />

        <div>
          <div>
            <h3>Tipo de servicios</h3>
          </div>

          <div className="flex flex-row items-center">
            <label>Electricidad</label>
            <Checkbox
              aria-placeholder="electricidad"
              // value={electricidad}
              onChange={() => setElectricidad(!electricidad)}
            // checked={electricidad}
            />
            <label>Pavimentacion</label>
            <Checkbox
              aria-placeholder="pavimentacion"
              onChange={() => setPavimentacion(!pavimentacion)}
            />
          </div>
        </div>

        <div>

          <div>
            <h3>Meses sin intereses</h3>
          </div>

          <div className="flex flex-row items-center">
            <label>12</label>
            <Checkbox
              aria-placeholder="12"
              value={12}
              onChange={setArrayMonths}
            />

            <label>24</label>
            <Checkbox
              aria-placeholder="24"
              value={24}
              onChange={setArrayMonths}
            />

            <label>36</label>
            <Checkbox
              aria-placeholder="36"
              value={36}
              onChange={setArrayMonths}
            />
          </div>

        </div>



        <div>
          <h3>Coordenadas *</h3>
          <TextFieldComponent
            placeholder="Coordenada X"
            name="x"
            type="number"
            setData={setCoorX}
          />
          <TextFieldComponent
            placeholder="Coordenada Y"
            name="y"
            type="number"
            setData={setCoorY}
          />
        </div>

        <Button
          sx={{
            backgroundColor: '#67ADD4',
            color: "black",

            '&:hover': {
              backgroundColor: '#91D1C5'
            }
          }}
          onClick={() => uploadToDB()}
        >Confirmar</Button>

      </div>

      <div className="container mx-auto max-w-screen-lg h-full flex flex-col justify-center w-full">
        <header className="border-dashed h-96 border-2 border-gray-400 flex flex-col justify-center items-center">
          <p className="font-semibold text-gray-900 flex flex-wrap justify-center">

          </p>
          {loading ? <Loader /> :
            <input
              id="hidden-input"
              type="file"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
              multiple
            />
          }
          <label htmlFor="hidden-input" className="cursor-pointer">
            <div className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
              Upload a file
            </div>
          </label>

          <div className="flex justify-center flex-col items-center mt-5 mx-3 max-w-xs">
            <div >Se subiran las siguientes imagenes
            </div>
            {preview?.map((pr, index) => {
              return (
                  <span key={index}>{pr.name}</span>
                
              )
            }) }
          </div>
        </header>
        <div className="flex justify-end pb-8 pt-6 gap-4">
          <button
            onClick={handleResetClick}
            className="rounded-sm px-3 py-1 bg-red-700 hover:bg-red-500 text-white focus:shadow-outline focus:outline-none"
          >
            Reset Imagen
          </button>
        </div>
      </div>
    </div>
  )
}

export default UploadTerreno
import { useEffect, useState } from "react";
import { fire_db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Button, Tab, } from "@mui/material";
import Loader from "../../components/pageComponents/Loader/Loader";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import UploadTerreno from "../../components/pageComponents/uploadTerreno/uploadTerreno";
import Mensajes from "../../components/pageComponents/Mensajes/Mensajes";


// eslint-disable-next-line react/prop-types
const Dashboard = ({ setIsLoggedIn }) => {
    const [tableValue, setTableValue] = useState("1")
    const [data, setData] = useState([]);
    const navigate = useNavigate()

    const handleChangeTab = (event, newValue) => {
        setTableValue(newValue)
    }


    useEffect(() => {
        obtenerElementos()
    }, []);

    const obtenerElementos = async () => {

        const contactosRef = collection(fire_db, 'contactos');
        const querySnapshot = await getDocs(contactosRef);
        const newData = [];
        querySnapshot.forEach((doc) => {
            newData.push(doc.data());
        });
        setData(newData);
    };


    const cerrarSesion = () => {
        localStorage.removeItem('auth')
        setIsLoggedIn(false)
        navigate('/')
    }





    return (
        <TabContext value={tableValue}>

            <TabList
                onChange={handleChangeTab}
                visibleScrollbar={true}
                variant="scrollable"
            >
                <Tab label="Terrenos disponibles en SETROC" value="1" />
                <Tab label="Agregar un nuevo terreno" value="2" />
                <Tab label="Mensajes" value="3" />
                <Tab label='Cerrar Sesion' value="4" />
            </TabList>
            <TabPanel value="1">
                <Loader />
            </TabPanel>
            <TabPanel value="2">
               <UploadTerreno/>
            </TabPanel>
            <TabPanel value="3">
                <Mensajes data={data}/>
            </TabPanel>
            <TabPanel value="4">
                <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
            </TabPanel>

        </TabContext>
    );
};

export default Dashboard;

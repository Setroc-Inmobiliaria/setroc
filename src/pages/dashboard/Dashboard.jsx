import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Button, Tab, } from "@mui/material";
import Loader from "../../components/pageComponents/Loader/Loader";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const Dashboard = ({setIsLoggedIn}) => {
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

        const docRef = collection(db, 'contacto');
        const querySnapshot = await getDocs(docRef);
        const newData = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
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
                <Tab label="Terrenos disponibles en SETROC" value="1"/>
                <Tab label="Agregar un nuevo terreno" value="2" />
                <Tab label="Mensajes" value="3"/>
            </TabList>
            <TabPanel value="1">
                <Loader/>
                <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
            </TabPanel>
            <TabPanel value="2">
                <h1>HOLAAAAA 2</h1>
            </TabPanel>
            <TabPanel value="3">
                <h1>HOLAAAAA 3</h1>
            </TabPanel>

        </TabContext>
    );
};

export default Dashboard;

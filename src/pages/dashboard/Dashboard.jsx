import { useState } from "react";
import { Button, Tab, } from "@mui/material";
// import Loader from "../../components/pageComponents/Loader/Loader";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import UploadTerreno from "../../components/pageComponents/uploadTerreno/uploadTerreno";
import Mensajes from "../../components/pageComponents/Mensajes/Mensajes";
import TerrenosDash from "../../components/pageComponents/TerrenosDashboard/TerrenosDash";


// eslint-disable-next-line react/prop-types
const Dashboard = ({ setIsLoggedIn, terrenosFB }) => {
    const [tableValue, setTableValue] = useState("1")
    const navigate = useNavigate()

    const handleChangeTab = (event, newValue) => {
        setTableValue(newValue)
    }





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
                <TerrenosDash terrenosFB={terrenosFB} />
            </TabPanel>
            <TabPanel value="2">
                <UploadTerreno />
            </TabPanel>
            <TabPanel value="3">
                <Mensajes />
            </TabPanel>
            <TabPanel value="4">
                <div className="h-screen">
                    <Button onClick={cerrarSesion}>Cerrar Sesion</Button>
                </div>
            </TabPanel>

        </TabContext>
    );
};

export default Dashboard;

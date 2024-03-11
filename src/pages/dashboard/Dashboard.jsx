import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Tab, Tabs, } from "@mui/material";
import Loader from "../../components/pageComponents/Loader/Loader";
import { TabContext, TabList, TabPanel } from "@mui/lab";



const Dashboard = () => {
    const [tableValue, setTableValue] = useState("1")
    const [data, setData] = useState([]);

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






    return (
        <TabContext value={tableValue}>

            <TabList 
            onChange={handleChangeTab}
            visibleScrollbar={true} 
            variant="scrollable">
                <Tab label="Terrenos disponibles en SETROC" value="1"/>
                <Tab label="Agregar un nuevo terreno" value="2" />
                <Tab label="Mensajes" value="3"/>
            </TabList>
            <TabPanel value="1">
                <Loader/>
            </TabPanel>
            <TabPanel value="2">
                <h1>HOLAAAAA Perre</h1>
            </TabPanel>
            <TabPanel value="3">
                <h1>HOLAAAAA papure</h1>
            </TabPanel>

        </TabContext>
    );
};

export default Dashboard;

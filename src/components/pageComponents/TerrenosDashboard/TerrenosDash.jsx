import { Button, Collapse, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";

// import CardComponent from "../CardComponent/CardComponent";
import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import Loader from "../Loader/Loader";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { fire_db } from "../../../firebase";


// eslint-disable-next-line react/prop-types
const TerrenosDash = ({terrenosFB}) => {

    const [openRows, setOpenRows] = useState({});
    const [isLoad, setIsLoad] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    console.log(terrenosFB);
    // const str = JSON.stringify(terrenosFB)
    // eslint-disable-next-line react/prop-types
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    
    const handleRowClick = (index) => {
        const updatedOpenRows = { ...openRows };
        updatedOpenRows[index] = !updatedOpenRows[index];
        setOpenRows(updatedOpenRows);
    };

    const readMessage = async (nombre) => {
        const consulta = query(collection(fire_db, 'contactos'), where('name', '==', nombre));
        try {
            setIsLoad(true);
            const res = await getDocs(consulta);
            res.forEach(async (document) => {
                const docRef = doc(fire_db, 'contactos', document.id);
                const setRead = false;
                await updateDoc(docRef, { active: setRead });
                console.log('Campo actualizado correctamente', document.id);
   
                setIsLoad(false);
            });
        } catch (error) {
            console.log('Error en la lectura del mensaje', error);
        }
    };


    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Nombre</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            // eslint-disable-next-line react/prop-types
                            ? terrenosFB.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : terrenosFB
                        ).map((datos, index) => (
                            <React.Fragment key={index}>
                                <TableRow onClick={() => handleRowClick(index)} className='cursor-pointer'>
                                    <TableCell>
                                        {openRows[index] ? <FaArrowUp /> : <FaArrowDown />}
                                    </TableCell>
                                    <TableCell>{datos.nombre}</TableCell>
                                    <TableCell>Activo</TableCell>
                                    
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                                        <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                                            {isLoad ? <Loader /> :
                                                <div className='flex flex-col justify-center p-4 gap-4'>
                                                    <strong>Nombre:</strong> {datos.nombre}
                                                    <strong>Municipio:</strong> {datos.municipio}
                                                    <strong>Descripcion:</strong> {datos.descripcion}
                                                    <Button onClick={() => readMessage(datos.name)} sx={{ padding: 5 }}>Marcar como leído</Button>
                                                </div>
                                            }
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                // eslint-disable-next-line react/prop-types
                count={terrenosFB.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    )
}

export default TerrenosDash
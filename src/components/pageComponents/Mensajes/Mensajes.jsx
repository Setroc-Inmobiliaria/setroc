import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, Button, TablePagination } from '@mui/material';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { fire_db } from '../../../firebase'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import Loader from '../Loader/Loader';

const Mensajes = () => {
    const [data, setData] = useState([]);
    const [openRows, setOpenRows] = useState({});
    const [activeMessages, setActiveMessages] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        obtenerElementos();
    }, []);

    useEffect(() => {
        const filteredMessages = data.filter(message => message.active === true);
        setActiveMessages(filteredMessages);
    }, [data]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const obtenerElementos = async () => {
        const contactosRef = collection(fire_db, 'contactos');
        const querySnapshot = await getDocs(contactosRef);
        const newData = [];
        querySnapshot.forEach((doc) => {
            newData.push(doc.data());
        });
        setData(newData);
    };

    const handleRowClick = (index) => {
        const updatedOpenRows = { ...openRows };
        updatedOpenRows[index] = !updatedOpenRows[index];
        setOpenRows(updatedOpenRows);
    };

    const formatter = (seconds) => {
        const fecha = new Date(seconds * 1000);
        return fecha.toLocaleString();
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
                setActiveMessages(activeMessages.filter(msg => msg.nombre !== nombre))
                setIsLoad(false);
            });
        } catch (error) {
            console.log('Error en la lectura del mensaje', error);
        }
    };

    return (
        <div className='h-full w-full'>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Email</TableCell>
                            <TableCell>Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? activeMessages.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : activeMessages
                        ).map((datos, index) => (
                            <React.Fragment key={index}>
                                <TableRow onClick={() => handleRowClick(index)} className='cursor-pointer'>
                                    <TableCell>
                                        {openRows[index] ? <FaArrowUp /> : <FaArrowDown />}
                                    </TableCell>
                                    <TableCell>{datos.email}</TableCell>
                                    <TableCell>{formatter(datos.timestamp.seconds)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                                        <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                                            {isLoad ? <Loader /> :
                                                <div className='flex flex-col justify-center p-4 gap-4'>
                                                    <strong>Nombre:</strong> {datos.name}
                                                    <strong>Telefono:</strong> {datos.telefono}
                                                    <strong>Mensaje:</strong> {datos.message}
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
                count={activeMessages.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

export default Mensajes;

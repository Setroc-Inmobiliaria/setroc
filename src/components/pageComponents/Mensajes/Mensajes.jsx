/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, Button } from '@mui/material';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { fire_db } from '../../../firebase'
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

const Mensajes = ({ data }) => {
    const [openRows, setOpenRows] = useState({});

    const activeMessages = data.filter(messages => messages.active === true)

    const handleRowClick = (index) => {
        const updatedOpenRows = { ...openRows };
        updatedOpenRows[index] = !updatedOpenRows[index];
        setOpenRows(updatedOpenRows);
    };

    const formatter = (seconds) => {
        const fecha = new Date(seconds * 1000)
        return fecha.toLocaleString()
    }

    // Ordenar los datos por fecha formateada
    const sortedData = activeMessages.sort((a, b) => {
        const dateA = new Date(a.timestamp.seconds * 1000);
        const dateB = new Date(b.timestamp.seconds * 1000);
        return dateB - dateA;
    });


    //Marcar como leidos los mensajes
    const readMessage = async (nombre) => {
        const consulta = query(collection(fire_db, 'contactos'), where('name', '==', nombre))
        try {
            const res = await getDocs(consulta)
            res.forEach(async (document) => {
                const docRef = doc(fire_db, 'contactos', document.id)
                const setRead = false
                await updateDoc(docRef, { active: setRead })
                console.log('Campo actualizado correctamente', document.id);
            })
        } catch (error) {
            console.log('Error en la lectura del mensaje', error);
        }

    }

    return (
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
                    {sortedData.length < 1 ?
                        <h1>No hay mensajes por el momento</h1>
                        : sortedData.map((datos, index) => (
                            <React.Fragment key={index}>
                                <TableRow onClick={() => handleRowClick(index)}>
                                    <TableCell>
                                        {/* Usar el estado correspondiente para cada fila */}
                                        {openRows[index] ? <FaArrowUp /> : <FaArrowDown />}
                                    </TableCell>
                                    <TableCell>{datos.email}</TableCell>
                                    <TableCell>{formatter(datos.timestamp.seconds)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                                        <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                                            <div className='flex flex-col justify-center p-4 gap-4'>
                                                <strong>Nombre:</strong> {datos.name}
                                                <strong>Telefono:</strong> {datos.telefono}
                                                <strong>Mensaje:</strong> {datos.message}
                                                <Button onClick={() => readMessage(datos.name)} sx={{ background: 'red', color: 'blue' }}>Marcar como leido</Button>
                                            </div>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        ))
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Mensajes;

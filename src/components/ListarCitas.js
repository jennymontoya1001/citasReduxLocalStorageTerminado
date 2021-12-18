import React from 'react';
import { Card, Table, Button, Icon } from 'react-materialize';
import { useSelector, useDispatch } from 'react-redux';
import { BorrarCitas } from '../actions/citasAction';

export const ListarCitas = () => {

    const dispatch = useDispatch();

    const { citas } = useSelector(store => store.citas);
    console.log(citas)

    const handleBorrar = (id) => {
        dispatch(BorrarCitas(id))
    }

    return (
        <Card title="Agenda">
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Síntomas</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            citas.map(cita => (
                                <tr key={cita.id}>
                                    <td>{cita.nombre}</td>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.sintomas}</td>
                                    <td>
                                        <button

                                        onClick={() => handleBorrar(cita.id)}
                                        >Borrar

                                        </button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Card>
    )
}

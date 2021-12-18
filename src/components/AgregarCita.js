import React, {useState} from 'react';
import { Button, Card, Icon, Textarea, TextInput } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { AgregarCitas } from '../actions/citasAction';
import {v4 as uuidv4} from 'uuid';

export const AgregarCita = () => {

    const dispatch = useDispatch();

    const [values, setValues] = useState({
        nombre: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const {nombre,fecha,hora,sintomas} = values;

    const handleChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const objeto = {
            id: uuidv4(),
            nombre,
            fecha,
            hora,
            sintomas
        }
        dispatch(AgregarCitas(objeto))
        
    }

    return (
        <Card title="Agregar Citas" >
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <TextInput
                        id="nombre"
                        label="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                      
                    />
                </div>
                <div className="row">
                    <div className="col s10 l6">
                        <label className="col s10 l6">Fecha</label>
                        <input 
                        type="date" 
                        id="fecha" 
                        name="fecha"
                        value={fecha}
                        onChange={handleChange}
                          
                            />
                    </div>
                    <div className="col s10 l6">
                        <label className="col s10 l6">Hora</label>
                        <input 
                        type="time" 
                        id="hora" 
                        name="hora"
                        value={hora}
                        onChange={handleChange}
                           
                             />
                    </div>
                </div>
                <div className="row">
                    <Textarea
                        id="sintomas"
                        label="Síntomas"
                        name="sintomas"
                        value={sintomas}
                        onChange={handleChange}
                      
                    />
                </div>
                <Button
                    className="indigo darken-4"
                    type="submit"
                    node="button"
                >
                    Guardar
                    <Icon right>
                        send
                    </Icon>
                </Button>
            </form>
        </Card>
    )
}


export const guardarDatos = (state) => {
    localStorage.setItem('citas',JSON.stringify(state))
}

export const obtenerDatos = () => {
    const citasStorage = localStorage.getItem('citas');
    if(citasStorage===null){
        return undefined
    }
    return JSON.parse(citasStorage)
}
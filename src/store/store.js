import { createStore,combineReducers} from "redux";
import { guardarDatos, obtenerDatos } from "../localStorage/localStorage";
import { citasReducer } from "../reducers/citasReducer";

const reducers = combineReducers({
    citas: citasReducer
})


const storageState = obtenerDatos();

const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    guardarDatos({
        citas: store.getState().citas
    })
})

export default store;



import createStore from 'unistore'
import { v4 as generadorKey } from 'uuid'
/*Informacion a almacenar - Producto*/
let store = createStore({ //State
    comidas: []
})


let actions = {

    setComidasToState(state, comidas){
        return {
            comidas
        }
    },

    addComidaToState(state, infoComida) {
        return {
            comidas: [
                ...state.comidas, infoComida
            ]
        }
    },

    removeComidaFromState: (store, comidaId) => {
        let nuevoArregloDeComida = store.comidas.filter(comida => {
            return comida.id != comidaId
        })

        return {
            comidas: nuevoArregloDeComida
        }
    }
}

export { store, actions }
export default store
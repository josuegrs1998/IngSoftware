import createStore from 'unistore'
import { v4 as generadorKey } from 'uuid'
/*Informacion a almacenar - Producto*/
let store = createStore({ //State
    comidas: [
        { name: "Pupusas", descripcion: "Harina, masa, etc", image: require('./Components/images/pupusas.jpg'), id: 1 },
        { name: "Pizza", descripcion: "Harina, masa, piña, peperonia", image: require('./Components/images/pizza.jpg'), id: generadorKey() },
        { name: "Carne", descripcion: "Vaca, matar vaca, cocinar vaca", image: require('./Components/images/carne.jpg'), id: generadorKey() }
    ]
})


let actions = {
    // Actions can just return a state update:
    increment(state) {
        // The returned object will be merged into the current state
        return { count: state.count + 1 }
    },
    crearComida(state, infoComida) {

        //infoComida.id = generadorKey()
        console.log(infoComida)
        return {
            comidas: [
                ...state.comidas, infoComida
            ]
        }
    }
}

export { store, actions }
export default store
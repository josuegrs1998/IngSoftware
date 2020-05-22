
import localForage from "localforage";
///Eliminar una receta

async function DeleteRecipe(o) {
    return new Promise((resolve, reject) => {
        let borrar = localForage.getItem(o.id)
        console.log(borrar)
        localForage
            .removeItem(borrar)
            .then(storedRecipe => {
                console.log('Se borro ')
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default DeleteRecipe
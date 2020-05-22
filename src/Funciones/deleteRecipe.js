
import localForage from "localforage";
///Eliminar una receta

async function DeleteRecipe(o) {
    return new Promise((resolve, reject) => {
        localForage
            .removeItem(o)
            .then(() => {
                resolve('Borrado')
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default DeleteRecipe
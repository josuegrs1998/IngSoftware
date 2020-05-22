
import localForage from "localforage";
import { v4 as generadorKey } from 'uuid'
// ///CREATE NUEVA RECETA

function createNewRecipe(o) {
    let { name, descripcion, image } = o;
    let id = generadorKey();
    return new Promise((resolve, reject) => {
        localForage
            .setItem(id, { name, descripcion, image, id})
            .then(createdRecipe => {
                console.log(createdRecipe);
                resolve(createdRecipe);
            })
            .catch(error => {
                reject(error);
            });
    });
}




export async function getAllRecipes() {
    let recipesKeys = await localForage.keys()
    let recipes = []
    for (let recipeKey of recipesKeys){
        recipes.push(await localForage.getItem(recipeKey))
    }
    return recipes
}



async function findStoredRecipe(id) {
    return new Promise((resolve, reject) => {
        localForage
            .getItem(id)
            .then(storedRecipe => {
                if (storedRecipe === null) {
                    reject("El id No existe");
                } else {
                    resolve(storedRecipe);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

// createNewRecipe(recipe).then(createdRecipe => {
//     console.log("Creado ", createdRecipe);
//     findStoredRecipe(createdRecipe.id).then(storedRecipe => {
//         console.log(storedRecipe, "este");
//     });
// });

export default createNewRecipe
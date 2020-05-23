import localForage from "localforage";

//Editar Receta

function updateRecipe(o) {
    let { id, name, descripcion, image } = o;
    return new Promise((resolve, reject) => {
        localForage
            .getItem(id)
            .then(item => {
                if (item === null) {
                    reject('No existe la receta')
                }
                item.name = name
                item.descripcion = descripcion
                item.image = image
                localForage.setItem(id, item).then(recipeUpdated => {
                    console.log(recipeUpdated);
                    resolve(recipeUpdated);
                })
            })
            .catch(error => {
                reject(error);
            });
    });
}


export default updateRecipe
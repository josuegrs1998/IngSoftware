
import localForage from "localforage";
//Ver todas las recetas

export async function getAllRecipes() {
    let recipesKeys = await localForage.keys()
    let recipes = []
    for (let recipeKey of recipesKeys) {
        recipes.push(await localForage.getItem(recipeKey))
    }
    return recipes
}


export default getAllRecipes
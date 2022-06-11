const DButils = require("./DButils");

async function markAsFavorite(user_id, recipe_id){
    await DButils.execQuery(`insert into FavoriteRecipes values ('${user_id}',${recipe_id})`);
}

async function getFavoriteRecipes(user_id){
    const recipes_id = await DButils.execQuery(`select recipe_id from FavoriteRecipes where user_id='${user_id}'`);
    return recipes_id;
}

async function checkIfFavoriteRecipes(user_id,recipe_id){
    const isFavorite = await DButils.execQuery(`select recipe_id from FavoriteRecipes where user_id='${user_id}' and recipe_id='${recipe_id}'`);
    if (isFavorite.length>0)
        return true;
    return false;
}



exports.markAsFavorite = markAsFavorite;
exports.getFavoriteRecipes = getFavoriteRecipes;
exports.checkIfFavoriteRecipes = checkIfFavoriteRecipes;
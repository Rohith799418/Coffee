module.exports.getRecipes = (req, res) => {
    res.render('recipe', { title: 'Mocha Recipes' });
};
module.exports.getRecipe1 = (req, res) => {
    res.render('recipe1', { title: 'Classic Mocha' });
};
module.exports.getRecipe2 = (req, res) => {
    res.render('recipe2', { title: 'Mocha Frappe' });
};
module.exports.getRecipe3 = (req, res) => {
    res.render('recipe3', { title: 'Vegan Mocha' });
};

  
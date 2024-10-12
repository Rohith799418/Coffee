var express = require('express');
var router = express.Router();
const recipesMain = require('../controllers/main'); // Import the recipes controller
const recipesController = require('../controllers/coffee'); // Import the recipes controller
const recipesOthers = require('../controllers/others'); // Import the recipes controller

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mocha' });
});

// Route for the recipes page
router.get('/recipes', recipesController.getRecipes); // Link to the recipes controller

router.get('/recipes/classic-mocha', recipesController.getRecipe1); // Link to the recipes controller

router.get('/recipes/mocha-frappe', recipesController.getRecipe2); // Link to the recipes controller

router.get('/recipes/vegan-mocha', recipesController.getRecipe2); // Link to the recipes controller

router.get('/about', recipesOthers.getabout); // Link to the recipes controller

router.get('/login', recipesMain.getLogin); // Link to the recipes controller

router.get('/register', recipesMain.getRegister); // Link to the recipes controller




module.exports = router;

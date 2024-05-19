const recipies = [];

// const submitFunction = () => {
// };
const formElement = document.getElementById('recipie-input-form');
formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const recipie = {
    recipieName: document.getElementById('recipieName').value,
    ingredients: document.getElementById('ingredients').value,
    directions: document.getElementById('directions').value,
  };
  recipies.push(recipie);
  // console.log(recipies);

  renderRecipeList();

  document.getElementById('recipieName').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('directions').value = '';
});

const renderRecipeList = () => {
  const listOfRecipes = document.getElementById('recipe-display');
  listOfRecipes.innerHTML = '';
  recipies.forEach((element) => {
    listOfRecipes.innerHTML = listOfRecipes.innerHTML +=
      "<div id='recipeItem'><h1 id='recipeHeader'>" +
      element.recipieName +
      '</h1>' +
      "<div id='ingredients'><i>Ingredients: </i>" +
      element.ingredients +
      "</div><div id='directions'><i>Directions: </i>" + element.directions + "</div></div>";
  });
};

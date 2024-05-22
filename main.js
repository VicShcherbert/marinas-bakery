let recipies = [];

const localRecipes = JSON.parse(
  window.localStorage.getItem('localRecipeStorage')
);

//Checks, if localRecipes is !null and the array is for sure an array
if (localRecipes !== null && Array.isArray(localRecipes)) {
  recipies = localRecipes;
}
const renderRecipeList = () => {
  {
    //When I type in a recipe name and click submit, it seems to reload the page.
    //To stop that, I added an event listener that prevents that
    //SOURCE: https://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit

    const searchBar = document.getElementById('search-bar');
    const handleForm = (event) => event.preventDefault();
    searchBar.addEventListener('submit', handleForm);
  }

  const searched = document.getElementById('recipe-search-input');
  const listOfRecipes = document.getElementById('recipe-display');
  listOfRecipes.innerHTML = '';

  recipies
    .filter((element) => element.recipieName.includes(searched.value))
    .forEach((element) => {
      listOfRecipes.innerHTML = listOfRecipes.innerHTML +=
        "<div id='recipeItem'><h1 id='recipeHeader'>" +
        element.recipieName +
        '</h1>' +
        "<div id='ingredients'><i>Ingredients: </i>" +
        element.ingredients +
        "</div><div id='directions'><i>Directions: </i>" +
        element.directions +
        '</div></div>';
    });
};
renderRecipeList('');

const formElement = document.getElementById('recipie-input-form');
formElement.addEventListener('submit', (event) => {
  // console.log('Yoooooooo');
  event.preventDefault();

  const recipie = {
    id: Date.now(),
    recipieName: document.getElementById('recipieName').value,
    ingredients: document.getElementById('ingredients').value,
    directions: document.getElementById('directions').value,
  };

  recipies.push(recipie);
  window.localStorage.setItem('localRecipeStorage', JSON.stringify(recipies));

  renderRecipeList('');

  document.getElementById('recipieName').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('directions').value = '';
});

const randomButton = document.getElementById('randomButton');
const randomDiv = document.getElementById('button-holder');
const anotherRandomDiv = document.getElementById('another-button-holder');

randomButton.addEventListener(
  'click',
  (e) => {
    console.log('Child div');
  },
  // { capture: true }
);

randomDiv.addEventListener(
  'click',
  (e) => {
    // e.stopPropagation();
    console.log('Parent div');
  },
  // { capture: true }
);

anotherRandomDiv.addEventListener(
  'click',
  () => {
    console.log('Grandparent div');
  },
  { capture: true }
);
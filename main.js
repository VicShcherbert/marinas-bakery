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
  console.log(recipies);
  document.getElementById('recipieName').value = '';
  document.getElementById('ingredients').value = '';
  document.getElementById('directions').value = '';
});

console.log(recipies);

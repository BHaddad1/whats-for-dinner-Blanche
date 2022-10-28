// It 0: query select buttons/radio buttons for it 1.

// It 1: query select radio button
// write function that will store the data in the viewedRecipesArray the DOM/ show what the user selected (input.value?)
// interpolate the results into the display second flex box
// hide the cookpot icon

// It 2: addeventlistener to entire meal button, that fires off the three prvious functions, and interpolates the data into the flex box.
var sideButton = document.querySelector('#side');
var mainButton = document.querySelector('#main');
var dessertButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('.lets-cook');
var clearButton = document.querySelector('.clear');
var secondBlock = document.querySelector('.make');
var cookpot = document.querySelector('.cookpot')
var youShouldMake = document.querySelector('.make1')
var placeholder = document.querySelector('.make2')


var sides = [
"Mac and Cheese",
"Elote",
"Potato Gratin",
"Cornbread",
"Carmelized Roast Parsnips",
"Balsamic Roasted Potatoes",
"Biscuits",
"Coleslaw",
"Cucumbers with Dill",
"Potato Salad",
"Roasted Asparagus",
"Honey Glazed Carrots",
"Macaroni Salad",
"Salad with Mustard Vinaigrette",
"Roasted Brussel Sprouts",
"Orzo Salad",
"Steamed Broccoli with Lemon",
"Baked Beans",
"Sweet Potato Fries",
"String Beans with Almonds",
"Seasoned Oven Fries",
"Cherry Tomato Salad",
"Maple-Glazed Green Beans",
"Tomato Bruschetta",
"Caprese Salad",
"Edamame",
"Taiwanese Cabbage",
"Spring Rolls",
"Kimchi and Steamed Soft Tofu",
"Egg Rolls",
"Egg Drop Soup",
"Lumpia"
];
var mains = [
  "Lasagna",
  "Pizza",
  "Kimchi Fried Rice",
  "Spaghetti and Meatballs",
  "Tikka Masala",
  "Tater Tot Casserole",
  "Enchilladas",
  "Quesadillas",
  "Tacos El Pastor",
  "Buffalo Seitan Wings",
  "Quiche with Farmer's Market Vegetables",
  "Shepherd's Pie",
  "Indo-Chinese Style Chili Tofu",
  "Japanese Tofu Steak",
  "Vegan Nuggets with Gochujang Glaze",
  "Korean Deopbap",
  "Korean Chive Pancakes",
  "Shoyu Udon Noodles",
  "Kimchi Udon Noodles",
  "Spicy Miso Noodles",
  "Chili Garlic Oil Noodles",
  "Chicken Enchilladas",
  "Portabello Mushroom Burgers",
  "Japanese Curry",
  "Vegan Budae Jjigae",
  "Korean Spicy 'Pork' Stir-Fry",
  "Korean Bulgogi Bowls"
];
var desserts = [
  "Mochi",
  "Mango Sticky Rice",
  "Vegan Ube and Cheese Pandesal",
  "Vegan Chocolate Chip Skillet Cookies",
  "Brownies with Vanilla Ice Cream",
  "Molten Lava Cakes",
  "Vegan Blondie Bars",
  "Peanut Butter Cookies",
  "Vegan Raspberry Cheesecake",
  "Peach Cobbler",
  "Apple Pie",
  "Zucchini Bread",
  "Banana Bread",
  "Cinnamon Rolls",
  "Lemon Poppy Muffins",
  "Chocolate Cake with Vanilla Frosting",
  "red Velvet with Cream Cheese Frosting",
  "Pecan Pie",
  "Double Chocolate Chip Cookies",
  "Oatmeal Whoopie Pies",
  "Hoho Cupcakes",
  "Halva",
  "Lemon Meringue Pie",
  "Gingerbread Cookies",
  "Flan",
  "Pumpkin Pie",
  "Eclairs",
  "Tart Tartin",
  "Funfetti Cupcakes",
  "Blueberry Pie",
  "Macarons",
]


letsCookButton.addEventListener('click', returnDish);
clearButton.addEventListener('click', clearDish);

function getRandomIndex(array) {
  var randomArrayIndex = Math.floor(Math.random() * array.length);
  return array[randomArrayIndex]
}

function hideCookpot(){
  cookpot.classList.add('hidden');
  youShouldMake.classList.remove('hidden');
  placeholder.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}

function returnDish() {
  event.preventDefault();
  if(sideButton.checked === true){
  var newSide = getRandomIndex(sides);
  placeholder.innerHTML = `${newSide}`;
  hideCookpot();
} else if(mainButton.checked === true){
  var newMain = getRandomIndex(mains);
  placeholder.innerHTML = `${newMain}`;
  hideCookpot();
} else if(dessertButton.checked === true){
  var newDessert = getRandomIndex(desserts);
  placeholder.innerHTML = `${newDessert}`;
  hideCookpot();
} else if(entireMealButton.checked === true){
  var newSide = getRandomIndex(sides);
  var newMain = getRandomIndex(mains);
  var newDessert = getRandomIndex(desserts);
  placeholder.innerHTML = `${newMain} with a side of ${newSide} and ${newDessert} for dessert!`;
  hideCookpot();
  }
}

function clearDish() {
  hide(placeholder);
  show(cookpot);
  hide(clearButton);
  hide(youShouldMake);
}

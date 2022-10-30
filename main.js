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
  if(sideButton.checked){
  var newSide = getRandomIndex(sides);
  placeholder.innerText = `${newSide}`;
  hideCookpot();
  sideButton.checked = false;
} else if(mainButton.checked){
  var newMain = getRandomIndex(mains);
  placeholder.innerText = `${newMain}`;
  hideCookpot();
  mainButton.checked = false;
} else if(dessertButton.checked){
  var newDessert = getRandomIndex(desserts);
  placeholder.innerText = `${newDessert}`;
  hideCookpot();
  dessertButton.checked = false;
} else if(entireMealButton.checked){
  var newSide = getRandomIndex(sides);
  var newMain = getRandomIndex(mains);
  var newDessert = getRandomIndex(desserts);
  placeholder.innerText = `${newMain} with a side of ${newSide} and ${newDessert} for dessert!`;
  hideCookpot();
  entireMealButton.checked = false;
} else if(!sideButton.checked && !mainButton.checked && !dessertButton.checked && !entireMealButton.checked){
  placeholder.classList.remove('hidden');
  placeholder.innerText = `Error! Please select an option.`
}
}

function clearDish() {
  cookpot.classList.remove('hidden');
  youShouldMake.classList.add('hidden');
  placeholder.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function doesNotCook() {
  if(!sideButton.checked && !mainButton.checked && !dessertButton.checked && !entireMealButton.checked){
    placeholder.classList.remove('hidden');
    placeholder.innerText = `Error! Please select a dish.`
  }
}


//declaring the variables
var package = document.querySelector('#package');
var cones = document.querySelector('#cones')
var quantity = document.querySelector('#quantity');
var totalCost = document.querySelector('#totalCost');
var coneflavors = document.querySelector('#coneflavors');
var conescoops = document.querySelector('#conescoops');
var cups = document.querySelector('#cups');
var popsicles = document.querySelector('#popsicles');
var wafers = document.querySelector('#wafers');
var waferflavors = document.querySelector('#waferflavors');
var waferscoops = document.querySelector('#waferscoops');
var breads = document.querySelector('#breads');
var breadflavors = document.querySelector('#breadflavors');
var healthierflavors = document.querySelector('#healthierflavors');
var hcups = document.querySelector('#hcups');
var cakes = document.querySelector('#cakes');
var cakeskg = document.querySelector('#cakeskg');
var tubs = document.querySelector('#tubs');
var toppingsContainer = document.getElementById('toppings-container');
var totalCost = document.querySelector('#totalCost');



//EventListeners for the different var
package.addEventListener('change', calculateTotal);
quantity.addEventListener('change', calculateTotal);
cones.addEventListener('change', calculateTotal);
coneflavors.addEventListener('change', calculateTotal);
conescoops.addEventListener('change', calculateTotal);
cups.addEventListener('change', calculateTotal);
popsicles.addEventListener('change', calculateTotal);
wafers.addEventListener('change', calculateTotal);
waferflavors.addEventListener('change', calculateTotal);
waferscoops.addEventListener('change', calculateTotal);
breads.addEventListener('change', calculateTotal);
breadflavors.addEventListener('change', calculateTotal);
healthierflavors.addEventListener('change', calculateTotal);
hcups.addEventListener('change', calculateTotal);
cakes.addEventListener('change', calculateTotal);
cakeskg.addEventListener('change', calculateTotal);
tubs.addEventListener('change', calculateTotal);
toppingsContainer.addEventListener('change', calculateTotal);

//Storing the data in an object
/*var package_prices = {}; 
package_prices['Party Package'] = 80;
package_prices['Graduation Package'] = 100;
package_prices['Picnic Package'] = 50;
package_prices['Casual Package'] = 35;


var cone_prices = {};
cone_prices['Original Cone'] = 2;
cone_prices['Charcoal Cone'] = 2.20;
cone_prices['Matcha Cone'] = 2.50;

var flavor_prices = {};
flavor_prices['Vanilla'] = 0;
flavor_prices['Chocolate'] = 0;
flavor_prices['Strawberry'] = 0;
flavor_prices['Cookies & Cream'] = 0.20;
flavor_prices['Mint Chocolate'] = 0.20;
flavor_prices['Bubblegum'] = 0.40;

var type_of_scoop = {};
type_of_scoop['Single Scoop'] = 0;
type_of_scoop['Double Scoop'] = 1.20;
type_of_scoop['Triple Scoop'] = 1.80;

var cup_sizes = {};
cup_sizes['Small'] =2.20;
cup_sizes['Medium'] =2.50;
cup_sizes['Large'] =3.00;

var pop_sizes = {};
pop_sizes['Small'] =1.50;
pop_sizes['Medium'] =1.80;
pop_sizes['Large'] =2.00;

var type_of_wafer = {};
type_of_wafer['Original Wafer'] = 2.00;
type_of_wafer['Charcoal Wafer'] = 2.20;
type_of_wafer['Matcha Wafer'] = 2.50;

var wflavor_prices = {};
wflavor_prices['Vanilla'] = 0;
wflavor_prices['Chocolate'] = 0;
wflavor_prices['Strawberry'] = 0;
wflavor_prices['Cookies & Cream'] = 0.20;
wflavor_prices['Mint Chocolate'] = 0.20;
wflavor_prices['Bubblegum'] = 0.40;

var wtype_of_scoop = {};
wtype_of_scoop['Single Scoop'] = 0;
wtype_of_scoop['Double Scoop'] = 1.20;
wtype_of_scoop['Triple Scoop'] = 1.80;

var type_of_bread = {};
type_of_bread['Original Bread'] = 3.00;
type_of_bread['Rainbow Bread'] = 3.40;
type_of_bread['Pandan Bread'] = 3.40;

var bflavor_prices = {};
bflavor_prices['Vanilla'] = 0;
bflavor_prices['Chocolate'] = 0;
bflavor_prices['Strawberry'] = 0;
bflavor_prices['Cookies & Cream'] = 0.20;
bflavor_prices['Mint Chocolate'] = 0.20;
bflavor_prices['Bubblegum'] = 0.40;

var hflavor_prices = {};
hflavor_prices['Vanilla'] = 0;
hflavor_prices['Chocolate'] = 0;
hflavor_prices['Strawberry'] = 0;

var healthy_sizes = {};
healthy_sizes['Small'] =2.20;
healthy_sizes['Medium'] =2.50;
healthy_sizes['Large'] =3.00;

var icakes = {};
icakes['Vanilla'] = 0;
icakes['Chocolate'] = 0;
icakes['Strawberry'] = 0;

var icakeskg = {};
icakeskg['1/4 kg'] = 35.00;
icakeskg['1/2 kg'] = 44.00;
icakeskg['1 kg'] = 60.00;

var itubs = {};
itubs['Vanilla'] = 18.00;
itubs['Chocolate'] = 18.00;
itubs['Strawberry'] = 18.00;

var toppingsPrices = {
  whippedCream: 0,
  cherries: 0.50,
  nuts: 0.30,
  chocolatesyrup: 0.80,
  strawberries: 1.00,
  blueberries: 1.00,
  bananas: 1.20,
  marshmallows: 1.00,
  sprinkles: 0.50
 
};*/

function calculateTotal() {
    console.log("calculateTotal function called!");
    console.log("Before tub assignment. tubs.value:", tubs.value);
    var tub = itubs[tubs.value] || 0;
    console.log("After tub assignment. tub:", tub);
  
    // Get selected package and quantity
    var selectedPackage = package.value;
    var qty = quantity.value || 0;
    var cone = cone_prices[cones.value] || 0;
    var coneflavor = flavor_prices[coneflavors.value] || 0;
    var conescoop = type_of_scoop[conescoops.value] || 0;
    var cup = cup_sizes[cups.value] || 0;
    var popsicle = pop_sizes[popsicles.value] || 0;
    var wafer = type_of_wafer[wafers.value] || 0;
    var waferflavor = wflavor_prices[waferflavors.value] || 0;
    var waferscoop = wtype_of_scoop[waferscoops.value] || 0;
    var bread = type_of_bread[breads.value] || 0;
    var breadflavor = bflavor_prices[breadflavors.value] || 0;
    var healthierflavor = hflavor_prices[healthierflavors.value] || 0;
    var hsize = healthy_sizes[hcups.value] || 0;
    var cake = icakes[cakes.value] || 0;
    var cakekg = icakeskg[cakeskg.value] || 0;
    var tub = itubs[tubs.value] || 0;
    //var topping = toppings_list[topping.value] || 0;
  
    // Getting the package price
    var unitCost = package_prices[selectedPackage] || 0;
  
    // Calculating total cost
    var totalPrice = unitCost * qty;
  
    // Displaying the total cost
    totalCost.textContent = `Total cost: $${totalPrice + cone + coneflavor + conescoop + cup + popsicle + wafer
        + waferflavor + waferscoop + bread + breadflavor + healthierflavor + hsize + cake + cakekg + tub}`;
        var selectedToppings = Array.from(document.getElementById('toppings').selectedOptions).map(option => option.value);

        // Calculate total cost based on selected toppings
        var toppingsCost = selectedToppings.reduce((acc, topping) => acc + (toppingsPrices[topping] || 0), 0);
      
        // Updating the total cost element with toppings
        totalCost.textContent = `Total cost: $${((unitCost * qty) + cone + coneflavor + conescoop + cup + popsicle + wafer
          + waferflavor + waferscoop + bread + breadflavor + healthierflavor + hsize + cake + cakekg + tub + toppingsCost).toFixed(2)}`;
  }
  
  

function on_change(el){
    if(el.options[el.selectedIndex].value == 'Cone'){ 
        document.getElementById('coneFields').style.display = 'block'; // Show el
    }
    else if (el.options[el.selectedIndex].value == 'Cup') {
        document.getElementById('cupFields').style.display = 'block';
    }
    else if (el.options[el.selectedIndex].value == 'Popsicle') {
        document.getElementById('popFields').style.display = 'block';
    }
    else if (el.options[el.selectedIndex].value == 'Wafer') {
        document.getElementById('waferFields').style.display = 'block';
        
    }
    else if (el.options[el.selectedIndex].value == 'Bread') {
        document.getElementById('breadFields').style.display = 'block';
        
    }
    else if (el.options[el.selectedIndex].value == 'Healthier Choice') {
        document.getElementById('healthFields').style.display = 'block';
        
    }
    else if (el.options[el.selectedIndex].value == 'Ice Cream Cake') {
        document.getElementById('cakeFields').style.display = 'block';
        
    }
    else if (el.options[el.selectedIndex].value == 'Ice Cream Tub') {
        document.getElementById('tubFields').style.display = 'block';
        
    }
    
    else{
        document.getElementById('coneFields').style.display = 'none'; // Hide el
    }
}

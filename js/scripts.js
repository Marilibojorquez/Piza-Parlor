// Business Logic for Pizza Parlor
function PizzaParlor() {
  this.toppings = {};
  this.currentId = 0;
}

PizzaParlor.prototype.addToppings = function(toppings) {
  toppings.id = this.assignId();
  this.toppings[toppings.id] = toppings;
}







//User Interface Logic


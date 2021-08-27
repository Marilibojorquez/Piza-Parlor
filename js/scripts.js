// Business Logic for Pizza Parlor
function PizzaPArlor() {
  this.toppings = {};
  this.currentId = 0;
}

PizzaPArlor.prototype.addToppings = function(toppings) {
  toppings.id = this.assignId();
  this.toppings[toppings.id] = toppings;
}


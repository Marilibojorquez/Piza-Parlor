// Business Logic for Pizza Parlor
class PizzaParlor {
  constructor() {
    this.toppings = {};
    this.currentId = 0;
  }
  addToppings(toppings) {
    toppings.id = this.assignId();
    this.toppings[toppings.id] = toppings;
  }
}








//User Interface Logic
$(document).ready(function() {
  $("form#toppings").submit(function(event) {
    event.preventDefault();
    const topping = $("#topping").val();
    const size = $("#size").val();
  });
});


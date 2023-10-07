import { createTitle,clearContent,createSubcard } from "./page-loader";

export default function createMenu() {
    let content = document.getElementById('content');
    clearContent();
    let card = document.createElement('div');
    card.className = 'card';
    content.appendChild(card);
    
    createTitle("Menu", ["Italian Cuisine"]);
    createSubcard("Plain pizza", ["$6.99", "Please give Peppino a tip for beating up demonic pizzas"],"https://media.tenor.com/qZGu54AzpKEAAAAi/pizzaface-pizza-tower.gif");
    createSubcard("Spaghetti", ["$5.99", "That's a spicy meatball"], "https://pngimg.com/d/spaghetti_PNG103.png")
    createSubcard("Toppings", ["Sausage - $2.99", "Pepperoni - $1.99" ,"Extra cheese - $1.99"])
}

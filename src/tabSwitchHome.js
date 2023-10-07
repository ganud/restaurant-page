import { createTitle,clearContent,createSubcard } from "./page-loader";

export default function createHome() {
    let content = document.getElementById('content');
    clearContent();
    let card = document.createElement('div');
    card.className = 'card';
    content.appendChild(card);
    
    createTitle("Peppy's Pizza", ["Run by a crazy bastard!"]);
    createSubcard("One of a kind!", ["No one is unhinged as Peppino. His ramblings as a mad Italian is contested by no one."],"https://media.tenor.com/Law7Oz3r9gAAAAAC/pizza-tower-peppino.gif");
    createSubcard("HOURS", ["OPEN 24/7","(Except when Peppino's gotta beat up some ingredients)"])
    createSubcard("Location", ["123 Peppy's Place, Italy"])
}

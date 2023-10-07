import { createTitle,clearContent,createSubcard } from "./page-loader";

export default function createContacts() {
    let content = document.getElementById('content');
    clearContent();
    let card = document.createElement('div');
    card.className = 'card';
    content.appendChild(card);
    
    createTitle("Contacts", []);
    createSubcard("John 'Peppino' Pizzatower", ["Glorious pizza hunter", "123-123-213", "pizzmaster23@gmail.com"],"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13cf2345-9660-4c51-b5c1-aed73c74f79f/dfw7xru-aaea0c48-e36d-484f-a610-feb6d5413eab.gif/v1/fill/w_960,h_540/pizza_tower___manly_peppino_by_sadcubexme_dfw7xru-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQwIiwicGF0aCI6IlwvZlwvMTNjZjIzNDUtOTY2MC00YzUxLWI1YzEtYWVkNzNjNzRmNzlmXC9kZnc3eHJ1LWFhZWEwYzQ4LWUzNmQtNDg0Zi1hNjEwLWZlYjZkNTQxM2VhYi5naWYiLCJ3aWR0aCI6Ijw9OTYwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.hpaj_iJRa9H3he9Da4tu9ZmOCdn8Y5IIGxhmR1T8zx8");
}

import clearContent from "./page-loader.js";

export function createHome() {
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


export function createTitle(title, texts) {
    let card = document.getElementsByClassName('card')[0];

    // Create title card element
    let titlecard = document.createElement('div')
    titlecard.className = 'title-card'
    titlecard.innerHTML = title;
    card.appendChild(titlecard);

    // Create and append subtext elements
    texts.forEach(text => {
        let subcardtext = document.createElement('p');
        subcardtext.className = "subtext";
        subcardtext.innerHTML = text;
        titlecard.appendChild(subcardtext);
    });
}

// Take a header, then a list of texts.
export function createSubcard(header, texts, imageurl) {
    let card = document.getElementsByClassName('card')[0];

    // Create subcard, then append
    let subcard = document.createElement('div')
    subcard.className = 'subcard'
    card.appendChild(subcard);

    // Create and append header
    let subcardheader = document.createElement('p')
    subcardheader.className = "subtext-header"
    subcardheader.innerHTML = header;
    subcard.appendChild(subcardheader);

    // Create and append image elements, if parameter is included
    if (!isEmpty(imageurl)) {
        let image = document.createElement('img')
        image.src = imageurl;
        subcard.appendChild(image);
    }

    // Create and append subtext elements
    texts.forEach(text => {
        let subcardtext = document.createElement('p');
        subcardtext.className = "subtext";
        subcardtext.innerHTML = text;
        subcard.appendChild(subcardtext);
    });
}

function isEmpty(value) {
    return value === undefined || value === null || value === '';
  }

export default {
    createHome,
    createSubcard,
    createTitle,
}

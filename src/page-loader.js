export default function clearContent() {
    let content = document.getElementById('content');
    content.innerHTML = "";
}

// Take a header, then a list of texts.
export function createSubcard(header, texts) {
    let card = document.getElementsByClassName('card')[0];

    // Create subcard, then append
    let subcard = document.createElement('div')
    subcard.className = 'subcard'
    card.appendChild(subcard);

    // Create and append header
    let subcardheader = document.createElement('p')
    subcardheader.innerHTML = header;
    subcard.appendChild(subcardheader);

    texts.forEach(text => {
        let subcardtext = document.createElement('div');
        subcardtext.className = "subtext";
        subcardtext.innerHTML = text;
        subcard.appendChild(subcardtext);
    });
}
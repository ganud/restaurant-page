export function clearContent() {
    let content = document.getElementById('content');
    content.innerHTML = "";
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
    clearContent,
    createSubcard,
    createTitle,
}
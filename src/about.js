function about() {    
    const content = document.querySelector('#content')
    const aboutpage = document.createElement('div');
    aboutpage.className = 'aboutpage'
    content.appendChild(aboutpage);

    const ourOfferContainer = document.createElement('div');
    ourOfferContainer.className = 'our-offer-container';

    const ourOfferText = document.createElement('p');
    ourOfferText.className = 'our-offer-text';
    ourOfferText.textContent = 'What make us special?';

    const OfferContainer = document.createElement('ul');
    OfferContainer.className = 'offer-container';

    aboutpage.appendChild(ourOfferContainer);
    ourOfferContainer.appendChild(ourOfferText);
    ourOfferContainer.appendChild(OfferContainer);

    for (let i = 1; i <= 4; i++) {
        const offer = document.createElement('li');
        offer.className = 'offer';
        OfferContainer.appendChild(offer);

        switch (i) {
            case 1:
                offer.textContent = '🍭 You love to eat tasty food, and love to cook.'
                break;
            case 2:
                offer.textContent = '🥢 We offer a peaceful dinner.'
                break;
            case 3:
                offer.textContent = '🫖 Because more money does not give you good food.'
                break;
            case 4:
                offer.textContent = '😶 Because this is not a fake website about fake restaurant.'
        }
    }

    const contactBoxContainer = document.createElement('div');
    contactBoxContainer.className = 'contact-box-container';

    const contactBoxText = document.createElement('p');
    contactBoxText.className = 'contact-box-text';
    contactBoxText.textContent = 'Want to contact us?'

    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.textContent = 'Visit here →'

    aboutpage.appendChild(contactBoxContainer);
    contactBoxContainer.appendChild(contactBoxText);
    contactBoxContainer.appendChild(contact);

    const contactButton = document.createElement('button');
    contactButton.className = 'contact-button';

    const contactLink = document.createElement('a');
    contactLink.setAttribute('href', 'http://github.com/anujbalak/dhaba/');
    contactLink.className = 'contact-link';
    contactLink.textContent = 'Visit'

    contactBoxContainer.appendChild(contactButton);
    contactButton.appendChild(contactLink);
};

export { about }

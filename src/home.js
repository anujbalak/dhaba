const content = document.querySelector('div#content');

// famous for box
const homepage = document.createElement('div');
homepage.className = 'homepage';
content.appendChild(homepage);
const famousForContainer = document.createElement('div');
famousForContainer.className = 'famous-for-container';
const famousForText = document.createElement('div');
famousForText.className = 'famous-for-text';
famousForText.textContent = 'Perfect place to enjoy a meal with family and friends, celebrate close ones birthday and functions.'
homepage.appendChild(famousForContainer);
famousForContainer.appendChild(famousForText);


// foodShowcase
const showcaseFoodContainer = document.createElement('div');
showcaseFoodContainer.className = 'showcase-food-container';
const showcaseFoodTextContainer = document.createElement('div');
const showcaseFoodText = document.createElement('p');
showcaseFoodText.textContent = 'Eat Before its cold!';
homepage.appendChild(showcaseFoodContainer);
showcaseFoodContainer.appendChild(showcaseFoodTextContainer);
showcaseFoodTextContainer.appendChild(showcaseFoodText);

for (i = 1; i <= 3; i++) {  
    const foodContainer = document.createElement('div');
    foodContainer.className = 'food-container';
    const foodImage = document.createElement('div');
    foodImage.className = 'food-image';
    const foodText = document.createElement('p');
    foodText.className = 'food-text';
    
    
    showcaseFoodContainer.appendChild(foodContainer);
    foodContainer.appendChild(foodImage);
    foodContainer.appendChild(foodText);
    switch (i) {
        case 1:
            foodImage.textContent = '🥘';
            foodText.textContent = 'Indian Style Curry';
            break;
        case 2:
            foodImage.textContent = '🍕';
            foodText.textContent = 'Pizza';
            break;
        case 3:
            foodImage.textContent = '🍗';
            foodText.textContent = 'Meat';
            break;
    }
}

// quote

const quoteConatainer = document.createElement('div');
quoteConatainer.className = 'quote-container';

const quote = document.createElement('p');
quote.className = 'quote';
quote.textContent = 'Food is like food, it fills your stomach and my pocket!'

homepage.appendChild(quoteConatainer);
quoteConatainer.appendChild(quote);

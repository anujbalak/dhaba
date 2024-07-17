const content = document.querySelector('#content')
const menupage = document.createElement('div');
menupage.className = 'menupage'
content.appendChild(menupage);

// our special

const ourSpecialContainer = document.createElement('div');
ourSpecialContainer.className = 'our-special-container';

const ourSpecialText = document.createElement('p');
ourSpecialText.className = 'our-special-text';
ourSpecialText.textContent = 'Our Special';

const specialFoodContainer = document.createElement('div');
specialFoodContainer.className = 'special-food-container';

menupage.appendChild(ourSpecialContainer);
ourSpecialContainer.appendChild(ourSpecialText);
ourSpecialContainer(specialFoodContainer)

for (i = 1; i <= 5; i++) {
    const foodContainer = document.createElement('div');
    foodContainer.className = 'food-container';
    const foodImage = document.createElement('div');
    foodImage.className = 'food-image';
    const foodText = document.createElement('p');
    foodText.className = 'food-text';
    
    
    specialFoodContainer.appendChild(foodContainer);
    foodContainer.appendChild(foodImage);
    foodContainer.appendChild(foodText);
    switch (i) {
        case 1:
            foodImage.textContent = '🍔';
            foodText.textContent = 'Hamburger';
            break;
        case 2:
            foodImage.textContent = '🍛';
            foodText.textContent = 'Curry Rice';
            break;
        case 3:
            foodImage.textContent = '🌭';
            foodText.textContent = 'Hot';
            break;
        case 4:
            foodImage.textContent = '🥪';
            foodText.textContent = 'Sandwich';
            break;
        case 5:
            foodImage.textContent = '🥞';
            foodText.textContent = 'Pancakes';
            break;
    }
}

// full menu

const fullMenuContainer = document.createElement('div');
fullMenuContainer.className = 'full-menu-container';

const fullMenuText = document.createElement('p');
fullMenuText.className = 'full-menu-text';
fullMenuText.textContent = 'Full Menu';
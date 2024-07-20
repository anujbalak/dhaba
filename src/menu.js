function menu() {
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
    ourSpecialContainer.appendChild(specialFoodContainer)

    function generateSpecialFood() {
        for (let i = 1; i <= 5; i++) {
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
                    foodText.textContent = 'Hot Dog';
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
    }
    generateSpecialFood();
    // full menu

    const fullMenuContainer = document.createElement('div');
    fullMenuContainer.className = 'full-menu-container';

    const fullMenuText = document.createElement('p');
    fullMenuText.className = 'full-menu-text';
    fullMenuText.textContent = 'Full Menu';

    menupage.appendChild(fullMenuContainer);
    fullMenuContainer.appendChild(fullMenuText);
    
    function genrateFullMenu() {
        for (let i = 1; i <= 5; i++) {
            const category = document.createElement('ul');
            category.className = 'category';

            const categoryName = document.createElement('p');
            categoryName.className = 'category-name';
            
            fullMenuContainer.appendChild(category);
            category.appendChild(categoryName);

            switch (i) {
                case 1:
                    categoryName.textContent = 'Veg';
                    break;
                case 2:
                    categoryName.textContent = 'Non-veg';
                    break;
                case 3:
                    categoryName.textContent = 'Fruits';
                    break;
                case 4:
                    categoryName.textContent = 'Dessert';
                    break;
                case 5:
                    categoryName.textContent = 'Drinks';
                    break;
                default:
                    break;
            }
            for (let j = 1; j <=5; j++) {
                const foodItem = document.createElement('li');
                foodItem.className = 'food-item';

                category.appendChild(foodItem);

                switch (i) {
                    case 1:
                        switch (j) {
                            case 1: 
                                foodItem.textContent = '🌮 Taco';
                                break;
                            case 2:
                                foodItem.textContent = '🥗 Green Salad';
                                break;
                            case 3:
                                foodItem.textContent = '🍠 Roasted Sweet Potato';
                                break;
                            case 4:
                                foodItem.textContent = '🥪 Sandwich';
                                break;
                            case 5:
                                foodItem.textContent = '🍕 Pizza';
                                break;
                            default:
                                break;
                        }
                        break;
                    case 2:
                        switch (j) {
                            case 1:          
                                foodItem.textContent = '🍗 Fried Chicken';
                                break;
                            case 2:
                                foodItem.textContent = '🥓 Bacon';
                                break;
                            case 3:
                                foodItem.textContent = '🍤 Fried Shrimp🎣';
                                break;
                            case 4:
                                foodItem.textContent = '🎣 Fried Fish';
                                break;
                            default:
                                break;
                        }
                        break;
                    case 3:
                        switch (j) {
                            case 1:  
                                foodItem.textContent = '🥥 Coconuts';
                                break;
                            case 2:
                                foodItem.textContent = '🍎 Apples';
                                break;
                            case 3:
                                foodItem.textContent = '🍉 Season Fruits';
                                break;
                            case 4:
                                foodItem.textContent = '🥜 Dry Fruits';
                                break;
                            case 5:
                                foodItem.textContent = '';
                                break;
                            default:
                                break;
                        }
                        break;
                    case 4:
                        switch (j) {
                            case 1:                        
                                foodItem.textContent = '🍨 Ice Creams';
                                break;
                            case 2:
                                foodItem.textContent = '🍪 Cookies';
                                break;
                            case 3:
                                foodItem.textContent = '🎂 Cakes';
                                break;
                            case 4:
                                foodItem.textContent = '🍫 Chocolates';
                                break;
                            case 5:
                                foodItem.textContent = '🥧 Pie';
                                break;
                            default:
                                break;
                        }
                        break;
                    case 5:
                        switch (j) {
                            case 1:                        
                                foodItem.textContent = '🥛 Milk';
                                break;
                            case 2:
                                foodItem.textContent = '☕ Chai/Tea';
                                break;
                            case 3:
                                foodItem.textContent = '🍷 Alcohol';
                                break;
                            case 4:
                                foodItem.textContent = '';
                                break;
                            case 5:
                                foodItem.textContent = '';
                                break;
                            default:
                                break;
                    }
                        break;
                }
                if (foodItem.textContent == '') {
                    foodItem.remove();
                }
            }
        }
    }
    genrateFullMenu();

    const moreItems = document.createElement('div');
    moreItems.className = 'more-items';
    moreItems.textContent = 'this is just a iceberg tip...';
    fullMenuContainer.appendChild(moreItems);
}

export { menu }
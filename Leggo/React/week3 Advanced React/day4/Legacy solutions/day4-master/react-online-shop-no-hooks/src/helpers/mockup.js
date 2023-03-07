import faker from 'faker';
import uuid4 from 'uuid';
import DISCOUNT_TYPES from '../constants/discounts';

/**
 * get a random path to a item image from public/images/item-images/<filename>.png
 * (If you want to use different random images, just replace them in the public/images/items/ folder)
 */
const getRandomItemImage = () => {
    const AMOUNT_OF_ITEM_IMAGES = 23;
    const index = Math.max(Math.floor(Math.random() * AMOUNT_OF_ITEM_IMAGES), 1);
    const name = String(index).length === 1 ? '0' + index : index;
    return `/images/items/${name}.jpg`;
};

/**
 * Get a random discount from all available discount types
 * @param {number} chance Chance of returning a random discount in percent (defaults to 5% chance)
 */
const getRandomDiscountId = (chance = 5) => {
    // Roll the dice. Higher "chance" increases likelihood of a discount
    const randomNumber = Math.random() * 100;
    if (randomNumber < chance) {
        // get a random discount in case of a successfull dice-roll
        const discountIDs = Object.keys(DISCOUNT_TYPES);
        const maxIndex = discountIDs.length - 1;
        const randomIndex = Math.round(Math.random() * maxIndex);
        return discountIDs[randomIndex];
    }
    return null;
};

/**
 * Generates an array of items that can be used to populate the redux store
 * @param {number} amount Amount of items you want to generate
 */
export const generateFakeItems = amount => {
    let items = {};
    for (let i = 0; i < amount; i++) {
        const item = {
            id: uuid4(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(1, 100),
            description: `${faker.company.catchPhrase()} ${faker.company.catchPhrase()} ${faker.company.catchPhrase()}`,
            image: getRandomItemImage(),
            discount: getRandomDiscountId(60)
        };
        items[item.id] = item;
    }
    return items;
};

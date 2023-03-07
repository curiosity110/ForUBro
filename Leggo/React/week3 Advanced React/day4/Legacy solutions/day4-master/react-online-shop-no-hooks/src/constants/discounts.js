import store from '../store';
import items from '../store/reducers/items';

/* 
Discounts types are defined here.
There are two kind of discount types: "percentage based" and "amount based"

All discounts need a getDiscount method which returns the amount of money the user saves
Percentages also need need a getSingleDiscount because reduced price is displayed 
*/

/** A function returning a function. Use it to generate "getDiscount()" for percentage based discounts */
const generateDiscountGetterPercent = (percent = 0) => (itemId, amount = 1) => {
    const item = store.getState().items[itemId];
    if (item) {
        const regularPrice = amount * item.price;
        return regularPrice * (percent / 100);
    }
    return 0;
};

/** A function returning a function. Use it to generate "getDiscount()" for percentage based discounts */
const generateDiscountGetterAmount = (amountToBuy, amountToPay) => (itemId, amount = 1) => {
    const item = store.getState().items[itemId];
    if (amount >= amountToPay && items) {
        const num = Math.floor(amount / amountToBuy);
        const reductionAmount = num * item.price;
        return reductionAmount;
    }
    return 0;
};

// AMOUNT BASED DISCOUNT TYPES
const DISCOUNT_AMOUNT_2_FOR_1 = {
    name: '2x1',
    description: 'get two, only pay for one',
    getDiscount: generateDiscountGetterAmount(2, 1)
};

const DISCOUNT_AMOUNT_3_FOR_2 = {
    name: '2x1',
    description: 'get three for the price of two',
    getDiscount: generateDiscountGetterAmount(2, 1)
};

const DISCOUNT_AMOUNT_5_FOR_3 = {
    name: '2x1',
    description: 'get five for the price of three',
    getDiscount: generateDiscountGetterAmount(2, 1)
};

// PERCENTAGE BASED DISCOUNT TYPES
const DISCOUNT_PERCENT_10 = {
    name: '-10%',
    description: '10% off regular price',
    getDiscount: generateDiscountGetterPercent(10)
};

const DISCOUNT_PERCENT_20 = {
    name: '-20%',
    description: '20% off regular price',
    getDiscount: generateDiscountGetterPercent(20)
};

const DISCOUNT_PERCENT_45 = {
    name: '-45%',
    description: '45% off regular price',
    getDiscount: generateDiscountGetterPercent(45)
};

export default {
    DISCOUNT_AMOUNT_2_FOR_1,
    DISCOUNT_AMOUNT_3_FOR_2,
    DISCOUNT_AMOUNT_5_FOR_3,
    DISCOUNT_PERCENT_10,
    DISCOUNT_PERCENT_20,
    DISCOUNT_PERCENT_45
};

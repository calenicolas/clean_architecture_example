
const ItemPrice = require('./item_price');
const FreeShippingCost = require('./free_item_shipping_cost');

class LoyaltyLevel2 {

    calculateShippingCost(itemPrice, itemShippingCost){

        const freeShippingLowerItemPrice = new ItemPrice(1200);

        if(itemPrice.isHigherOrEqualThan(freeShippingLowerItemPrice)){

            return new FreeShippingCost(itemShippingCost);
        } else {

            return itemShippingCost;
        }
    }
}

module.exports = LoyaltyLevel2;
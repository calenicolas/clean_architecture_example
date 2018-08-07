
const ItemPrice = require('../item/item_price');
const FreeShippingCost = require('../item/item_shipping_cost/free_item_shipping_cost');

class LoyaltyLevel2 {

    /**
     *
     * @param {ItemPrice} itemPrice
     * @param {ItemShippingCost} itemShippingCost
     * @return {ItemShippingCost}
     */
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

const LoyaltyLevel2 = require('./loyalty_level_2');

class Buyer {

    constructor(){

        this._loyaltyLevel = new LoyaltyLevel2();
    }

    /**
     *
     * @param {Item} item
     * @return {ItemShippingCost}
     */
    asksForItemShippingCost(item) {

        return item.showShippingCost(this._loyaltyLevel);
    }
}

module.exports = Buyer;

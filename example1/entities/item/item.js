
const ItemPrice = require('./item_price');
const PricedItemShippingCost = require('./item_shipping_cost/item_shipping_cost');

class Item {

    constructor(modelAsJSON){

        this._model = modelAsJSON;
    }

    /**
     *
     * @param {LoyaltyLevel2} loyaltyLevel
     * @return {ItemShippingCost}
     */
    showShippingCost(loyaltyLevel) {

        return loyaltyLevel.calculateShippingCost(
            new ItemPrice(this._model.price),
            new PricedItemShippingCost(this._model.id, this._model.shipping_price)
        );
    }
}

module.exports = Item;
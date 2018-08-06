
const ItemPrice = require('./item_price');
const ShippingCost = require('./item_shipping_cost');

class Item {

    constructor(modelAsJSON){

        this._model = modelAsJSON;
    }

    showShippingCost(loyaltyLevel) {

        return loyaltyLevel.calculateShippingCost(
            new ItemPrice(this._model.price),
            new ShippingCost(this._model.id, this._model.shipping_price)
        );
    }
}

module.exports = Item;
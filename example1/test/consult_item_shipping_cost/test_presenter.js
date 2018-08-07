/**
 * @implements {ItemShippingCostResponse}
 * @implements {ItemShippingCostRenderer}
 * @constructor
 */
function TestPresenter(){}

TestPresenter.prototype.renderItemShippingCost = function(itemShippingCost) {

    return itemShippingCost.renderIn(this);
};

TestPresenter.prototype.showItemShippingCost = function(itemId, itemShippingCostAsFloat){

    return {
        item_id: itemId,
        shipping_price: itemShippingCostAsFloat
    };
};

TestPresenter.prototype.showFreeItemShippingCost = function(itemId){

    return {
        item_id: itemId,
        shipping_price: 'Es gratis vieja!'
    };
};

module.exports = TestPresenter;
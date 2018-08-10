/**
 * @param {ItemShippingCostResponse} response
 * @implements {ItemShippingCostRepresentation}
 * @constructor
 */
function ItemShippingCostResult(response) {

    this._response = response;
}

ItemShippingCostResult.prototype.showItemShippingCost = function(itemId, shippingCostAsFloat) {

    return this._response.renderItemWithShippingCost({
        item_id: itemId,
        shipping_cost: shippingCostAsFloat
    });
};

ItemShippingCostResult.prototype.showFreeItemShippingCost = function(itemId) {

    return this._response.renderItemWithFreeShippingCost({
        item_id: itemId
    });
};

module.exports = ItemShippingCostResult;
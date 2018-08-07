/**
 * @implements {ItemShippingCost}
 * @param {string} itemId
 * @param {Number} costAsFloat
 * @constructor
 */
function PricedItemShippingCost(itemId, costAsFloat) {

    this._itemId = itemId;
    this._costAsFloat = costAsFloat;
}

/**
 *
 * @param {ItemShippingCostRenderer} renderer
 */
PricedItemShippingCost.prototype.renderIn = function(renderer){

    return renderer.showItemShippingCost(this._itemId, this._costAsFloat);
};

module.exports = PricedItemShippingCost;
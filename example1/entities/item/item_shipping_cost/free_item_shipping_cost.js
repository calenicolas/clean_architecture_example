/**
 * @implements {ItemShippingCost}
 * @constructor
 * @param {PricedItemShippingCost} itemShippingCost
 */
function FreeItemShippingCost (itemShippingCost) {

    this._itemShippingCost = itemShippingCost;
}

/**
 *
 * @param {ItemShippingCostRenderer} renderer
 */
FreeItemShippingCost.prototype.renderIn = function(renderer){

    return renderer.showFreeItemShippingCost(this._itemShippingCost._itemId);
};

module.exports = FreeItemShippingCost;
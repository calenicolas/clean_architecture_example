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
 * @param {ItemShippingCostRepresentation} representation
 */
FreeItemShippingCost.prototype.representIn = function(representation){

    return representation.showFreeItemShippingCost(this._itemShippingCost._itemId);
};

module.exports = FreeItemShippingCost;
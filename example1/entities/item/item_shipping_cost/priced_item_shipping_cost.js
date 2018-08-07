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
 * @param {ItemShippingCostRepresentation} representation
 */
PricedItemShippingCost.prototype.renderIn = function(representation){

    return representation.showItemShippingCost(this._itemId, this._costAsFloat);
};

module.exports = PricedItemShippingCost;
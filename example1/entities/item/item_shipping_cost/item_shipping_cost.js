/**
 *
 * @interface
 */
function ItemShippingCost () {}

/**
 *
 * @param {ItemShippingCostRepresentation} representation
 */
ItemShippingCost.prototype.representIn = function(representation){};

module.exports = ItemShippingCost;
/**
 *
 * @interface
 */
function ItemShippingCost () {}

/**
 *
 * @param {ItemShippingCostRepresentation} representation
 */
ItemShippingCost.prototype.renderIn = function(representation){};

module.exports = ItemShippingCost;
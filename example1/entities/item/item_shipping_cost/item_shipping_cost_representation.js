/**
 * @interface
 */
function ItemShippingCostRepresentation(){}

/**
 *
 * @param {string} itemId
 * @param {Number} shippingCostAsFloat
 * @return {Object} Plain JSON
 */
ItemShippingCostRepresentation.prototype.showItemShippingCost = function(itemId, shippingCostAsFloat){};

/**
 *
 * @param {string} itemId
 * @return {Object} Plain JSON
 */
ItemShippingCostRepresentation.prototype.showFreeItemShippingCost = function(itemId){};
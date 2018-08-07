/**
 * @interface
 */
function ItemShippingCostRenderer(){}

/**
 *
 * @param {string} itemId
 * @param {Number} shippingCostAsFloat
 * @return {Object} Plain JSON
 */
ItemShippingCostRenderer.prototype.showItemShippingCost = function(itemId, shippingCostAsFloat){};

/**
 *
 * @param {string} itemId
 * @return {Object} Plain JSON
 */
ItemShippingCostRenderer.prototype.showFreeItemShippingCost = function(itemId){};
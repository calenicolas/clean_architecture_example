class FreeItemShippingCost {

    constructor(itemShippingCost){

        this._itemShippingCost = itemShippingCost;
    }

    /**
     *
     * @param {ItemShippingCostRepresentation} representation
     */
    renderIn(representation){

        return representation.showFreeItemShippingCost(this._itemShippingCost._itemId);
    }
}

module.exports = FreeItemShippingCost;
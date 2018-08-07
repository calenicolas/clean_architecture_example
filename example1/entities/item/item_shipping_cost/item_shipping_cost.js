class ItemShippingCost {

    constructor(itemId, costAsFloat){

        this._itemId = itemId;
        this._costAsFloat = costAsFloat;
    }

    /**
     *
     * @param {ItemShippingCostRepresentation} representation
     */
    renderIn(representation){

        return representation.showItemShippingCost(this._itemId, this._costAsFloat);
    }
}

module.exports = ItemShippingCost;
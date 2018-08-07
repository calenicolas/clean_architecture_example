class ItemShippingCost {

    constructor(itemId, costAsFloat){

        this._itemId = itemId;
        this._costAsFloat = costAsFloat;
    }

    /**
     *
     * @param {ItemShippingCostRenderer} renderer
     */
    renderIn(renderer){

        return renderer.showItemShippingCost(this._itemId, this._costAsFloat);
    }
}

module.exports = ItemShippingCost;
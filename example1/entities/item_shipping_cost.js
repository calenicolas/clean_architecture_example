class ItemShippingCost {

    constructor(itemId, costAsFloat){

        this._itemId = itemId;
        this._costAsFloat = costAsFloat;
    }

    renderIn(renderer){

        return renderer.showItemShippingCost(this._itemId, this._costAsFloat);
    }
}

module.exports = ItemShippingCost;
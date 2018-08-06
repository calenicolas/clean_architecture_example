class FreeItemShippingCost {

    constructor(itemShippingCost){

        this._itemShippingCost = itemShippingCost;
    }

    renderIn(renderer){

        return renderer.showFreeItemShippingCost(this._itemShippingCost._itemId);
    }
}

module.exports = FreeItemShippingCost;
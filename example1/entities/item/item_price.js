
class ItemPrice {

    constructor(priceAsFloat){

        this._priceAsFloat = priceAsFloat;
    }

    isHigherOrEqualThan(anotherItemPrice){

        return this._priceAsFloat >= anotherItemPrice._priceAsFloat;
    }
}

module.exports = ItemPrice;
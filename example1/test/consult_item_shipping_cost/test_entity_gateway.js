/**
 * @implements {ShowItemShippingCostEntityGateway}
 */
class TestEntityGateway {

    findItemByRequest(consult){

        return new Promise(resolve => {

            return resolve(this._item);
        });
    }

    findBuyerByRequest(consult){

        return new Promise(resolve => {

            return resolve(this._buyer);
        });
    }

    /**
     *
     * @param {Item} item
     */
    mockItem(item){
        this._item = item;
    }

    /**
     *
     * @param {Buyer} buyer
     */
    mockBuyer(buyer){
        this._buyer = buyer;
    }
}

module.exports = TestEntityGateway;
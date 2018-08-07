/**
 * @implements {ShowItemShippingCostEntityGateway}
 */
function TestEntityGateway() {

}

TestEntityGateway.prototype.findItemByRequest = function(consult){

    return new Promise(resolve => {

        return resolve(this._item);
    });
};

TestEntityGateway.prototype.findBuyerByRequest = function(consult){

    return new Promise(resolve => {

        return resolve(this._buyer);
    });
};

/**
 *
 * @param {Item} item
 */
TestEntityGateway.prototype.mockItem = function(item){

    this._item = item;
};

/**
 *
 * @param {Buyer} buyer
 */
TestEntityGateway.prototype.mockBuyer = function(buyer){

    this._buyer = buyer;
};

module.exports = TestEntityGateway;
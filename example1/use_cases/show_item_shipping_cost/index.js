
const ItemShippingCostResult = require('./item_shipping_cost_result');

/**
 * @implements {ShowItemShippingCostUseCase}
 * @param {ShowItemShippingCostEntityGateway} entityGateway
 * @constructor
 */
function ShowItemShippingCost(entityGateway){


    this._entityGateway = entityGateway;
}

ShowItemShippingCost.prototype.execute = function(request, response){

    return Promise.parallel({
        item: this._entityGateway.findItemByRequest(request),
        buyer: this._entityGateway.findBuyerByRequest(request)
    })
    .then(results => {

        const buyer = results.buyer;
        const item = results.item;

        return buyer.asksForItemShippingCost(item);
    })
    .then(itemShippingCost => {

        return itemShippingCost.representIn(
            new ItemShippingCostResult(response)
        );
    });
};

module.exports = ShowItemShippingCost;
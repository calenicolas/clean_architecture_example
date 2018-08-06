
/**
 *
 * @implements {ShowItemShippingCostUseCase}
 */
class ShowItemShippingCost {

    /**
     *
     * @param {ShowItemShippingCostEntityGateway} entityGateway
     */
    constructor(entityGateway) {

        this._entityGateway = entityGateway;
    }

    execute(request, response){

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

            return response.renderItemShippingCost(itemShippingCost);
        });
    }
}

module.exports = ShowItemShippingCost;
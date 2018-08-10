/**
 * @implements {ItemShippingCostResponse}
 * @constructor
 */
function TestPresenter(){}

/**
 *
 * @param {item_id, shipping_cost} resultAsJSON
 * @return {{item_id: *, shipping_price: *}}
 */
TestPresenter.prototype.renderItemWithShippingCost = function(resultAsJSON){

    return {
        item_id: resultAsJSON.item_id,
        message: 'Pagas '.concat(resultAsJSON.shipping_cost).concat(' por el envío del item'),
        price: resultAsJSON.shipping_cost
    };
};

/**
 *
 * @param {item_id, shipping_cost} resultAsJSON
 * @return {{item_id: *, message: string, price: number}}
 */
TestPresenter.prototype.renderItemWithFreeShippingCost = function(resultAsJSON){

    return {
        item_id: resultAsJSON.item_id,
        message: 'Es gratis vieja!',
        price: 0
    };
};

module.exports = TestPresenter;
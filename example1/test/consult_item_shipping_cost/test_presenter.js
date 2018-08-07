/**
 * @implements {ItemShippingCostResponse}
 * @implements {ItemShippingCostRenderer}
 * @implements {ItemFreeShippingCostRenderer}
 */
class TestPresenter {

    renderItemShippingCost(itemShippingCost) {

        return itemShippingCost.renderIn(this);
    }

    showItemShippingCost(itemId, itemShippingCostAsFloat){

        return {
            item_id: itemId,
            shipping_price: itemShippingCostAsFloat
        };
    }

    showFreeItemShippingCost(itemId){

        return {
            item_id: itemId,
            shipping_price: 'Es gratis vieja!'
        };
    }
}

module.exports = TestPresenter;
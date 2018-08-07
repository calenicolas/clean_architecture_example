describe("shows the item's shipping cost for a buyer", function() {

    const should = require('should');

    const ShowItemShippingCostUseCase = require('../../use_cases/show_item_shipping_cost');

    const TestEntityGateway = require('./test_entity_gateway');

    const TestRequest = require('./test_request');
    const TestPresenter = require('./test_presenter');

    const Buyer = require('../../entities/buyer/buyer');
    const Item = require('../../entities/item/item');

    const itemId = 'MLX12345678';
    const userId = '5678902123';

    it('should show free shipping for buyers with loyalty level 2 and item with price ' +
        'higher than $1200', function(done) {

        const testEntityGateway = new TestEntityGateway();
        testEntityGateway.mockBuyer(new Buyer());
        testEntityGateway.mockItem(new Item({
            id: itemId,
            price: 1300,
            shipping_price: 500
        }));

        const useCase = new ShowItemShippingCostUseCase(
            testEntityGateway
        );

        useCase
            .execute(new TestRequest(itemId, userId), new TestPresenter())
            .then(renderedUseCaseResult => {

                should(renderedUseCaseResult).be.eql({
                    item_id: itemId,
                    shipping_price: 'Es gratis vieja!'
                });

                done();
            })
            .catch(done);
    });

    it('should show shipping with cost for users with loyalty level 2 and item with price ' +
        'lower than $1200', function(done) {

        const testEntityGateway = new TestEntityGateway();
        testEntityGateway.mockBuyer(new Buyer());
        testEntityGateway.mockItem(new Item({
            id: itemId,
            price: 1100,
            shipping_price: 500
        }));

        const useCase = new ShowItemShippingCostUseCase(
            testEntityGateway
        );

        useCase
            .execute(new TestRequest(itemId, userId), new TestPresenter())
            .then(renderedUseCaseResult => {

                should(renderedUseCaseResult).be.eql({
                    item_id: itemId,
                    shipping_price: 500
                });

                done();
            })
            .catch(done);
    });
});
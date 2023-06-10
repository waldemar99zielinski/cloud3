module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:productID, cmd:getProductPrice', getProductPrice);

    //To DO: add the pattern functions and describe the logic inside the function
    function getProductPrice(msg, respond) {
        const product = mockData.find (compare => compare.product_id === msg.product_id); 
        if(product) {
            var productPRICE = product.product_price;
            respond(null,{result : productPRICE});
        }
        else {
            respond(null, {result : -1});
        }
    }
}
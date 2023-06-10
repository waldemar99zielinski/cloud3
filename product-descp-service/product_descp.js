module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', getProductURL);
    this.add('role:product,cmd:getProductName', getProductName);


    //To DO: add the pattern functions and describe the logic inside the function
    function getProductURL(msg, respond) {
        const product = mockData.find (compare => compare.product_id === msg.product_id); 
        if(product) {
            var productURL = product.product_url;
            respond(null,{result : productURL});
        }
        else {
            respond(null, {result : -1});
        }
    }

    function getProductName(msg, respond) {
        const product = mockData.find (compare => compare.product_id === msg.product_id); 
        if(product) {
            var productName = product.product_name;
            respond(null, {result : productName});
        }
        else {
            respond(null, {result : -1});
        }
    }

}
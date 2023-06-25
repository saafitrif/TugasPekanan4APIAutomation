const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token="";


describe("Products - Add Product", function()
{
    //Test Case 3 (Success Add Product)
    it ("TC_3_Success Add Product ",async function(){
        const response = await request.post("/products")
        .set("Authorization", "Bearer" + token)
        .send
            (
                {
                category_id : "811f547e-a24e-4f94-bfe1-b7ed7d11c03f",
                code: "A314ASDDFIER3432",
                name: "taro",
                price: "3500",
                cost: "3000",
                stock: "5"
                } 
            );
            //productID=response.data.productId;
            expect(response.status).to.eql(200);
            expect(response.data.name).to.eql("taro");

        });
}
);
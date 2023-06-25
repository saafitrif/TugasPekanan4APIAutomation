const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token="";

describe("Authorization - Registration", function()
{
    //Test Case 1 (Success Register)
    it ("TC_1_Success Register ",async function(){
        const response = await request.post("/registration")
        .send
            (
                {
                    name: "Toko Berkah",
                    email: "sample@ex.com",
                    password: "123adsfadf@"
                 } 
            );
            expect(response.status).to.eql(201);
            token = response.body.data.accessToken;

        });
    
    //Test Case 2 (Failed Register)
    it ("TC_2_Failed Register",async function(){
        const response = await request.post("/registration")
        .send
            (
                {
                    name: "",
                    email: "sample@ex.com",
                    password: "123adsfadf@"
                 }
                 
            );
            expect(response.status).to.eql(400);

        });
}
);
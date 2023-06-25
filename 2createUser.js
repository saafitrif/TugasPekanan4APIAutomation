const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token = "";

describe("User - Create User", function()
{
    //Test Case 3 (Success Create User)
    it ("TC_3_Success Create User ",async function(){
        const response = await request
        .post("/users")
        .set("Authorization", "Bearer" + token)
        .send
            (
                {
                    "name": "Kasir 1",
                    "email": "kasir1@ex.com",
                    "password": "kasir1234@"
                 } 
            );

            expect(response.status).to.eql(201);
            expect(response.body.data.name).to.equal("Kasir 1");
            expect(response.body.data.email).to.equal("kasir1@ex.com");

        });
    
    //Test Case 4 (Failed Create User)
    it ("TC_4_Failed Create User",async function(){
        const response = await request
        .post("/users")
        .set("Authorization", "Bearer")
        .send
            (
                {
                    "name": "",
                    "email": "kasir1@ex.com",
                    "password": "kasir123"
                 }
                 
            );
            expect(response.status).to.eql(401);

        });
}
);
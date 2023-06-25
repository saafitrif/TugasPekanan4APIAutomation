const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;


describe("User - Create User", function()
{
    //Test Case 3 (Success Create User)
    it ("TC_3_Success Create User ",async function(){
        const response = await request.post("/users")
        .send
            (
                {
                    "name": "Toko Berkah",
                    "email": "sample@ex.com",
                    "password": "123adsfadf@"
                 } 
            );
            expect(response.status).to.eql(201);

        });
    
    //Test Case 4 (Failed Create User)
    it ("TC_4_Failed Create User",async function(){
        const response = await request.post("/users")
        .send
            (
                {
                    "name": "",
                    "email": "sample@ex.com",
                    "password": "123adsfadf@"
                 }
                 
            );
            expect(response.status).to.eql(400);

        });
}
);
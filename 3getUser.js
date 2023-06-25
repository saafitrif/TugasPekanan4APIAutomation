const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token = "";
var userId = "";

describe("User - Get User Detail", function()
{
    it ("TC_5_Succes Get User Detail", async function(){
        const response = await request
            .get("/users/"+userId)
            .set("Authorization", "Bearer "+token)
            .send();
            
                expect(response.status).to.eql(200);
            });

    it ("TC_6_Failed Get User Detail", async function(){
        const response = await request
            .get("/users/"+userId)
            .set("Authorization", "Bearer "+token)
            .send({});
                expect(response.status).to.eql(404);
            });
}
);

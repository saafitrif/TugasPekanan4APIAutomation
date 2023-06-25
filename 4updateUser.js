const request = require("supertest")("https://kasir-api.belajarqa.com");
const expect = require("chai").expect;
var token = "";
var userId = "";

describe("User - Update User", function()
{
    it ("TC_7_Succes Update User", async function(){
        const response = await request
            .get("/users/"+ userId)
            .set("Authorization", "Bearer "+token)
            .send(
                "name": "update-user",
                "email": "user@example.com"
            );
                expect(response.status).to.eql(200);
            });

    it ("TC_8_Failed Update User", async function(){
        const response = await request
            .get("/users/x1x2"+ userId)
            .set("Authorization", "Bearer "+token)
            .send(
                "name": "update-user",
                "email": "user@example.com"
            );
                expect(response.status).to.eql(404);
            });
}
);
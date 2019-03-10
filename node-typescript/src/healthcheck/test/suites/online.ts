import { expect } from "chai";
import { describe } from "mocha";
import { request, Response } from "test/helpers/request";

const Online = () => {
    describe("when online", async () => {
        let response: Response;
        beforeEach(async () => {
            response = await request().get("/healthcheck").send();
        });

        it("returns status 200", async () => {
            expect(response.status).to.be.equal(200);
        });

        it("returns the current semantic version", async () => {
            const { version } = response.body;
            const simpleSemver = /^v\d+\.\d+.\d+$/;

            expect(version).to.match(simpleSemver);

        });
    });
};

export default Online;

import chai from "chai";
import chaiHttp from "chai-http";
import app from "src/server";

export { Response, Request } from "superagent";

chai.use(chaiHttp);

export const request = () => chai.request(app);

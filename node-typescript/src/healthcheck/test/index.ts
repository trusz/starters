import { describe } from "mocha";
import Online from "./suites/online";

const HealthCheck = () => {
    describe("Feature: Health Check", async () => {
        Online();
    });
};

export default HealthCheck;

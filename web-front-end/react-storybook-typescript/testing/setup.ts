import { before } from 'mocha'
import * as assert from 'assert'
import { startBrowser } from './index'
import * as wait from './wait'
import { toDefault } from './util'


before(async () => {
    await waitForDevServer()
})

afterEach(async () => {
    const b = await startBrowser()
    await b.closeAllPages()

})


async function waitForDevServer(): Promise<void> {

    const timeoutMS = parseInt(toDefault(process.env.TEST_DEV_SERVER_TIMEOUT, "10000"))
    const host = toDefault(process.env.TEST_DEV_SERVER_HOST, "localhost")
    const port = parseInt(toDefault(process.env.TEST_DEV_SERVER_PORT, "6006"))

    console.log(`waiting for UI at ${host}:${port}`);

    try {
        await wait.forHostPort(host, port, timeoutMS)
    } catch (err) {
        console.error(err)
        assert.fail("server not started in time")
    }
}


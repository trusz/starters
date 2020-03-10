import { before, after } from 'mocha'
import * as assert from 'assert'
import { startBrowser } from './index'
import * as wait from './wait'


before(async () => {
    try {
        const timeoutMS = 10 * 1000
        await wait.forHostPort("localhost", 6006, timeoutMS)
    } catch (err) {
        console.error(err)
        assert.fail("server not started in time")
    }
})

afterEach(async () => {
    const b = await startBrowser()
    await b.closePage()

})

after(async () => {
    const b = await startBrowser()
    await b.close()
})

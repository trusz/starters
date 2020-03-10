import { before, after } from 'mocha'
import { startBrowser } from './index'

before(() => {

    console.log("before all");
})

after(async () => {
    const b = await startBrowser()
    await b.close()
    console.log("after all");
})

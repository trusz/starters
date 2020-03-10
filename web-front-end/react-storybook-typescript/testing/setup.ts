import { before, after } from 'mocha'
import { startBrowser } from './index'

before(() => {

})

afterEach(async () => {
    const b = await startBrowser()
    await b.closePage()

})

after(async () => {
    const b = await startBrowser()
    await b.close()
})

import { describe, it } from 'mocha'
import { expect } from 'chai'
import { startBrowser } from 'test-helpers'

describe("Button", () => {
    it("reacts to click", async () => {
        const buttonSelector = 'button[access-id="button"]'
        const textSelector = '[access-id="text-target"]'
        const isHeadless = true

        const b = await startBrowser(isHeadless)
        await b.open('http://localhost:6006/iframe.html?id=components-button--test-on-click')
        await b.click(buttonSelector)

        const text = await b.fetchText(textSelector)
        expect(text).to.be.equal("clicked")

    })
})

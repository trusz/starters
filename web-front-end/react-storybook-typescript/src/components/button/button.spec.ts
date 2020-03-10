import { describe, it } from 'mocha'
import { expect } from 'chai'
import { startBrowser } from 'testing'

describe("Button", () => {
    describe('click action', () => {
        const clickTests: TestCase[] = [
            {
                desc: 'has effect',
                expectedText: 'clicked'
            },

        ]

        clickTests.forEach(testClick)

        function testClick(tc: TestCase) {
            it(tc.desc, async () => {
                const buttonSelector = 'button[access-id="button"]'
                const textSelector = '[access-id="text-target"]'
                const isHeadless = false

                const b = await startBrowser(isHeadless)
                await b.open('http://localhost:6006/iframe.html?id=components-button--test-on-click')
                await b.click(buttonSelector)

                const text = await b.fetchText(textSelector)
                expect(text).to.be.equal(tc.expectedText)
            })
        }

        interface TestCase {
            desc: string,
            expectedText: string,
        }

    })
})

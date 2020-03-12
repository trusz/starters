import { describe, it } from 'mocha'
import { expect } from 'chai'
import { startBrowser, baseUrl } from 'testing'

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

                const b = await startBrowser(0)
                await b.open(`${baseUrl}/iframe.html?id=components-button--test-on-click`)
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


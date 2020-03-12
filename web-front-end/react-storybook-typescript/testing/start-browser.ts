import { Browser, Chrome } from './browser'

let browser: Browser;

export async function startBrowser(slowMo: number = 0): Promise<Browser> {
    if (!browser) {
        const puppeteerUrl = process.env.PUPPETEER_URL as string
        const CI = process.env.CI as string
        const isHeadless = !CI || (CI === "true")

        browser = await Chrome.New(isHeadless, puppeteerUrl, slowMo)
    }

    return browser
}

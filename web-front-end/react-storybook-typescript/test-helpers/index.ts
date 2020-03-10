import { Browser, Chrome } from './browser'

let browser: Browser;

export async function startBrowser(isHeadless?: boolean): Promise<Browser> {
    if (!browser) {
        browser = await Chrome.New(isHeadless)
    }

    return browser
}
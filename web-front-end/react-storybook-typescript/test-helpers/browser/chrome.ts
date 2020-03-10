import * as puppeteer from 'puppeteer'

export class Chrome {
    private browser: puppeteer.Browser
    private page: puppeteer.Page
    private isHeadless: boolean

    public static async New(isHeadless?: boolean): Promise<Chrome> {
        const ch = new Chrome(isHeadless)
        ch.browser = await puppeteer.launch({ headless: ch.isHeadless });
        ch.page = await ch.browser.newPage();

        return ch
    }

    private constructor(isHeadless: boolean = true) {
        this.isHeadless = isHeadless
    }

    public async sleep(ms: number): Promise<void> {
        await this.page.waitFor(ms)
    }

    public async open(url: string): Promise<void> {
        await this.page.goto(url)

    }

    public async close(): Promise<void> {
        await this.browser.close()
    }

    public async click(selector: string): Promise<void> {
        await this.waitFor(selector)
        return this.page.click(selector)
    }

    public async fetchText(selector: string): Promise<string> {
        await this.waitFor(selector)
        const textNode = await this.page.$(selector)
        const text = await this.page.evaluate((textNode) => textNode.innerText, textNode);

        return text
    }

    private async waitFor(selector: string): Promise<void> {
        await this.page.waitFor(selector)
    }
}
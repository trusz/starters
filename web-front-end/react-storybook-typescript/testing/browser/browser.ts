export interface Browser {
    // Basics
    open(url: string): Promise<void>
    sleep(ms: number): Promise<void>
    closePage(): Promise<void>
    closeAllPages(): Promise<void>
    close(): Promise<void>

    // Actions
    click(selector: string): Promise<void>

    // 
    fetchText(selector: string): Promise<string>
}

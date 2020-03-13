import * as net from 'net'

export function forHostPort(host: string, port: number, timeout: MS): Promise<void> {

    const retryDelay: MS = 300

    return new Promise((resolve, reject) => {

        const start = new Date()

        net
            .createConnection(port, host)
            .on("connect", () => {
                resolve()
            })
            .on("error", async () => {
                await sleep(retryDelay)
                const end = new Date()
                const delta = end.getTime() - start.getTime()
                const remaining = timeout - delta

                try {
                    await forHostPort(host, port, remaining)
                    resolve()
                } catch (err) {
                    console.error(err)
                    reject()
                }
            });


    })

}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

type MS = number
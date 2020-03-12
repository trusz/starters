import { toDefault } from './util'

const host = toDefault(process.env.TEST_DEV_SERVER_HOST, "localhost")
const port = parseInt(toDefault(process.env.TEST_DEV_SERVER_PORT, "6006"))

export const baseUrl = `http://${host}:${port}`

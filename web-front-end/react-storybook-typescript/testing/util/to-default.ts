export function toDefault(value: string | undefined, defaultValue: string): string {

    if (!value) {
        return defaultValue
    }

    return value
}

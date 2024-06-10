export function formatToken(value: number) {
    return value.toLocaleString('en', {
        minimumFractionDigits: 4,
    })
}

export function formatUSD(value: number) {
    return value.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    })
}
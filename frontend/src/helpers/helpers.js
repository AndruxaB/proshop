export async function delayMs(ms) {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(ms);
}

export function isObjEmpty(obj) {
    if (Object.keys(obj).length === 0) return true;
}

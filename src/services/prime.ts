let primecache: number[] = [2]

export const getPrimesUpTo = (x: number, cache: number[]): number[] => {
    const numArr = Array.from({length: x - 1}, (num, i) => ({ value: i + 2, prime: i + 2 > cache[cache.length - 1] || cache.includes(i + 2) }))
    const maxRoot = Math.ceil(Math.pow(x, 0.5) + 1)
    for(let y = 2; y < maxRoot; y++) {
        if(numArr[y - 2].prime === false) {
            continue
        }
        let factor = 2
        while(y * factor <= x) {
            numArr[y * factor - 2].prime = false
            factor += 1
        }
    }
    const result = numArr.filter(e => e.prime).map(e => e.value)
    return result
}

export const isPrime = (x: number) => {
    if(x <= primecache[primecache.length - 1] && primecache.includes(x)) {
        return true
    }
    if(x < primecache[primecache.length - 1]) {
        return false
    }
    if(x < 2) {
        return false
    }
    const root = Math.floor(Math.pow(x, 0.5))
    const primesToRoot: number[] = getPrimesUpTo(root, primecache)
    if(primesToRoot.length > primecache.length) {
        primecache = primesToRoot
    }
    return primesToRoot.findIndex(prime => x % prime === 0) === -1
}

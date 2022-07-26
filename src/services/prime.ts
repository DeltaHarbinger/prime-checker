let primecache: number[] = [2]

/**
 * Generates a list of prime numbers up to the input. A cache may be used to speed up the process.
 * 
 * Uses Sieve of Eratosthenes algorithm to quickly get all primes in the range 
 *
 * @param x - The number up to which primes will be generated
 * @returns An array of prime numbers up to the input
 *
 */

export const getPrimesUpTo = (x: number, cache: number[]): number[] => {
    // Generates a list of all prime numbers up to 
    // TODO: Optimize usage of cache. Maybe start doing multiple elimination after cache's highest value
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

/**
 * Determines if the input is a prime number.
 *
 * @remarks
 * This method depends on `primecache` to work, and a function to get all primes up to a point.
 *
 * @param x - The first input number
 * @returns Whether or not `x` is a prime number
 *
 */
export const isPrime = (x: number) => {
    // No numbers less than two may be prime
    if(x < 2) {
        return false
    }
    // Checks if the number could be in cache. If it is, it's a prime number
    if(x <= primecache[primecache.length - 1] && primecache.includes(x)) {
        return true
    }
    // If it isn't in the cache and is less than the highest number in the cache, it can't be prime
    if(x < primecache[primecache.length - 1]) {
        return false
    }
    // Checks cache before attempting to find more potential prime factors
    const root = Math.floor(Math.pow(x, 0.5))
    for(const num of primecache) {
        if(x % num === 0) {
            return false
        }
        if(num > root) {
            break
        }
    }
    // Find all primes up to the square root of the input
    const primesToRoot: number[] = getPrimesUpTo(root, primecache)
    // Updates the cache if the prime list is larger
    if(primesToRoot.length > primecache.length) {
        primecache = primesToRoot
    }
    // Checks if the input is divisible by any prime number up to the root
    return primesToRoot.findIndex(prime => x % prime === 0) === -1
}

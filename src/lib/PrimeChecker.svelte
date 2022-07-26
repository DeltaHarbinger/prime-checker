<script lang="ts">
import { isPrime, getPrimesUpTo } from "@/services/prime";

let primeInput: number | null = 0

let primeTime: number = null

let inputIsPrime: boolean = null

let logit = () => console.log(primeInput)

$: {
    let start = window.performance.now()
    inputIsPrime = isPrime(primeInput ?? 0)
    let end = window.performance.now()
    primeTime = (end - start)
}

const onKeyPressed = (event: KeyboardEvent) => {
    const keyPressed: string = event.key
    if(keyPressed === '.' || keyPressed === 'e') {
        event.preventDefault()
    }
}

</script>

<input type="number" aria-label="prime-input" on:change={logit} inputmode="numeric" on:keydown={onKeyPressed} pattern="[0-9]" name="prine-input" id="primeInput" bind:value={primeInput} />
{#if inputIsPrime !== null}
    <p aria-label="prime-check-result" class:confirm={inputIsPrime} class:reject={!inputIsPrime} class="result-text">{inputIsPrime ? "That's a prime number!" : "No, that's not a prime number!"}</p>
{/if}
{#if primeTime !== null}
    <p>Result took {primeTime} milliseconds</p>
{/if}
{#if primeInput && !Number.isSafeInteger(primeInput)}
    <p class:reject={true}>We may have issues checking large numbers. Results beyond this point could be inaccurate.</p>
{/if}

<style scoped>
#primeInput {
    font-size: 1.5em;
}

.confirm {
    color: #008800;
}

.reject {
    color: #b00202;
}

.result-text {
    font-size: 1.5em;
}
</style>
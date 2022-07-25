<script lang="ts">
import PrimeChecker from "@/lib/PrimeChecker.svelte";
</script>

<main>
  <div id="primeContainer">
    <h1>Quick Prime Check</h1>
    <PrimeChecker />
  </div>
</main>

<style>
:root {
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

main {
  height: 60vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  margin: 0px;
  font-size: 3em;
  margin-bottom: 1em;
}
</style>
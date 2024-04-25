<script lang="ts">
import PrimeChecker from "@/lib/PrimeChecker.svelte";
import PrimeCache from "./lib/PrimeCache.svelte";
</script>

<main>
  <div>
    <div id="primeContainer">
      <h1>Quick Prime Check</h1>
      <PrimeChecker />
    </div>
    <div id="methodInfo">
      This application uses <a href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes">Sieve of Eratosthenes</a>
      and a locally stored cache of discovered primes to determine if your number is prime. 
    </div>
    <div id="primeCache">
      <PrimeCache />
    </div>
  </div>
  <a id="repoLink" href="https://github.com/DeltaHarbinger/prime-checker">
    <img id="githubImage" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github-logo">
  </a>
  <footer>
    <a id="profileLink" href="http://github.com/DeltaHarbinger">
      © DeltaHarbinger
    </a>
  </footer>
</main>

<style>
:root {
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

main {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  max-height: 90vh;
}

#primeContainer {
  max-height: 60vh;
}

#methodInfo {
  margin-top: 2em;
  margin-bottom: 2em;
}

#primeCache {
  max-height: 30vh;
  overflow-y: scroll;
}

h1 {
  margin: 0px;
  font-size: 3em;
  margin-bottom: 1em;
}

#githubImage {
  height: 4em;
}

#repoLink {
  position: fixed;
  bottom: 2em;
  right: 2em;
}

footer {
  padding-top: .5em;
  padding-bottom: .5em;
  position: fixed;
  width: 100%;
  bottom: 0;
  font-size: 1.25em;
}

a {
  text-decoration: none;
  color: black;
}

@media only screen and (min-width: 820px) {
  footer {
    text-align: left;
  }
  
  #profileLink {
    padding-left: 2em;
  }
}
</style>
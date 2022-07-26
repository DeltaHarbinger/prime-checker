<script lang="ts">
import PrimeChecker from "@/lib/PrimeChecker.svelte";
</script>

<main>
  <a id="repoLink" href="https://github.com/DeltaHarbinger/prime-checker">
    <img id="githubImage" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github-logo">
  </a>
  <div id="primeContainer">
    <h1>Quick Prime Check</h1>
    <PrimeChecker />
  </div>
  <footer>
    <a href="http://github.com/DeltaHarbinger">
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

#githubImage {
  height: 4em;
}

#repoLink {
  position: absolute;
  bottom: 2em;
  right: 2em;
}

footer {
  padding-top: .5em;
  padding-bottom: .5em;
  position: absolute;
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
    padding-left: 2em;
  }
}
</style>
<script>
import { primecache } from "@/services/prime";

</script>

<div class="relative">
    <p class="title">Cached prime numbers</p>
    <div id="primeCacheGrid">
        {#each $primecache as prime}
            <span>{prime}</span>
        {/each}
    </div>
</div>

<style scoped>
#primeCacheGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
}

.relative {
    position: relative;
}

.title {
    position: sticky;
    top: 0;
    background-color: white;
}
</style>
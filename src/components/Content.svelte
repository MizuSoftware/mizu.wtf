<script lang="ts">
  import { fly } from "svelte/transition";

  export let name: string;
</script>

<div class="hero min-h-screen">
  <div class="hero-content justify-center text-center flex-col">
    <h1
      class="text-3xl text-accent my-3"
      transition:fly={{ y: -20, duration: 300 }}
    >
      {name}
    </h1>
    <slot />
  </div>
</div>

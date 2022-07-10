<script lang="ts">
  import { fly } from "svelte/transition";

  import Content from "../components/Content.svelte";
  import Wave from "../components/home/Wave.svelte";
</script>

<svelte:head>
  <title>Mizu - Home</title>
</svelte:head>

<Wave>
  <div class="hero min-h-screen">
    <div class="hero-content lg:flex-row flex-col">
      <img
        alt="Mizu's screenshot"
        class="max-w-3xl rounded-lg shadow-2xl"
        src="https://www.mcmiddleearth.com/community/attachments/6znif0x-jpg.1940/"
        transition:fly={{ y: -50, duration: 500 }}
      />
      <h1
        class="ml-10 text-base-100 text-3xl font-bold w-96"
        transition:fly={{ y: 50, duration: 500, delay: 300 }}
      >
        It is time to <span class="text-info">socialize</span>,
        <span class="text-error">customize</span> Minecraft clients as
        <span class="uppercase text-accent">you</span> wish.
      </h1>
    </div>
  </div>
</Wave>

<div class="hero min-h-screen">
  <div class="hero-content lg:flex-row flex-col">
    <div class="flex flex-col text-right">
      <h1
        class="mr-10 text-accent text-3xl font-bold w-96"
        transition:fly={{ y: 50, duration: 500, delay: 300 }}
      >
        Play with your friends
      </h1>
      <p class="mt-10 mr-10 text-xl">
        Whether you simply want your friends to not be targeted no matter which
        account they play on or if you want to share coordinates/join the server
        they are currently playing on.
      </p>
    </div>

    <img
      alt="In-game screenshot"
      class="max-w-3xl rounded-lg shadow-2xl"
      src="https://i.pinimg.com/originals/20/b8/dd/20b8dda6ae7a05a9eb80ce271f9dc9d5.jpg"
      transition:fly={{ y: -50, duration: 500 }}
    />
  </div>
</div>

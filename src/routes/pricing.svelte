<script lang="ts">
  import Content from "../components/Content.svelte";
  import { fly } from "svelte/transition";

  const plans = [
    {
      name: "Monthly",
      toast: "",
      price: "€9.99/month",
      pros: ["Access to the entire client"],
      cons: [],
    },
    {
      name: "Yearly",
      toast: "-20%",
      price: "€95.99/year",
      pros: ["Access to the entire client"],
      cons: [],
    },
  ];
</script>

<svelte:head>
  <title>Mizu - Pricing</title>
</svelte:head>

<Content name="Pricing">
  <p class="w-2/3 my-3" transition:fly={{ y: -20, duration: 300, delay: 100 }}>
    Access to Mizu requires an active subscription. An additional deposit of
    <b>€49.99</b> has to be done on the first payment.
  </p>

  <div class="flex gap-10 my-3">
    {#each plans as plan, i}
      <div
        class="indicator"
        transition:fly={{ y: -10, duration: 300, delay: 400 }}
      >
        {#if plan.toast}
          <span class="indicator-item badge badge-primary">{plan.toast}</span>
        {/if}

        <div class="card w-64 bg-base-200 shadow-xl">
          <div class="card-body">
            <h2 class="card-title justify-center">{plan.price}</h2>

            <div class="divider divider-vertical" />

            {#each plan.pros as pro}
              <p class="text-center">✓ {pro}</p>
            {/each}

            {#each plan.cons as con}
              <p class="text-center">× {con}</p>
            {/each}

            <div class="divider divider-vertical" />

            <div class="card-actions justify-center">
              <button class="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {#if i < plans.length - 1}
        <div class="divider divider-horizontal">OR</div>
      {/if}
    {/each}
  </div>
</Content>

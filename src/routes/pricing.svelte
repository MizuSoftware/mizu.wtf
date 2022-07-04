<script lang="ts">
    import {fly} from 'svelte/transition'
</script>

<svelte:head>
    <title>Mizu - Pricing</title>
</svelte:head>

<div class="hero min-h-screen">
    <div class="hero-content justify-center text-center flex-col">
        <h1 class="text-3xl text-accent" transition:fly={{ y: -20, duration: 300 }}>Pricing</h1>
        <p class="w-2/3 my-4" transition:fly={{ y: -20, duration: 300, delay: 100 }}>The client relies on a monthly
            payment
            system, when buying the client for the first time
            you have to pay a deposit of 49.99€ to get access to the JAR file.</p>
        <div class="flex gap-10">
            <div class="indicator" transition:fly={{ y: -10, duration: 300, delay: 400 }}>
                <span class="indicator-item badge badge-primary">new</span>
                <div class="card w-64 bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">9.99€/month</h2>
                        <div class="divider divider-vertical"></div>
                        <p class="text-center">✓ Access to the entire client</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider divider-horizontal">OR</div>
            <div class="indicator" transition:fly={{ y: -10, duration: 300, delay: 400 }}>
                <span class="indicator-item badge badge-primary">-20%</span>
                <div class="card w-64 bg-base-200 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title justify-center">95.99€/year</h2>
                        <div class="divider divider-vertical"></div>
                        <p class="text-center">✓ Access to the entire client</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-secondary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
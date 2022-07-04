<script lang="ts">
    import {fly} from 'svelte/transition'

    async function fetchMembers() {
        return await (await fetch("https://api.github.com/orgs/MizuSoftware/public_members")).json()
    }

    fetchMembers().then(console.log)
</script>

<div class="hero min-h-screen">
    <div class="hero-content justify-center text-center flex-col">
        <h1 class="text-3xl text-accent my-10" transition:fly={{ y: -20, duration: 300 }}>Team</h1>
        <div class="flex gap-10">
            {#await fetchMembers() then members}
                {#each members as member}
                    <div class="avatar flex-col">
                        <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt={member.login} src={member.avatar_url}/>
                        </div>
                        <p class="py-4 text-base-content text-xl">{member.login}</p>
                    </div>
                {/each}
            {/await}
        </div>
    </div>
</div>
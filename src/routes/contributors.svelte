<script lang="ts">
    import {fly} from 'svelte/transition'

    async function fetchMembers() {
        return await (await fetch("https://api.github.com/orgs/MizuSoftware/public_members")).json()
    }

    async function fetchUser(login: string) {
        return await (await fetch("https://api.github.com/users/" + login)).json()
    }
</script>

<svelte:head>
    <title>Mizu - Team</title>
</svelte:head>

<div class="hero min-h-screen">
    <div class="hero-content justify-center text-center flex-col">
        <h1 class="text-3xl text-accent my-10" transition:fly={{ y: -20, duration: 300 }}>Contributors</h1>
        <div class="flex gap-10">
            {#await fetchMembers() then members}
                {#each members as member}
                    {#await fetchUser(member.login) then user}
                        <div class="avatar flex-col">
                            <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt={user.name} src={user.avatar_url}/>
                            </div>
                            <div class="py-4 text-base-content w-32 flex-col">
                                <p class="text-xl">{user.name}</p>
                                <p class="text-base-content">{user.bio}</p>
                            </div>
                        </div>
                    {/await}
                {/each}
            {/await}
        </div>
    </div>
</div>
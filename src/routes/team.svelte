<script lang="ts">
  import Content from "../components/Content.svelte";
  import { fly } from "svelte/transition";

  const json = async (url: string): Promise<any> =>
    await (await fetch(url)).json();

  const fetchUsers = async () =>
    Promise.all(
      (
        await json("https://api.github.com/orgs/MizuSoftware/public_members")
      ).map(
        async (member: GitHubAPI.OrganizationMember) => await json(member.url),
      ),
    ) as unknown as GitHubAPI.User[];

  (async () => {
    console.log((await fetchUsers())[0]);
  })();
</script>

<svelte:head>
  <title>Mizu - Team</title>
</svelte:head>

<Content name="Team">
  <p class="w-2/3 my-3" transition:fly={{ y: -20, duration: 300, delay: 100 }}>
    A list of people who contributed to Mizu. Nothing of this could have been
    existing without them.
  </p>

  <div
    class="my-3 flex gap-16 flex-col md:flex-row"
    transition:fly={{ y: -10, duration: 300, delay: 400 }}
  >
    {#await fetchUsers()}
      <p>...</p>
    {:then users}
      {#each users as user}
        <div class="avatar flex-col">
          <div
            class="w-48 justify-center text-center rounded-full
                                    ring ring-primary ring-offset-base-100 ring-offset-2"
          >
            <img alt="{user.login} on GitHub.com" src={user.avatar_url} />
          </div>
          <div class="w-48 py-4 text-base-content">
            <a href={user.html_url} class="text-xl">{user.login}</a>

            <p class="text-sm italic">
              {#if user.name}
                aka <b>{user.name}</b>
              {:else}
                <br />
              {/if}
            </p>

            {#if user.bio}
              <p class="text-base-content">{user.bio}</p>
            {/if}
          </div>
        </div>
      {/each}
    {:catch err}
      <p>Error: {err.message}</p>
    {/await}
  </div>
</Content>

<script lang="ts">
    import {cn} from './utils';
    import {Motion} from 'svelte-motion';
    import FadeInDiv from './FadeInDiv.svelte';
    import {Badge} from "$lib/components/ui/badge";

    type Tab = {
        title: string;
        value: string;
        content?: string | any;
        short_description?: string | any;
    };

    export let propTabs: Tab[];
    export let containerClassName: string | undefined = undefined;
    export let activeTabClassName: string | undefined = undefined;
    export let tabClassName: string | undefined = undefined;
    export let contentClassName: string | undefined = undefined;

    let active: Tab = propTabs[0];
    let tabs: Tab[] = propTabs;

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        tabs = newTabs;
        active = newTabs[0];
    };

    let hovering = true;
</script>

<div
        class={cn(
		'm-24 no-visible-scrollbar relative flex w-full max-w-full flex-row items-center justify-start overflow-auto [perspective:1000px] sm:overflow-visible',
		containerClassName
	)}
>
    {#each propTabs as tab, idx (tab.title)}
        <button
                on:click={() => {
				moveSelectedTabToTop(idx);
			}}
                class={cn('relative rounded-xl px-4 py-2', tabClassName)}
                style="transform-style: preserve-3d;"
        >
            {#if active.value === tab.value}
                <Badge variant="outline" class="p-3 bg-[#0B68FD] hover:scale-110 text-white font-bold">
                    {tab.title}
                </Badge>
            {:else}
              <Badge variant="outline" class="text-primary p-3 hover:scale-110 font-bold">
                    {tab.title}
                </Badge>
            {/if}
        </button>
    {/each}
</div>
<FadeInDiv {tabs} {hovering} className={cn('overflow-y-hidden', contentClassName)}
           moveSelection="{moveSelectedTabToTop}"/>
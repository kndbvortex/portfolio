<script lang="ts">
    import {cn} from './utils';
    import {Motion} from 'svelte-motion';

    type Tab = {
        title: string;
        value: string;
        content?: any | undefined;
        short_description?: any | string;
    };

    export let className: string | undefined = undefined;
    export let tabs: Tab[];
    export let hovering: boolean | undefined;
    export let moveSelection: (index: number) => void;


    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };
</script>

<div class="relative h-full w-full m-5 ">
    {#each tabs as tab, idx (tab.value)}
        <Motion
                let:motion
                layoutId={tab.value}
                animate={{
				    scale: isActive(tab)? [0.9, 1]:1
			}}
        >
            <a
                    use:motion
                    style={`scale: ${1 - idx * 0.1}; top: ${hovering ? `${idx * -60}px` : '0px'}; z-index: ${-idx}; opacity: ${idx < 3 ? 1 - idx * 0.1 : 0};`}
                    class={cn('absolute left-0 top-0 h-full w-full p-0 cursor-pointer dark:border-white/95 hover:shadow-slate-300/50 hover:shadow-2xl', className)}
                    on:click={(e) => {e.preventDefault(); moveSelection(idx)}}
                    tabindex={idx}
                    href="/"
            >

                <div class="flex flex-col my-5 ">
                    <div role="heading" aria-level="3" class="text-2xl font-semibold leading-none tracking-tight">
                        {tab.title}
                    </div>
                    <p class="text-muted-foreground text-sm mt-2">
                        {tab.short_description}
                    </p>
                </div>
                <div class="overflow-auto h-[90%]">
                    {@html tab.content}
                </div>


            </a>
        </Motion>
    {/each}
</div>
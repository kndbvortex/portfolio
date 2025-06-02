<script lang="ts">
    import { Button as ButtonPrimitive } from "bits-ui";
    import { type Events, type Props, buttonVariants } from "./index.js";
    import { cn } from "$lib/utils.js";

    type $$Props = Props;
    type $$Events = Events;

    let className: $$Props["class"] = undefined;
    export let variant: $$Props["variant"] = "default";
    export let size: $$Props["size"] = "default";
    export let effect: $$Props["effect"] = undefined;
    export let icon: $$Props["icon"] = undefined;
    export let iconPlacement: $$Props["iconPlacement"] = 'left';
    export let builders: $$Props["builders"] = [];
    export { className as class };
</script>

<ButtonPrimitive.Root
    {builders}
    class={cn(buttonVariants({ variant, size, effect, className }))}
    type="button"
    {...$$restProps}
    on:click
    on:keydown
>
    {#if icon && iconPlacement === 'left'}
        {#if effect === 'expandIcon'}
            <div class="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
                <svelte:component this={icon} />
            </div>
        {:else}
            <svelte:component this={icon} />
        {/if}
    {/if}

    <slot />

    {#if icon && iconPlacement === 'right'}
        {#if effect === 'expandIcon'}
            <div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
                <svelte:component this={icon} />
            </div>
        {:else}
            <svelte:component this={icon} />
        {/if}
    {/if}
</ButtonPrimitive.Root>
<script>
    import Button from "$lib/Button.svelte";

    let {showModal = $bindable(), header, children, className} = $props();

    let dialog = $state(); // HTMLDialogElement

    $effect(() => {
        if (showModal) dialog.showModal();
    });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
        bind:this={dialog}
        onclose={() => (showModal = false)}
        onclick={(e) => { if (e.target === dialog) dialog.close(); }}
        class={className + " p-5 overflow-y-hidden dark:bg-neutral-800 w-[95%]"}

>
    <div>
        {@render header?.()}
        <hr class="dark:border-gray-50"/>
        <div class="overflow-auto h-[400px]">
            {@render children?.()}
        </div>
        <hr class="dark:border-gray-50"/>
        <!-- svelte-ignore a11y_autofocus -->
        <div class="flex items-center justify-center w-full py-5">
            <Button text="Close modal" class="flex items-center justify-center md:w-2/5 w-2/3 py-2"
                    onclick={() => dialog.close()}></Button>
        </div>
    </div>
</dialog>

<style>
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }

    dialog > div {
        padding: 1em;
    }

    dialog[open] {
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes zoom {
        from {
            transform: scale(0.95);
        }
        to {
            transform: scale(1);
        }
    }

    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

</style>

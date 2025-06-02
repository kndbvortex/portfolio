<script lang="ts">
    import {Button} from "$lib/components/ui/button/index.js";
    import {Input} from "$lib/components/ui/input/index.js";
    import {Label} from "$lib/components/ui/label/index.js";
    import {toast} from "svelte-sonner";
    import {LoaderCircleIcon} from "lucide-svelte";


    let name = '';
    let email = '';
    let message = '';
    let isLoading = false;
    let showSuccessModal = false;

    async function handleSubmit() {
        // Form validation
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        isLoading = true;

        try {
            // Step 1: Authenticate and get the token
            const loginResponse = await fetch(
                "https://farmadi.kndbvortex.cloud/api/v1/users/login/",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        username: "farmadi",
                        password: "root",
                    }),
                }
            );

            if (!loginResponse.ok) throw new Error("Login failed");

            const loginData = await loginResponse.json();
            const token = loginData.token;

            // Step 2: Send the contact request
            const contactResponse = await fetch(
                "https://farmadi.kndbvortex.cloud/api/v1/web/contacts/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({
                        customer_name: name,
                        customer_mail: "kamganguifo@gmail.com",
                        subject: "Contact Form Submission",
                        message: `Send by ${email} <br/> ${message}`,
                        date: new Date().toISOString(),
                    }),
                }
            );

            if (!contactResponse.ok) throw new Error("Failed to send message");

            // Step 3: Show success modal
            showSuccessModal = true;
            toast.success("I received your message and will get back to you soon.", {
                description: "",
                class: "!bg-green-500 !text-white [&>button]:hover:!bg-green-600",
                duration: 3000
            });
            console.log("Toast créer ")

            // Step 4: Clear the form
            name = '';
            email = '';
            message = '';

        } catch (error) {
            alert("An error occurred: " + error.message);
        } finally {
            isLoading = false;
        }
    }
</script>


<div class="grid gap-4 text-xs">
    <div class="text-2xl font-semibold">
        Contact
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <div class="grid gap-1">
            <Label for="first-name">Name</Label>
            <Input bind:value={name} class="focus-visible:ring-foreground/30" id="full_name" placeholder="Your name"
                   required/>
        </div>
        <div class="grid gap-1">
            <Label for="email">email</Label>
            <Input class="focus-visible:ring-foreground/30" bind:value={email} id="email" placeholder="Your email"
                   required/>
        </div>
    </div>
    <div class="grid gap-2">
        <Label for="message">Tell me about your project
        </Label>
        <textarea
                id="message"
                bind:value={message}
                placeholder="Tell me about your project..."
                class="h-32 mt-2 border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-foreground/30 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            </textarea>
    </div>
    {#if isLoading}
        <Button variant="secondary" disabled class="w-full m-auto rounded-lg uppercase hover:ring-black/90">
            <LoaderCircleIcon class="animate-spin"/>
            Sending ...
        </Button>
    {:else}
        <Button
                onclick={handleSubmit} variant="black" effect="ringHover"
                type="submit" class="w-full m-auto rounded-lg uppercase hover:ring-black/90">
            send message
        </Button>

    {/if}

</div>

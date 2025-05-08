<script>
    import WordPullUp from "$lib/wordPullUp.svelte";
    import BoxReveal from "$lib/BoxReveal.svelte";
    import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";

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

            console.log(contactResponse);

            if (!contactResponse.ok) throw new Error("Failed to send message");

            // Step 3: Show success modal
            showSuccessModal = true;

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

    function closeModal() {
        showSuccessModal = false;
    }


</script>

<section id="contact" class="max-w-4xl mx-auto px-7 lg:px-0">
    <div class="flex flex-col items-center md:block mt-8">
        <BoxReveal boxColor={"gray-200"} duration={0.2}>
            <h2 class="font-SpaceGrotesk font-bold tracking-normal text-5xl m-3 text-center text-primary">

                <WordPullUp words="Contact"/>
            </h2>

        </BoxReveal>
        <p class="mb-8 w-4/5">
            If you have any questions, feel free to contact me.
        </p>
    </div>
    <div class="w-4/5 form">
        <div>
            <span class="uppercase text-sm text-gray-600 dark:text-gray-300">Full Name</span>

            <Input type="text" class="mt-2" bind:value={name}/>
        </div>
        <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 dark:text-gray-300">Email</span>
            <Input class="mt-2" bind:value={email}/>
        </div>
        <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 dark:text-gray-300">Message</span>
            <textarea
                    id="message"
                    bind:value={message}
                    class="h-32 mt-2 border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
            </textarea>
		        </div>
        <div class="mt-8">
            <button
                    on:click={handleSubmit}
                    class="inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-xl bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
                    disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
            </button>
        </div>
    </div>


</section>

{#if isLoading}
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div class="text-center">
            <div class="spinner"></div>
            <p class="text-white mt-4">Sending your message...</p>
        </div>
    </div>
{/if}

{#if showSuccessModal}
    <div
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center animate-fade-in">
            <div class="flex justify-center">
                <svg class="w-16 h-16 text-green-500 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Message Sent Successfully!</h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">We have received your message and will get back to you
                soon.</p>
            <button
                    on:click={closeModal}
                    class="mt-4 inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900">
                OK
            </button>
        </div>
    </div>
{/if}

<style>
    .spinner {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid #ffffff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .animate-fade-in {
        animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* These styles will be scoped to this component only */
    :global(.bg-beige) {
        background-color: #f5f5f5;
    }
</style>
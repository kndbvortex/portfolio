<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";

  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<Button class="border-gray-50" onclick={increment}>
  count is {count}
</Button>

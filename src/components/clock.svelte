<script lang="ts">
  import { onMount } from 'svelte';

  let hours = '12';
  let minutes = '0';
  let amOrPm = 'AM';

  const updateClock = () => {
    const date = new Date();
    const hours24 = date.getHours();

    hours = (hours24 % 12 || 12).toString();
    minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes().toString();
    amOrPm = hours24 >= 12 ? 'PM' : 'AM';
  };

  onMount(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  });
</script>

<div class="shadow-w95-inverted-thin px-3 whitespace-nowrap">
  <span>{hours}:{minutes} {amOrPm}</span>
</div>

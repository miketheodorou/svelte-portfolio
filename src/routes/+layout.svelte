<script>
	import '../app.css';
	import Sidebar from '@components/Sidebar.svelte';
</script>

<main class="flex h-full">
	<Sidebar />
	<slot />
</main>

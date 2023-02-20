<script>
	import '../app.css';
	import Sidebar from '@components/Sidebar.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<!-- Open Sans -->
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
	<!-- Source Code Pro -->
	<link
		href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main class="flex h-full">
	<Sidebar />
	<section class="flex-1 p-4 bg-zinc-900">
		<slot />
	</section>
</main>

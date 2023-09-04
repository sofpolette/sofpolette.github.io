<script>
	import Carousel from '$lib/Carousel.svelte';
	import Label from '$lib/Label.svelte';
	import projects from '$lib/projects.json';

	let data = projects[0];
</script>

<!-- Content -->
<div class="my-8 flex space-x-12 h-full">
	<div class="col w-1/2">
		<a href="/">
			<img src="/icons/arrow_back_FILL0_wght400_GRAD0_opsz40.svg" alt="Return" class="fill-blue" />
		</a>
		<!-- Text -->
		<h1 class="text-3xl my-4">{data.title}</h1>
		<p>{data.description}</p>
		<!-- Labels -->
		<div>
			<Label>{data.labels}</Label>
		</div>
	</div>
	<!-- Carousel -->
	<div class="col w-1/2">
		<Carousel images={data.images} />
	</div>
</div>

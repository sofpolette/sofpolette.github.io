<script>
	import Carousel from '$lib/Carousel.svelte';
	import Label from '$lib/Label.svelte';

	export let data;
</script>

<!-- Content -->
<div class="my-8 flex space-x-12 h-full">
	<div class="col w-1/2 space-y-20">
		<div class="space-y-8">
			<a href="/">
				<img
					src="/icons/arrow_back_FILL0_wght400_GRAD0_opsz40.svg"
					alt="Return"
					class="fill-blue"
				/>
			</a>
			<!-- Text -->
			<div>
				<h1 class="text-3xl">{data.title}</h1>
				<p class="my-4">{data.description}</p>
			</div>
		</div>
		<!-- Labels -->
		<Label labels={data.areas} />
	</div>
	<!-- Carousel -->
	<div class="col w-1/2">
		<Carousel images={data.images} />
	</div>
</div>

<script>
	import Carousel from '$lib/Carousel.svelte';
	import Label from '$lib/Label.svelte';
	import Back from '$lib/Back.svelte';
	import { mergeLabelsColors } from '$lib/utils.js';

	export let data;

	let labels = [data.year];
	labels.push(...data.type);
	labels.push(...data.areas);
	let labelsObj = mergeLabelsColors(labels);
</script>

<!-- Content -->
<h1 class="text-3xl mt-12 mb-2">{data.title}</h1>
<div class="mb-8 flex space-x-24">
	<div class="col w-2/5 flex flex-col justify-between">
		<!-- <Back /> -->
		<!-- Text and labels column -->
		<p class="my-4">{data.description}</p>
		<Label labels={labelsObj} />
	</div>
	<!-- Carousel -->
	<div class="col w-3/5 h-full">
		<Carousel images={data.images} />
	</div>
</div>

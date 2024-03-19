<script>
	import Carousel from '$lib/Carousel.svelte';
	import Label from '$lib/Label.svelte';
	import { mergeLabelsColors } from '$lib/utils.js';

	export let data;

	let labels = [data.year];
	labels.push(...data.type);
	labels.push(...data.areas);
	let labelsObj = mergeLabelsColors(labels);
</script>

<!-- Content -->
<div class="mt-16">
	<Label labels={labelsObj} />
</div>

<!-- Old content structure -->
<!-- <h1 class="text-3xl my-8">{data.title}</h1>
<div class="mb-8 flex md:space-x-16 max-md:space-y-8 max-md:flex-col md:flex-row">
	<div class="flex md:w-2/5 max-md:w-full flex-col max-md:space-y-8 md:justify-between">
		<p class="my-4 2xl:text-xl">{data.description}</p>
		<Label labels={labelsObj} />
	</div>
	Carousel desktop
	<div class="md:w-3/5 md:pt-8">
		<Carousel images={data.images} />
	</div>
</div> -->

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
<div class="my-8 flex space-x-12 h-full">
	<div class="col w-1/3 space-y-20">
		<div class="space-y-8">
			<Back />
			<!-- Text -->
			<div>
				<h1 class="text-3xl">{data.title}</h1>
				<p class="my-4">{data.description}</p>
			</div>
		</div>
		<!-- Labels -->
		<Label labels={labelsObj} />
	</div>
	<!-- Carousel -->
	<div class="col w-2/3">
		<Carousel images={data.images} />
	</div>
</div>

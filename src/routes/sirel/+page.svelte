<script>
	import projects from '$lib/projects.json';
	// import Project from '$lib/Project.svelte';
	import Label from '$lib/Label.svelte';
	import { mergeLabelsColors } from '$lib/utils.js';
	let labels = [data.year];
	labels.push(...data.type);
	labels.push(...data.areas);
	let labelsObj = mergeLabelsColors(labels);
	let data = projects[0];
</script>

<!-- Content -->
<!-- <Project {data} /> -->
<div class="space-y-8">
	<Label labels={labelsObj} />
	<h1 class="text-3xl my-8">
		Sirel is a beauty salon for pets and their human friends to enjoy, look and feel their best
		together.
	</h1>
	<div class="mb-8 flex md:space-x-16 max-md:space-y-8 max-md:flex-col md:flex-row">
		<div class="flex md:w-1/3 max-md:w-full flex-col max-md:space-y-8 md:justify-between">
			<p class="my-4 2xl:text-xl">
				<u>Main goal:</u> <br />
				Develop a brand identity for a niche business model.
			</p>
		</div>
		<div class="md:w-1/3 md:pt-8">
			<p class="my-4 2xl:text-xl">
				<u>Brand values:</u> <br />
				The brand values include natural, high quality treatments, personalized care, and heartfelt interactions.
			</p>
		</div>
		<div class="md:w-1/3 md:pt-8">
			<p class="my-4 2xl:text-xl">
				<u>Result:</u> <br />
				Sirel stems from the word ‘mermaid’ in spanish (sirena), which serves as a symbol of beauty.
				The logotype is inspired by this same concept.
			</p>
		</div>
	</div>
</div>

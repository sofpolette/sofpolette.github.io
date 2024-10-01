<script>
	import projects_data from '$lib/projects_new.json';
	// import Carousel from '$lib/Carousel.svelte';
	// import Label from '$lib/Label.svelte';
	// import { mergeLabelsColors } from '$lib/utils.js';

	// export let data;

	// let labels = [data.year];
	// labels.push(...data.type);
	// labels.push(...data.areas);
	// let labelsObj = mergeLabelsColors(labels);
</script>

<div class="space-y-16 mb-16 max-md:px-[1vh] max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
	{#each projects_data as project}
		<h1>{project.title}</h1>
		<div>
			<p>Year: {project.year}</p>
			<p>Areas of expertise: {project.areas}</p>
		</div>
		<div class="flex flex-row">
			<div class="flex col">
				<p>BRIEF:</p>
				<p>{project.brief}</p>
			</div>
			<div class="flex col">
				<p>SOLUTION:</p>
				<p>{project.solution}</p>
			</div>
		</div>
	{/each}
</div>

<!-- Old content (labels) -->
<!-- <div class="mt-16">
	<Label labels={labelsObj} />
</div> -->

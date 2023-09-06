<script>
	import projects from '$lib/projects.json';
	import labelColors from '$lib/label_colors.json';
	import Label from '$lib/Label.svelte';
	import { mergeLabelsColors } from '$lib/utils.js';
	import CarouselPlain from '$lib/CarouselPlain.svelte';

	let labelsObjs = [];
	for (let i = 0; i < projects.length; i++) {
		let labels = [projects[i].year, projects[i].type];
		labels.push(...projects[i].areas);
		labelsObjs.push(mergeLabelsColors(labels));
	}
</script>

<a href="../"
	><img src="icons/arrow_back_FILL0_wght400_GRAD0_opsz40.svg" alt="Return" class="fill-blue" /></a
>
<h1 class="text-3xl my-4">Projects</h1>

<div class="grid grid-cols-3 gap-x-8 gap-y-16">
	{#each projects as project, i}
		<div>
			<CarouselPlain images={project.images} />
			<h1 class="text-lg mt-3 mb-1">{project.title}</h1>
			<Label labels={labelsObjs[i]} />
		</div>
	{/each}
</div>

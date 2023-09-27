<script>
	import Label from '$lib/Label.svelte';
	import CarouselPlain from '$lib/CarouselPlain.svelte';
	import { mergeLabelsColors } from '$lib/utils.js';
	import projects from '$lib/projects.json';

	let labelsObjs = [];
	for (let i = 0; i < projects.length; i++) {
		let labels = [projects[i].year];
		labels.push(...projects[i].type);
		labels.push(...projects[i].areas);
		labelsObjs.push(mergeLabelsColors(labels));
	}
</script>

<h1 class="text-3xl my-8">Projects</h1>
<div class="grid max-md:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16">
	{#each projects as project, i}
		<div>
			<a href={project.link}
				><CarouselPlain images={[project.thumbnail].concat(project.images)} /></a
			>
			<a href={project.link}
				><h1 class="max-2xl:text-lg 2xl:text-xl mt-3 mb-1">{project.title}</h1></a
			>
			<Label labels={labelsObjs[i]} />
		</div>
	{/each}
</div>

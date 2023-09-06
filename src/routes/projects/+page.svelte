<script>
	import projects from '$lib/projects.json';
	import Label from '../../lib/Label.svelte';
</script>

<img src="icons/arrow_back_FILL0_wght400_GRAD0_opsz40.svg" alt="Return" class="fill-blue" />
<h1 class="text-3xl my-4">Projects</h1>

{#each projects as project}
	<img src={project.images} class="rounded-2xl" alt="Thumbnail" />
	<h1 class="text-xl">{project.title}</h1>
	<!-- <Label>{project.labels}</Label> -->
{/each}

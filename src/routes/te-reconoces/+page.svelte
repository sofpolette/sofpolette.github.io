<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[4];
</script>

<!-- Content -->
<Project {data} />

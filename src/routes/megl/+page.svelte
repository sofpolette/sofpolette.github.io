<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[6];
</script>

<!-- Content -->
<Project {data} />

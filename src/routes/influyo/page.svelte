<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[0];
</script>

<!-- Content -->
<Project {data} />

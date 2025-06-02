<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[1];
</script>

<!-- Content -->
<Project {data} />
<div class="flex flex-col gap-12">
	<div class="image-container">
		<div class="full-width-image">
			<img src="animal-farm/guardas.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="animal-farm/cover2.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="animal-farm/cover3.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="animal-farm/cover4.png" alt="" />
		</div>
	</div>
</div>

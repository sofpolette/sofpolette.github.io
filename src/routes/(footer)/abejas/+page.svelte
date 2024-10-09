<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[4];
</script>

<!-- Content -->
<Project {data} />

<div class="image-container">
	<div class="full-width-image">
		<img src="abejas/exterior.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="abejas/flyer.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="abejas/icons.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="abejas/naranjas.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="abejas/abejas.gif" alt="" />
	</div>
	<div class="full-width-image">
		<img src="abejas/tote.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="abejas/tshirt.png" alt="" />
	</div>
</div>

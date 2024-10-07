<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[3];
</script>

<!-- Content -->
<Project {data} />

<div class="image-container">
	<div class="full-width-image">
		<img src="cookbooks/mom-cover.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/mom-flat.jpg" alt="" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="cookbooks/mom-col1.jpg" alt="" class="pair-image" />
		<img src="cookbooks/mom-col2.jpg" alt="" class="pair-image right-image" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/mom3-flat.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/mom-bg1.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/mom-bg2.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/dad-cover.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/dad-flat.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/dad-bg.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="cookbooks/dad3-flat.jpg" alt="" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="cookbooks/dad-col1.jpg" alt="" class="pair-image" />
		<img src="cookbooks/dad-col2.jpg" alt="" class="pair-image right-image" />
	</div>

	<div class="full-width-image">
		<img src="cookbooks/dad-flat2.jpg" alt="" />
	</div>
</div>

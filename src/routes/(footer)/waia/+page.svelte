<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[0];
</script>

<!-- Content -->
<Project {data} />

<div class="image-container">
	<div class="full-width-image">
		<img src="waia/cover2.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="waia/cover3.png" alt="" />
	</div>
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="waia/spread1.jpg" alt="" class="pair-image" />
	<img src="waia/spread2.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="waia/spread3.jpg" alt="" class="pair-image" />
	<img src="waia/spread4.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="waia/spread5.jpg" alt="" class="pair-image" />
	<img src="waia/spread6.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="waia/spread7.jpg" alt="" class="pair-image" />
	<img src="waia/spread8.jpg" alt="" class="pair-image right-image" />
</div>

<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[2];
</script>

<!-- Content -->
<Project {data} />

<div class="image-container">
	<div class="image-row flex">
		<img src="/megl/process1.png" alt="" class="row-image" />
		<img src="/megl/process2.png" alt="" class="row-image middle-image" />
		<img src="/megl/process3.png" alt="" class="row-image" />
	</div>
	<div class="full-width-image">
		<img src="/megl/color.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/megl/stationary2.png" alt="" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="/megl/logo.png" alt="" class="pair-image" />
		<img src="/megl/scale.png" alt="" class="pair-image right-image" />
	</div>
	<div class="full-width-image">
		<img src="/megl/stationary.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/megl/vinyl.png" alt="" />
	</div>
	<div class="image-row flex">
		<img src="/megl/signature1.png" alt="" class="row-image" />
		<img src="/megl/themis.png" alt="" class="row-image middle-image" />
		<img src="/megl/signature2.png" alt="" class="row-image" />
	</div>
	<div class="full-width-image">
		<img src="/megl/card.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/megl/stamp.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/megl/notebook.png" alt="" />
	</div>
</div>

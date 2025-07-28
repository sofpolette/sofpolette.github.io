<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[5];
</script>

<!-- Content -->
<Project {data} />

<!-- Brief and Solution -->
<div
	class="flex lg:flex-row max-lg:flex-col gap-8 my-12 max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]"
>
	<div class="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
		<p class="text-h6 text-center">Brief</p>
		<div class="bg-[#1040b0] h-[1.5px] opacity-50" />
		<p class="text-body-base">{data.brief}</p>
	</div>
	<div class="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
		<h3 class="text-h6 text-center">Solution</h3>
		<div class="bg-[#1040b0] h-[1.5px] opacity-50" />

		<p class="text-body-base">{data.solution}</p>
	</div>
</div>

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

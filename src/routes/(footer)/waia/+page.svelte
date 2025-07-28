<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[0];
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
	<div class="full-width-image">
		<img src="/waia/cover2.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/waia/cover3.png" alt="" />
	</div>
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="/waia/photo1.JPG" alt="" class="pair-image" />
	<img src="/waia/photo2.JPG" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="/waia/spread1.jpg" alt="" class="pair-image" />
	<img src="/waia/spread2.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="/waia/spread3.jpg" alt="" class="pair-image" />
	<img src="/waia/spread4.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="/waia/photo6.JPG" alt="" class="pair-image" />
	<img src="/waia/photo4.JPG" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="/waia/spread5.jpg" alt="" class="pair-image" />
	<img src="/waia/spread6.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-row flex justify-between w-1/3">
	<img src="/waia/spread7.jpg" alt="" class="pair-image" />
	<img src="/waia/spread8.jpg" alt="" class="pair-image right-image" />
</div>

<div class="image-container">
	<div class="full-width-image">
		<img src="/waia/photo5.JPG" alt="" />
	</div>
</div>

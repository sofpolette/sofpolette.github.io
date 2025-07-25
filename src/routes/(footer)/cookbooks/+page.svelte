<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[3];
</script>

<!-- Content -->
<Project {data} />

<!-- Brief and Solution -->
<div
	class="flex lg:flex-row max-lg:flex-col gap-8 my-12 max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]"
>
	<div class="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
		<p class="text-h5 text-center">Brief</p>
		<div class="bg-[#1040b0] h-[1.5px] opacity-50" />
		<p class="text-body-base">{data.brief}</p>
	</div>
	<div class="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
		<h3 class="text-h5 text-center">Solution</h3>
		<div class="bg-[#1040b0] h-[1.5px] opacity-50" />

		<p class="text-body-base">{data.solution}</p>
	</div>
</div>

<div class="image-container">
	<div class="full-width-image">
		<img src="/cookbooks/mom-cover.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/mom-flat.jpg" alt="" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="/cookbooks/mom-col1.jpg" alt="" class="pair-image" />
		<img src="/cookbooks/mom-col2.jpg" alt="" class="pair-image right-image" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/mom3-flat.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/mom-bg1.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/mom-bg2.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/dad-cover.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/dad-flat.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/dad-bg.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/cookbooks/dad3-flat.jpg" alt="" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="/cookbooks/dad-col1.jpg" alt="" class="pair-image" />
		<img src="/cookbooks/dad-col2.jpg" alt="" class="pair-image right-image" />
	</div>

	<div class="full-width-image">
		<img src="/cookbooks/dad-flat2.jpg" alt="" />
	</div>
</div>

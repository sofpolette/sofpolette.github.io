<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[4];
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
		<img src="/margenus/symbol.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/logo.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/color.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/tape.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/sign.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/tags.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/pack.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/lanyard.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/bags.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/sweatshirt.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/mupi.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/card.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/tshirt.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="/margenus/van.jpg" alt="" />
	</div>
</div>

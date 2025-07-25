<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[1];
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

<div class="flex flex-col gap-12">
	<div class="image-container">
		<div class="full-width-image">
			<img src="/animal-farm/guardas.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="/animal-farm/cover2.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="/animal-farm/cover3.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="/animal-farm/cover4.png" alt="" />
		</div>
	</div>
</div>

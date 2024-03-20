<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[3];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>Animal, plant, fungi</b> is an illustration project that captures canarian nature in an unexpected
			way.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Create a triptic of scenes from using Otl Aicher's iconic illustrations, particularly for the
				city of Ulm.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Subject:</u><br />
				I chose the Canary Islands since they are known for their unique and diverse ecosystems, providing
				inspiration for a visually compelling journey. the farm.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Stylistic choices</u><br />
				The black and white color scheme as well as the geometric style capture the essence of the places
				they're inspired by while showing a different side of them.
			</p>
		</div>
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-16">
		<div class="flex flex-row space-x-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="animal-plant-fungi/fungi.png" alt="Fungi" />
			<img class="md:w-1/3 max-md:w-full" src="animal-plant-fungi/animal.png" alt="Animal" />
			<img class="md:w-1/3 max-md:w-full" src="animal-plant-fungi/plant.png" alt="Plant" />
		</div>
		<div class="flex flex-col md:space-x-4 max-md:space-y-4 w-full items-center">
			<img class="w-8/12" src="animal-plant-fungi/fungi.png" alt="Fungi" />
			<img class="w-8/12" src="animal-plant-fungi/animal.png" alt="Animal" />
			<img class="w-8/12" src="animal-plant-fungi/plant.png" alt="Plant" />
		</div>
	</div>
</div>

<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[0];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>Sirel</b> is a beauty salon for pets and their human friends to enjoy, look and feel their best
			together.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Develop a brand identity for a niche business model.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Core values:</u><br />
				The brand values include natural, high quality treatments, personalized care, and heartfelt interactions.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Results:</u><br />
				Sirel stems from the word 'mermaid' in spanish (sirena), which serves as a symbol of beauty.
				The logotype is inspired by this same concept.
			</p>
		</div>
	</div>
	<!-- Main images -->
	<div class="flex max-md:flex-col md:flex-row md:space-x-8 max-md:space-y-8">
		<img class="md:w-1/2 max-md:w-full" src="sirel/logo-sirel.png" alt="Logotype with tagline" />
		<img class="md:w-1/2 max-md:w-full" src="sirel/logo2-sirel.png" alt="Second logotype" />
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="sirel/camiseta-sirel.png" alt="T-shirt" />
			<img class="md:w-1/3 max-md:w-full" src="sirel/champu-sirel.png" alt="Packaging" />
			<img class="md:w-1/3 max-md:w-full" src="sirel/facebook-sirel.png" alt="Social media" />
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="sirel/papeleria-sirel.png" alt="Brand assets" />
			<img class="md:w-1/3 max-md:w-full" src="sirel/peine-sirel.png" alt="Merchandising piece" />
			<img class="md:w-1/3 max-md:w-full" src="sirel/pins-sirel.png" alt="Merchandising piece" />
		</div>
	</div>
	<!-- Plafón -->
	<img src="sirel/plafon-sirel.jpg" alt="Project overview" />
</div>

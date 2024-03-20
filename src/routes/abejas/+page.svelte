<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[2];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			This data visualization highlights the <b>Canary Island’s <br />bee biodiversity.</b>
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				This project aimed to craft an infographic on a topic of public interest.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Subject:</u><br />
				I chose the theme of local bees to highlight the archipielago’s biodiversity, why it’s important,
				what factors endanger it, and what you can do to protect it.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Stylistic choices:</u><br />
				I decided not to use the color yellow to stray away from the stereotipical honeybee, since most
				canarian bees are not yellow and do not produce honey. I created iconography and illustrations
				as visual aid to the text as well as to appeal to the viewer.
			</p>
		</div>
	</div>
	<!-- Image grid -->
	<div class="flex max-md:flex-col md:flex-row w-full">
		<img class="w-1/6" src="abejas/consejo-agua.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/consejo-refugio.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/consejo-pesticida.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/consejo-flores.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/amenaza-agricultura.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/amenaza-invasora.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/amenaza-pesticida.png" alt="Kis design" />
		<img class="w-1/6" src="abejas/amenaza-calentamientoglobal.png" alt="Kis design" />
	</div>
	<!-- Main image -->
	<img src="abejas/abejas.png" alt="Illustrations" />
	<img src="abejas/infografia1.jpg" alt="Infographic" />
</div>

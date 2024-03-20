<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[9];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-8 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			Poster promoting <b>EO,</b> a film that explores the intricate relationship between animals and
			people through the eyes of a donkey in rural Poland.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Express the film's theme in a subtle, simple and clear manner.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>How?</u><br />
				Through a euphemistic approach, I meant to show the contrast between pleasant and stark realities
				that the film portrays.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Stylistic choices:</u><br />
				The colorful but rough look of the poster is meant to mimic the visual style and feeling of the
				film. I used handmade lettering to aid the concept.
			</p>
		</div>
	</div>
	<!-- Main image -->
	<div class="flex justify-center">
		<img class="md:w-3/4 full-md:w-full" src="eo/eo-poster.jpg" alt="Film poster" />
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-contain"
				src="eo/eo-lettering.png"
				alt="Original lettering"
			/>
			<img class="md:w-1/2 max-md:w-full" src="eo/eo-lettering2.png" alt="Original lettering" />
		</div>
	</div>
	<img class="w-full" src="eo/eo-lettering3.png" alt="Original lettering" />
</div>

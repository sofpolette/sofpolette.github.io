<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[4];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>¿Te reconoces?</b> (Do you recognize yourself?) is a campaign that aims to prevent drug addiction
			in minors.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Choose a specific NGO program and develop an intermedia advertising campaign to
				<br />promote it.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Concept:</u><br />
				Through pixelating portraits of teenagers, I aimed to symbolize the distortion addiction can
				bring to one’s life.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Tagline:</u><br />
				The tagline aids the image, prompting viewers to ponder the impact of addiction on their perception
				of reality and their sense of self.
			</p>
		</div>
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="te-reconoces/te-reconoces-poster.png" alt="Poster" />
			<img
				class="md:w-1/3 max-md:w-full"
				src="te-reconoces/te-reconoces-rollup.png"
				alt="Roll up"
			/>
			<img class="md:w-1/3 max-md:w-full" src="te-reconoces/te-reconoces-tote.png" alt="Totebag" />
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="te-reconoces/te-reconoces-hat.png" alt="Hat" />
			<img
				class="md:w-1/3 max-md:w-full"
				src="te-reconoces/te-reconoces-tshirt.png"
				alt="T-shirt"
			/>
			<img
				class="md:w-1/3 max-md:w-full"
				src="te-reconoces/te-reconoces-rollup2.png"
				alt="Roll up V2"
			/>
		</div>
	</div>
	<p class="text-xl md:w-1/3 max-md:w-full">
		After ideating the concept, it was adapted by me and my teammates to different formats and
		medias. <br />The assets I designed are featured above, while the full campaign <br />is below.
	</p>
	<!-- Plafón -->
	<img src="te-reconoces/te-reconoces-plafon.jpg" alt="Project overview" />
</div>

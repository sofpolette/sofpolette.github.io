<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[5];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>Trevis</b> is a digital platform designed to streamline professional connections between local
			small businesses and design students.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/2 max-md:w-full">
				<u>Main goal:</u><br />
				Improve the social network for design students to enhance their post-graduation socio-professional
				integration and contribute to the advancement of the local graphic design community.
			</p>
			<!-- <p class="text-xl md:w-1/3 max-md:w-full">
				<u>Concept:</u><br />
				
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Tagline:</u><br />
				
			</p> -->
		</div>
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/2 max-md:w-full object-scale-down" src="trevis/logo.png" alt="Logo" />
			<img class="md:w-1/2 max-md:w-full" src="trevis/blueprint.png" alt="Blueprint" />
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full items-start">
			<img class="md:w-1/3 max-md:w-full border-2" src="trevis/inicio.png" alt="Landing page" />
			<img
				class="md:w-1/3 max-md:w-full object-contain border-2"
				src="trevis/FAQ.png"
				alt="Poster"
			/>
			<img
				class="md:w-1/3 max-md:w-full object-contain border-2"
				src="trevis/registro-est1.png"
				alt="Poster"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full items-start">
			<img
				class="md:w-1/3 max-md:w-full border-2"
				src="trevis/tablon-anuncios.png"
				alt="Landing page"
			/>
			<img
				class="md:w-1/3 max-md:w-full object-contain border-2"
				src="trevis/proyecto.png"
				alt="Poster"
			/>
			<img
				class="md:w-1/3 max-md:w-full object-contain border-2"
				src="trevis/perfil-empresa.png"
				alt="Poster"
			/>
		</div>
	</div>
</div>

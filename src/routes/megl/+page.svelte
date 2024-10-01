<script>
	import projects_data from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[6];
</script>

<!-- Content -->
<Project {data} />

<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>Gutiérrez Ledesma Abogados</b> is a Law Firm based in Tejina, Tenerife.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Craft a visual identity that embodies the firm's values, experience and professionalism.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>About the brand:</u><br />
				The main values of the brand include tradition, expertise and a commitment to justice.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Results:</u><br />
				The monogram merges 'G' and 'L' from the founder's surname, utilizing Greek equivalents to honor
				Greek symbolism. This also subtly resembles the letter 'm', representing the initial for the
				founder's name.
			</p>
		</div>
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/2 max-md:w-full object-scale-down" src="megl/logo.png" alt="Main logo" />
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="megl/logo2.png"
				alt="Alternative logo"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="megl/megl-sign.png" alt="Sign" />
			<img
				class="md:w-1/3 max-md:w-full object-contain"
				src="megl/megl-card.png"
				alt="Business card"
			/>
			<img
				class="md:w-1/3 max-md:w-full object-contain"
				src="megl/megl-pen.png"
				alt="Branded pen"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="megl/megl-stamp.png" alt="Stamp" />
			<img class="md:w-1/3 max-md:w-full" src="megl/megl-vinil.png" alt="Vinil" />
			<img class="md:w-1/3 max-md:w-full" src="megl/megl-folder.png" alt="Folder" />
		</div>
	</div>
</div>

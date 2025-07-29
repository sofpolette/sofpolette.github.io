<script>
	import projects_data from '$lib/projects_new.json';
	import '$lib/typography.css';
</script>

<svelte:head>
	<meta
		name="description"
		content="Hi! ☺ — I’m a curious, detail-oriented Graphic Designer with experience in editorial design, digital design & visual identity."
	/>
	<title>Sofía J. Polette Stubb | Editorial & product design</title>
</svelte:head>

<main class="flex flex-col gap-12">
	<!-- Hero text desktop -->
	<h1 class="margins text-start mt-12 text-h1 max-md:hidden">
		Hello! — I’m Sofía, a designer specializing in editorial design and digital user experiences ✎ I
		create clear, human-centered solutions through empathy, structure, and storytelling ✺
	</h1>

	<!-- Hero text mobile -->
	<h1 class="margins text-start mt-12 text-h3 text-balanced md:hidden">
		Hello! — I’m Sofía. <br /> I specialize in editorial and digital experience design ✎ I create clear,
		human-centered solutions through empathy, structure, and storytelling ✺
	</h1>

	<!-- Project desktop -->
	<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 margins mb-12">
		{#each projects_data as project}
			<div class="overflow-hidden">
				<!-- Title and Date -->
				<div class="flex flex-row justify-between py-3">
					<p class="text-body-lg">{project.title}</p>
					<p class="text-body-lg font-light text-[#1040b0]">{project.year}</p>
				</div>
				<!-- Image with Hover Overlay -->
				<a href={project.link} class="relative group block h-[56vh] overflow-hidden">
					<img
						src={project.thumbnail.path}
						alt={project.title}
						class="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
					/>
					<!-- Hover Overlay (on image only) -->
					<div
						class="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-8 bg-[#1040b0] bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 text-white gap-8"
					>
						<p class="mb-2 font-light text-body-lg">{project.description}</p>
						<div class="flex flex-row flex-wrap justify-center gap-1">
							{#each project.areas as area}
								<span class="text-body-sm rounded-full border-[1.5px] border-white px-3 py-0.5"
									>{area}</span
								>
							{/each}
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</main>

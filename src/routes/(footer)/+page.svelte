<script>
	import projects_data from '$lib/projects_new.json';
</script>

<svelte:head>
	<meta
		name="description"
		content="Hi! ☺ — I’m a curious, detail-oriented Graphic Designer with experience in editorial design, digital design & visual identity."
	/>
	<title>Sofía J. Polette Stubb | Graphic Designer | Editorial, Digital & Visual Identity</title>
</svelte:head>

<div class="flex flex-col max-md:my-[0.1vh] max-xl:my-14">
	<!-- Hero text desktop -->
	<p
		class="max-lg:hidden text-6xl font-light leading-tight uppercase max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh] py-12"
	>
		Hi! ☺ — I’m a curious, detail-oriented <span class="underline decoration-2 underline-offset-4"
			>Graphic Designer</span
		>
		with a multidisciplinary background spanning
		<span class="underline decoration-2 underline-offset-4"
			>digital, editorial, and brand identity design.</span
		>
	</p>

	<!-- Hero text mobile -->
	<p
		class="lg:hidden max-sm:text-4xl max-sm:leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight uppercase font-light max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh] py-12"
	>
		Hi! ☺ — I’m a curious, detail-oriented <span class="underline decoration-2 underline-offset-4"
			>Graphic Designer</span
		>
		with experience in
		<span class="underline decoration-2 underline-offset-4"
			>editorial design, digital design & visual identity.</span
		>
	</p>

	<!-- Project desktop -->
	<div
		class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh] mb-12"
	>
		{#each projects_data as project}
			<div class="overflow-hidden">
				<!-- Title and Date -->
				<div class="flex flex-row justify-between py-3">
					<p class="text-xl">{project.title}</p>
					<p class="text-xl font-light text-[#1040b0]">{project.year}</p>
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
						class="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-12 bg-[#1040b0] bg-opacity-80 opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 text-white gap-8"
					>
						<p class="mb-2 font-light text-xl">{project.description}</p>
						<div class="flex flex-wrap justify-center gap-2">
							{#each project.areas as area}
								<span class="text-md font-light rounded-full border border-white px-3 py-0.5"
									>{area}</span
								>
							{/each}
						</div>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

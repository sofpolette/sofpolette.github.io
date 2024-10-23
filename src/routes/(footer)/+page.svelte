<script>
	import projects_data from '$lib/projects_new.json';
</script>

<svelte:head>
	<meta
		name="description"
		content="Hi! I’m a self-motivated and detail-oriented Graphic Designer with a keen eye for typography. I bring hands-on experience in branding, print, and UX/UI design."
	/>
	<title>Sofía J. Polette Stubb | Junior Graphic Designer | Branding, Editorial & UX/UI</title>
</svelte:head>

<div class="flex flex-col gap-10">
	<!-- Hero text desktop -->
	<p
		class="max-lg:hidden text-7xl font-light leading-tight max-md:px-[2vh] max-xl:px-[8vh] xl:px-[12vh]"
	>
		Hi! I’m a self-motivated and <br />detail-oriented <span class="lora">Graphic Designer</span>
		<br />with a keen eye for typography. <br />I bring hands-on experience in <br /><span
			class="lora">branding, print, and UX/UI design.</span
		>
	</p>

	<!-- Hero text mobile -->
	<p
		class="lg:hidden max-sm:text-5xl max-sm:leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight font-light max-md:px-[2vh] max-xl:px-[8vh] xl:px-[12vh]"
	>
		Hi! I’m a self-motivated and detail-oriented <span class="lora">Graphic Designer.</span> <br />I
		bring hands-on experience in
		<span class="lora">branding, print, and UX/UI design.</span>
	</p>

	<!-- Transition -->
	<div class="snap-center flex flex-col w-full items-center gap-1 animate-pulse">
		<p class="w-fit text-sm">Highlighted projects below</p>
		<div class="w-10 animate-bounce">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1"
				stroke="#1040b0"
				class="size-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
			</svg>
		</div>
	</div>

	<!-- Projects desktop -->
	<div class="h-fit overflow-y-scroll max-lg:hidden">
		{#each projects_data as project}
			<div>
				<a href={project.link}>
					<div
						style="background-color: {project.color};"
						class="flex justify-between py-4 border-t-[1px] border-[#1040b0] max-md:px-[2vh] max-xl:px-[8vh] xl:px-[12vh]"
					>
						<div class="flex gap-8">
							<p class="text-2xl">{project.title}</p>
							<div class="justify-start flex flex-row flex-wrap">
								{#each project.areas as area}
									<p
										class="tag text-nowrap align-center w-fit rounded-2xl border-[1px] border-[#1040b0] h-min px-2 py-0.75 mr-1 my-[3px]"
									>
										{area}
									</p>
								{/each}
							</div>
						</div>
						<p class="w-1/3 text-sm">{project.description}</p>
					</div>

					<div class="flex flex-row h-96 border-t-[1px] border-[#1040B0]">
						{#each project.images.slice(0, 3) as image}
							<img
								class="lg:w-1/3 max-lg:w-full object-cover"
								src={image.path}
								alt={image.caption}
							/>
						{/each}
					</div>
				</a>
			</div>
		{/each}
	</div>

	<!-- Project mobile -->
	<div class="h-fit overflow-y-scroll lg:hidden">
		{#each projects_data as project}
			<div>
				<a href={project.link}>
					<div
						style="background-color: {project.color};"
						class="flex flex-col gap-2 py-4 border-t-[1px] border-[#1040b0] max-md:px-[2vh] max-xl:px-[8vh] xl:px-[12vh]"
					>
						<p class="text-2xl text-center">{project.title}</p>
						<div class="justify-center flex flex-row flex-wrap">
							{#each project.areas as area}
								<p
									class="uppercase text-nowrap text-sm align-center w-fit rounded-2xl border-[1px] border-[#1040b0] h-min px-1.5 py-0.75 mr-1 my-[3px]"
								>
									{area}
								</p>
							{/each}
						</div>
						<p class="text-sm text-center">{project.description}</p>
					</div>

					<div class="flex flex-row h-96 border-t-[1px] border-[#1040B0]">
						{#each project.images.slice(2, 3) as image}
							<img
								class="lg:w-1/3 max-lg:w-full object-cover"
								src={image.path}
								alt={image.caption}
							/>
						{/each}
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

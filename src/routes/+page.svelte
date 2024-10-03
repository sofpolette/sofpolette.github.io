<script>
	import projects_data from '$lib/projects_new.json';
</script>

<div class="flex flex-col space-y-10">
	<!-- Hero text -->
	<p
		class="snap-start text-7xl font-light leading-tight max-md:px-[1vh] max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]"
	>
		Hi! I’m a self-motivated and <br />detail-oriented <span class="lora">Graphic Designer</span>
		<br />with a keen eye for typography. <br />I bring hands-on experience in <br /><span
			class="lora">branding, print, and UX/UI design.</span
		>
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

	<!-- Projects -->
	<div class="h-fit overflow-y-scroll snap-y snap-mandatory">
		{#each projects_data as project}
			<div class="snap-center">
				<a href={project.link}>
					<div
						style="background-color: {project.color};"
						class="flex flex-row justify-between py-8 border-t-[1px] border-[#1040b0] max-md:px-[1vh] max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]"
					>
						<div class="flex flex-row space-x-8">
							<p class="text-2xl">{project.title}</p>
							<div class="flex flex-row flex-wrap">
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
								class="md:w-1/3 max-md:w-full object-cover"
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

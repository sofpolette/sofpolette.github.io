<script>
	import projects_data from '$lib/projects_new.json';
</script>

<div class="px-0 mx-0 space-y-24">
	<!-- Hero text -->
	<p
		class="text-7xl font-light leading-tight max-md:px-[1vh] max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]"
	>
		Hi! I’m a self-motivated and <br />detail-oriented <span class="lora">Graphic Designer</span>
		<br />with a keen eye for typography. <br />I bring hands-on experience in <br /><span
			class="lora">branding, print, and UX/UI design.</span
		>
	</p>

	<!-- Projects -->
	<div>
		{#each projects_data as project}
			<div
				class="flex flex-row justify-between py-8 border-t-[1px] border-[#1040B0] max-md:px-[1vh] max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]"
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
					<img class="md:w-1/3 max-md:w-full object-cover" src={image.path} alt={image.caption} />
				{/each}
			</div>
		{/each}
	</div>
</div>

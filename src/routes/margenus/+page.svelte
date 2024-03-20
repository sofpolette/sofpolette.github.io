<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[8];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>Margenus</b> is an emerging fashion brand on a mission to redefine luxury for professional women.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				The project aims to brand an emerging fashion firm. I seeked to capture the essence of the designer's
				unique approach to luxury fashion and appeal to their target audience.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>About the brand:</u><br />
				The brand's core values include elegance, boldness, and sustainability, with a distinctive emphasis
				on upcycling to create one-of-a-kind pieces that celebrate individuality, contrast and reinvention.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Results:</u><br />
				The naming (margin + Venus) is inspired by the target audience, women that follow their own path
				and stand out. The symbol shows the cycle of reinvention that both the clothes and the consumer
				go through throughout their life.
			</p>
		</div>
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-24">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="margenus/logo.png"
				alt="Main logo"
			/>
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="margenus/logo3.png"
				alt="Alternative logo"
			/>
		</div>
		<div class="space-y-4">
			<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
				<img class="md:w-1/3 max-md:w-full" src="margenus/margenus-tshirt.png" alt="T-shirt" />
				<img class="md:w-1/3 max-md:w-full" src="margenus/margenus-tag.png" alt="Tag" />
				<img class="md:w-1/3 max-md:w-full" src="margenus/margenus-pack.png" alt="Packaging" />
			</div>
			<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
				<img class="md:w-1/3 max-md:w-full" src="margenus/margenus-sizes.png" alt="Size tags" />
				<img class="md:w-1/3 max-md:w-full" src="margenus/margenus-ig.png" alt="Social media" />
				<img
					class="md:w-1/3 max-md:w-full"
					src="margenus/thumbnail-margenus.png"
					alt="Brand pattern"
				/>
			</div>
		</div>
		<img class="w-full" src="margenus/plafon.jpg" alt="Project overview" />
	</div>
</div>

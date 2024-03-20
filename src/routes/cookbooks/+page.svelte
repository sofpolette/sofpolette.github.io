<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[7];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>'Mom and Dad'</b> is an exploration of my own heritage through family recipes and traditions.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Bridge the geographical and cultural gaps between both sides of my family through a compilation
				of recipes and traditions.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>The recipes:</u><br />
				The handwritten recipes are the main focus of these two books, showcasing the different handwriting,
				textures and colors that different family members and friends used through the years.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Stylistic choices:</u><br />
				Even though both books share a similar visual language, they are distinguished through typography,
				color, and the composition of the images.
			</p>
		</div>
	</div>
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/cover-dad.png"
				alt="Cover of the 'Dad' book"
			/>
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/cover-mom.png"
				alt="Cover of the 'Mom' book"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/A-spread1.png"
				alt="Spread of the 'Mom' book"
			/>
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/A-spread2.png"
				alt="Spread of the 'Mom' book"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/A-spread3.png"
				alt="Spread of the 'Mom' book"
			/>
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/A-spread4.png"
				alt="Spread of the 'Mom' book"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/B-spread1.png"
				alt="Spread of the 'Dad' book"
			/>
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/B-spread2.png"
				alt="Spread of the 'Dad' book"
			/>
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/B-spread3.png"
				alt="Spread of the 'Dad' book"
			/>
			<img
				class="md:w-1/2 max-md:w-full object-scale-down"
				src="cookbooks/B-spread4.png"
				alt="Spread of the 'Dad' book"
			/>
		</div>
	</div>
</div>

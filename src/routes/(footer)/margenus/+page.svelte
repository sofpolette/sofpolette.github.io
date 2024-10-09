<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[1];
</script>

<!-- Content -->
<Project {data} />

<div class="image-container">
	<div class="full-width-image">
		<img src="margenus/symbol.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/logo.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/color.png" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/tape.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/sign.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/tags.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/pack.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/lanyard.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/bags.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/sweatshirt.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/mupi.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/card.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/tshirt.jpg" alt="" />
	</div>
	<div class="full-width-image">
		<img src="margenus/van.jpg" alt="" />
	</div>
</div>

<script>
	import projects from '$lib/projects.json';
	import Project from '$lib/Project.svelte';
	let data = projects[1];
</script>

<!-- Content -->
<Project {data} />
<div class="space-y-24 mt-16">
	<!-- Text -->
	<div class="flex flex-col space-y-16">
		<h1 class="text-4xl font-normal leading-snug">
			<b>No Humanos</b> (Non Human) is a crowdfunding project aiming to raise funds for a farm animal
			shelter.
		</h1>
		<!-- Text -->
		<div class="flex md:space-x-8 max-md:space-y-8 max-md:flex-col md:flex-row">
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Main goal:</u><br />
				Raise funds for Finca Arkadia, a farm animal shelter in Tenerife.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>How?</u><br />
				I designed, manufactured and sold three t-shirt designs, each one inspired by an inhabitant of
				the farm.
			</p>
			<p class="text-xl md:w-1/3 max-md:w-full">
				<u>Results:</u><br />
				The initial fundraising target set by stakeholders was exceeded 2.3 times.
			</p>
		</div>
	</div>
	<!-- Main image -->
	<img src="no-humanos/thumbnail-nh.png" alt="T-shirt designs" />
	<!-- Image grid -->
	<div class="max-md:flex-col md:flex-row space-y-4">
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full" src="no-humanos/kis.png" alt="Kis design" />
			<img class="md:w-1/3 max-md:w-full" src="no-humanos/glenn.png" alt="Glenn design" />
			<img class="md:w-1/3 max-md:w-full" src="no-humanos/federico.png" alt="Federico design" />
		</div>
		<div class="flex max-md:flex-col md:flex-row md:space-x-4 max-md:space-y-4 w-full">
			<img class="md:w-1/3 max-md:w-full object-cover" src="no-humanos/k.jpeg" alt="Brand assets" />
			<img class="md:w-1/3 max-md:w-full" src="no-humanos/g.jpeg" alt="Merchandising piece" />
			<img class="md:w-1/3 max-md:w-full" src="no-humanos/f.jpeg" alt="Merchandising piece" />
		</div>
	</div>
</div>

<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	let data = projects[0];
</script>

<!-- Content -->
<Project {data} />
<div class="flex flex-col gap-12">
	<div class="image-container">
		<div class="full-width-image">
			<img src="influyo/logo.jpg" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/symbol.jpg" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/logo.gif" alt="" />
		</div>
	</div>
	<div class="flex flex-row gap-8 max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
		<div class="flex flex-col gap-4 w-1/2">
			<h3 class="lora font-light">Emotional ID process</h3>
		</div>
		<div class="flex flex-col gap-4 w-1/2">
			<p>
				Identifying emotions is key to enhancing students' self-awareness. The emotional ID process
				was developed to make this process more approachable. The Plutchnik emotional model is used
				as inspiration, defining emotions through two variables:
			</p>
			<ul>
				<li><span class="lora font-semibold">Color —</span> to identify the type of emotion.</li>
				<li><span class="lora font-semibold">Size —</span> to express emotional intensity.</li>
			</ul>
			<p>
				This system makes it easier for users to identify their emotional state. Additionally, it
				also contributes to developing students' emotional vocabulary.
			</p>
		</div>
	</div>

	<div class="full-width-image">
		<img src="influyo/emotional-ID.png" alt="" />
	</div>
	<div class="flex flex-row gap-8 max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
		<div class="flex flex-col gap-4 w-1/2">
			<h3 class="lora font-light">Content categorization: <br />Reflect, face, project</h3>
		</div>
		<div class="flex flex-col gap-4 w-1/2">
			<p>
				The resources on the platform are organized into three categories, which students can
				explore freely or through structured pathways:
			</p>
			<ul>
				<li>
					<span class="lora font-semibold">Reflect —</span> Introspection techniques, understanding emotions.
				</li>
				<li>
					<span class="lora font-semibold">Face —</span> Action techniques, managing emotions.
				</li>
				<li>
					<span class="lora font-semibold">Project —</span> Planning techniques, setting concrete goals
					for the future.
				</li>
			</ul>
		</div>
	</div>

	<div class="image-container">
		<div class="full-width-image">
			<img src="influyo/icons.jpg" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/homepage.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/itinerary.png" alt="" />
		</div>
	</div>

	<div class="flex flex-row gap-8 max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
		<div class="flex flex-col gap-4 w-1/2">
			<h3 class="lora font-light">Launch campaign</h3>
		</div>
		<div class="flex flex-col gap-4 w-1/2">
			<p>
				To ensure that students were aware of and used the platform, a launch campaign was designed
				that included the delivery of a physical starter kit to each student. This kit included:
			</p>
			<ul>
				<li>
					<span class="lora font-semibold">Supporting material —</span> Allowing the user to write manually.
				</li>
				<li>
					<span class="lora font-semibold">Educational cards —</span> Introducing students to the emotional
					ID system.
				</li>
				<li>
					<span class="lora font-semibold">Merchandising —</span> Increasing brand presence in the school.
				</li>
			</ul>
		</div>
	</div>

	<div class="image-container">
		<div class="full-width-image">
			<img src="influyo/stationary.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/laptop.jpg" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/cards.jpg" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/cards.gif" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/stickers.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/tote.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/plafon2.jpg" alt="" />
		</div>
		<div class="full-width-image">
			<img src="influyo/plafon.jpg" alt="" />
		</div>
	</div>
</div>

<script>
	import education_data from '$lib/education.json';
	import experience_data from '$lib/experience.json';
	import achievements_data from '$lib/achievements.json';
	import skills_data from '$lib/skills.json';
</script>

<div class="flex flex-col margins gap-24 mb-12">
	<!-- Intro Section -->
	<div class="flex flex-col gap-4">
		<h1 class="text-h2 md:text-h1 text-center my-12">About me</h1>
		<div class="flex gap-8 flex-col md:flex-row">
			<!-- Picture -->
			<div class="w-full md:w-1/3 flex justify-center items-center">
				<img src="/about-me/perfil-color.jpg" class="w-2/3 rounded-full justify-end" alt="" />
			</div>

			<!-- Hero text desktop -->
			<h1 class="w-2/3 md:w-full text-start text-h4 max-md:hidden">
				Hello! — I’m Sofía, a designer specializing in editorial design and digital user experiences
				I create clear, human-centered solutions through empathy, structure, and storytelling.
			</h1>

			<!-- Hero text mobile -->
			<h1 class="w-full text-start text-h4 md:hidden">
				Hello! — I’m Sofía, a designer specializing in editorial design and digital user experiences
				✎ I create clear, human-centered solutions through empathy, structure, and storytelling ✺
			</h1>
		</div>
	</div>

	<!-- Divider -->
	<div class="h-[1.5px] bg-[#1040b0]" />

	<!-- Section: My design journey -->
	<div class="flex flex-col gap-12">
		<p class="text-h6 text-center">My design journey</p>
		<div class="flex flex-col gap-4 md:gap-8">
			<p class="text-body text-body-base">
				I first heard about design during a high school exchange in Canada, when my Computer
				Technology teacher showed us Paula Scher’s episode from the Abstract docuseries. From that
				moment on, I was set on becoming a designer.
			</p>
			<div class="flex flex-col md:flex-row gap-4 md:gap-8">
				<p class="w-full md:w-1/3 text-body-base">
					When I returned home, I enrolled in a vocational program in Multimedia and Web Design, and
					later completed a Graphic Design degree, graduating with honors. Through hands-on,
					project-based learning, I explored editorial, branding, product design and more—gaining a
					strong foundation in layout, typography, strategy and storytelling.
				</p>
				<p class="w-full md:w-1/3 text-body-base">
					After graduating, I focused on the two areas I loved most: editorial design and product
					design. <br /><br /> I’ve since taken courses to build skills in book design, typography, UX,
					human-centered and data-informed methods. I enjoy understanding how users interact with what
					I create and improving experiences through collaboration and iteration.
				</p>
				<p class="w-full md:w-1/3 text-body-base">
					Freelancing has taught me how to manage projects, work closely with clients, and keep
					improving both my process and communication. <br /><br />Currently, I’m a member of the
					Interaction Design Foundation, where I continuously develop new skills. I also volunteer
					as a visual designer at Habits for a Better World, driving social impact through research
					and design.
				</p>
			</div>
		</div>
	</div>

	<!-- Divider -->
	<div class="h-[1.5px] bg-[#1040b0]" />

	<!-- Section: Where You Can Find Me -->
	<div class="flex flex-col gap-12">
		<p class="text-h6 text-center">Where You can Find Me</p>
		<div class="flex flex-col md:flex-row gap-4 md:gap-8">
			<p class="w-full md:w-1/2 text-body-base">
				Based between the Canary Islands and Tübingen, Germany, I'm open to freelance and full-time
				opportunities within Europe.
			</p>
			<p class="w-full md:w-1/2 text-body-base">
				When I’m not designing, I love spending time reading, crocheting, going on walks, and
				learning new things.
			</p>
		</div>
		<div class="flex flex-col md:flex-row gap-8">
			<div class="flex flex-row gap-4 md:gap-8 w-full">
				<div class="flex flex-col gap-4 w-full md:w-2/4">
					<img src="/about-me/hike.jpg" alt="" />
					<p class="text-body-xs">Exploring the trails near my home in Tenerife</p>
				</div>
				<div class="flex flex-col gap-4 w-full md:w-2/4">
					<img src="/about-me/oreo.JPG" alt="" />
					<p class="text-body-xs">Oreo, the family dog, often joins in on these walks</p>
				</div>
			</div>
			<div class="flex flex-row gap-4 md:gap-8 w-full">
				<div class="flex flex-col gap-4 w-full md:w-2/4">
					<img src="/about-me/camera.jpg" alt="" />
					<p class="text-body-xs">Photography helps me stay connected to the world around me</p>
				</div>
				<div class="flex flex-col gap-4 w-full md:w-2/4">
					<img src="/about-me/lisboa.JPG" alt="" />
					<p class="text-body-xs">
						Visiting Lisbon on my latest trip, where I became fascinated by the city’s history
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

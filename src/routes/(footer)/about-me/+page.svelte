<script>
	import education_data from '$lib/education.json';
	import experience_data from '$lib/experience.json';
	import achievements_data from '$lib/achievements.json';
	import skills_data from '$lib/skills.json';
</script>

<div class="flex flex-col mx-12 gap-24 mb-12">
	<!-- Intro Section -->
	<div class="flex flex-col gap-4">
		<h1 class="text-h1 text-center my-12">Hello!</h1>
		<div class="flex flex-row gap-8">
			<div class="w-1/3 flex justify-center items-center">
				<img src="/about-me/perfil-color.jpg" class="w-1/2 rounded-full justify-end" alt="" />
			</div>
			<p class="w-2/3 text-h4">
				I’m Sofía, a Graphic Designer with a passion for editorial and product design. I bring
				empathy, structure, and data together to create clear, human-centered experiences.
			</p>
		</div>
	</div>

	<!-- Divider -->
	<div class="h-[1.5px] bg-[#1040b0]" />

	<!-- Section: My design journey -->
	<div class="flex flex-col gap-12">
		<p class="text-h5 text-center">My design journey</p>
		<div class="flex flex-col gap-8">
			<p class="text-body text-body-base">
				I first heard about design during a high school exchange in Canada, when my Computer
				Technology teacher showed us Paula Scher’s episode from the Abstract docuseries. From that
				moment on, I was set on becoming a designer.
			</p>
			<div class="flex flex-row gap-8">
				<p class="w-1/3 text-body-base">
					When I returned home, I enrolled in a vocational program in Multimedia and Web Design, and
					later completed a Graphic Design degree, graduating with honors. Through hands-on,
					project-based learning, I explored editorial, branding, and app design—gaining a strong
					foundation in layout, typography, strategy and storytelling.
				</p>
				<p class="w-1/3 text-body-base">
					After graduating, I focused on the two areas I loved most: editorial design and product
					design. <br /><br /> I’ve taken courses to build skills in book design, typography, UX, human-centered
					methods, and data-informed design. I enjoy understanding how users interact with what I create
					and improving the experience through collaboration and iteration.
				</p>
				<p class="w-1/3 text-body-base">
					Freelancing has taught me how to manage projects, work closely with clients, and keep
					improving both my process and communication. <br /><br />Currently, I’m a member of the
					Interaction Design Foundation and volunteer as a visual designer at Habits for a Better
					World, where I help design for social impact.
				</p>
			</div>
		</div>
	</div>

	<!-- Divider -->
	<div class="h-[1.5px] bg-[#1040b0]" />

	<!-- Section: Where You Can Find Me -->
	<div class="flex flex-col gap-12">
		<p class="text-h5 text-center">Where You can Find Me</p>
		<div class="flex flex-row gap-8">
			<p class="w-1/2 text-body-base">
				Based between the Canary Islands and Tübingen, Germany, I'm open to freelance and full-time
				opportunities within Europe.
			</p>
			<p class="w-1/2 text-body-base">
				When I’m not designing, I love spending time reading, crocheting, going on walks, and
				learning new things.
			</p>
		</div>
		<div class="flex flex-row gap-8">
			<div class="flex flex-col gap-4 w-1/4">
				<img src="/about-me/hike.jpg" alt="" />
				<p class="text-body-xs">Me on a recent hike near my home in Tenerife</p>
			</div>
			<div class="flex flex-col gap-4 w-1/4">
				<img src="/about-me/oreo.JPG" alt="" />
				<p class="text-body-xs">sometimes the family dog, Oreo, joins in too</p>
			</div>
			<div class="flex flex-col gap-4 w-1/4">
				<img src="/about-me/camera.jpg" alt="" />
				<p class="text-body-xs">I’m very nostalgic and love taking pictures at all times</p>
			</div>
			<div class="flex flex-col gap-4 w-1/4">
				<img src="/about-me/lisboa.JPG" alt="" />
				<p class="text-body-xs">
					On my latest trip, I went to Lisboa and became fascinated by the history of the city
				</p>
			</div>
		</div>
	</div>
</div>

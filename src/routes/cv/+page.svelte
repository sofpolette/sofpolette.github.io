<script>
	import Label from '../../lib/Label.svelte';
</script>

<div class="space-y-24">
	<h1 class="text-3xl">CV</h1>

	<div>
		<p class="max-md:text-3xl md:text-4xl font-medium mb-3">Sofía J. Polette Stubb</p>
		<p class="max-md:text-3xl md:text-4xl font-light opacity-70">Graphic Designer</p>
	</div>

	<div class="space-y-16">
		<!-- Education -->

		<div>
			<p class="text-3xl underline mb-8">Education</p>
			<div class="flex md:space-x-16 max-md:space-y-16 max-md:flex-col md:flex-row" :>
				<!-- Bachelor -->
				<div class="md:w-1/3 max-md:w-full space-y-4">
					<div class="space-y-2 mb-2">
						<img src="/easd-symbol.png" alt="EASD logo" class="h-12 mb-4" />
						<p class="text-md font-light uppercase">EASD Fernando Estévez</p>
						<p class="text-2xl italic font-medium">Graphic Design, Bachelor</p>
						<div>
							<p class="italic font-light">Sep 2020 - Jun 2024</p>
							<p class="font-light underline">Ongoing</p>
						</div>
					</div>
					<p>
						Throughout this degree, I've improved on generating, developing, and materializing
						ideas, concepts, and graphics for complex communication programs. I acquired technical
						capabilities and skills as well as the correct use of methods and processes associated
						with Graphic Design.
					</p>
					<p class="font-light mt-2 opacity-70">
						Branding · Typography · UX Design · Editorial Design · Design Thinking
					</p>
				</div>

				<!-- ERASMUS+ -->
				<div class="md:w-1/3 max-md:w-full space-y-4">
					<div class="space-y-2 mb-2">
						<img src="/asp-symbol.png" alt="EASD logo" class="h-12 mb-4" />
						<p class="text-md font-light uppercase mb-2">ASP im. Jana Matejki w Krakowie</p>
						<p class="text-2xl italic font-medium mb-2">Graphic Arts, ERASMUS+</p>
						<div>
							<p class="italic font-light">Feb 2023 - Jun 2023</p>
							<p class="font-light">Overall grade (out of 10): 9,7</p>
						</div>
					</div>
					<p>
						During this mobility, I developed my knowledge of photography, visual communication,
						typography, and poster design. I also participated in a 3-month course where I learned
						about traditional printing techniques (Lithography, mokulito, engraving, monotype...).
					</p>
					<p class="font-light mt-2 opacity-70">
						Lightroom · Visual Communication · Poster Design · Typography · Photography
					</p>
				</div>

				<!-- Vocational Training -->
				<div class="md:w-1/3 max-md:w-full space-y-4 max-md:flex-col md:flex-row">
					<div class="space-y-2 mb-2">
						<img src="/easd-symbol.png" alt="EASD logo" class="h-12 mb-4" />
						<p class="text-md font-light uppercase">EASD Fernando Estévez</p>
						<p class="text-2xl italic font-medium">
							Web and Multimedia,
							<br />
							Vocational Training
						</p>
						<div>
							<p class="italic font-light">Sep 2018 - Jun 2020</p>
							<p class="font-light">Overall grade (out of 10): 9,62</p>
						</div>
					</div>
					<p>
						This two-year vocational program focused on design and development skills to assist in
						the creation and upkeep of multimedia and web-based products.
					</p>
					<p class="font-light mt-2 opacity-70">
						Wireframing · Adobe Photoshop · Cascading Style Sheets (CSS) · Adobe Premiere Pro · HTML
					</p>
				</div>
			</div>
		</div>

		<div class="md:space-x-16 max-md:space-y-16 flex max-md:flex-col md:flex-row">
			<!-- Experience -->
			<div class="md:w-1/3 max-md:w-full space-y-4">
				<p class="text-3xl mb-8 underline">Experience</p>
				<div class="space-y-2 mb-2">
					<img src="/descubre-logo.jpeg" alt="DescubreGroup logo" class="h-12 mb-4 rounded-lg" />
					<p class="text-md font-light uppercase">Descubre Group</p>
					<p class="text-2xl italic font-medium">Graphic Designer, Apprenticeship</p>
					<div>
						<p class="italic font-light">Feb 2024 - April 2024</p>
						<p class="font-light underline">Ongoing</p>
					</div>
				</div>
				<p>
					I worked on turist information services, mainly web applications and TV channels. I was
					responsible for creating and adapting content for different clients, including banners,
					videos, iconography and directories. I also delved into template design, web application
					design and some translation tasks while participating in meetings and training sessions.
				</p>
				<p class="font-light mt-2 opacity-70">
					Adobe Photoshop · Adobe Illustrator · Cascading Style Sheets (CSS) · Figma · Adobe After
					Effects
				</p>
			</div>

			<!-- Achievements -->
			<div class="space-y-8 md:w-1/3 max-md:w-full">
				<p class="text-3xl underline">Achievements</p>
				<div class="space-y-6">
					<div class="space-y-2">
						<p class="text-xl italic">International Scholarship, 2017</p>
						<p>
							Awarded a scholarship for a 3-month study exchange program in Canada, gaining valuable
							international exposure and academic experience.
						</p>
					</div>
					<div class="space-y-2">
						<p class="text-xl italic">Crowdfunding Leadership, 2018</p>
						<p>
							Spearheaded a successful crowdfunding initiative to raise funds for animal shelter
							Finca Arkadia, surpassing the initial fundraising goal 2.3 times.
						</p>
					</div>
					<div class="space-y-2">
						<p class="text-xl italic">Academic Recognition, 2021</p>
						<p>
							Received an Honorable Mention for my Web and Multimedia final project. Additionally,
							honored with the Extraordinary Prize for Professional Artistic Education in Plastic
							Arts and Design.
						</p>
					</div>
				</div>
			</div>

			<!-- Languages and skills -->
			<div class="space-y-8 md:w-1/3 max-md:w-full">
				<!-- Languages -->
				<div class="space-y-4">
					<p class="text-3xl mb-8 underline">Languages</p>
					<div>
						<p class="text-xl italic mb-1">Spanish</p>
						<p>Native or bilingual proficiency</p>
					</div>
					<div>
						<p class="text-xl italic mb-1">English</p>
						<p>Native or bilingual proficiency</p>
					</div>
					<div>
						<p class="text-xl italic mb-1">Swedish</p>
						<p>Native or bilingual proficiency</p>
					</div>
				</div>

				<!-- Skills -->
				<div class="mt-16">
					<p class="text-3xl mb-8 underline">Skills</p>
					<ul class="list-image-[url(/icons/done_black_24dp.svg)] ml-6 text-lg">
						<li>Visual identity</li>
						<li>Editorial design</li>
						<li>UX/UI Design</li>
						<li>Figma</li>
						<li>Adobe Illustrator</li>
						<li>Adobe InDesign</li>
						<li>Adobe Photoshop</li>
						<li>Adobe Lightroom</li>
						<li>Adobe Premiere</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- <div class="grid max-md:grid-cols-1 md:grid-cols-3 md:space-x-8 max-md:space-y-12" />
		Nationality
		<div>
			<p class="text-xl mb-8 underline">Nationality</p>
			<p>
				I am a Finnish national with a lifelong residency in Spain, actively seeking international
				opportunities to leverage diverse perspectives and design expertise and create impactful
				visual solutions.
			</p>
		</div>
	</div> -->
	</div>
</div>

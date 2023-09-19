<script>
	import Label from '../../lib/Label.svelte';
</script>

<h1 class="text-3xl my-4">CV</h1>

<!-- Education -->
<div>
	<p class="text-xl mb-8 underline">Education</p>
	<div class="grid grid-cols-3 space-x-8">
		<!-- Vocational Training -->
		<div class="col space-y-4">
			<div class="space-y-2 mb-2">
				<img src="/easd-symbol.png" alt="EASD logo" class="h-16 mb-4" />
				<p class="text-md font-light uppercase">EASD Fernando Estévez</p>
				<p class="text-xl italic font-medium">
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
				This two-year vocational program focused on design and development skills to assist in the
				creation and upkeep of multimedia and web-<br />based products.
			</p>
			<p class="mt-2 opacity-70">
				Wireframing · Adobe Photoshop · Cascading Style Sheets (CSS) · Adobe Premiere Pro · HTML
			</p>
		</div>

		<!-- ERASMUS+ -->
		<div class="col space-y-4">
			<div class="space-y-2 mb-2">
				<img src="/asp-symbol.png" alt="EASD logo" class="h-16 mb-4" />
				<p class="text-md font-light uppercase mb-2">ASP im. Jana Matejki <br />w Krakowie</p>
				<p class="text-xl italic font-medium mb-2">Graphic Arts, ERASMUS+</p>
				<div>
					<p class="italic font-light">Feb 2023 - Jun 2023</p>
					<p class="font-light">Overall grade (out of 10): 9,7</p>
				</div>
			</div>
			<p>
				During this mobility, I developed my knowledge of photography, visual communication,
				typography, and poster design. I also participated in a 3-month course in Litograf Studio
				where I learned about printing techniques (Lithography, mokulito, engraving, monotype...).
			</p>
			<p class="mt-2 opacity-70">
				Lightroom · Visual Communication · Poster Design · Typography · Photography
			</p>
		</div>

		<!-- Degree -->
		<div class="col space-y-4">
			<div class="space-y-2 mb-2">
				<img src="/easd-symbol.png" alt="EASD logo" class="h-16 mb-4" />
				<p class="text-md font-light uppercase">EASD Fernando Estévez</p>
				<p class="text-xl italic font-medium">Graphic Design, Degree</p>
				<div>
					<p class="italic font-light">Sep 2020 - Jun 2024</p>
					<p class="font-light underline">Ongoing</p>
				</div>
			</div>
			<p>
				Throughout this degree, <br />I've improved on generating, developing, and materializing
				ideas, concepts, and graphics for complex communication programs. <br />I acquired technical
				capabilities and skills as well as the correct use of methods and processes associated with
				Graphic Design. This year I am focusing on infographic design, art direction, and app
				design.
			</p>
			<p class="mt-2 opacity-70">
				Branding · Typography · UX Design · Editorial Design · Design Thinking
			</p>
		</div>
	</div>

	<!-- Skills, achievements, skills -->
	<div class="grid grid-cols-3 space-x-8 mt-12">
		<!-- Languages -->
		<div class="space-y-4">
			<p class="text-xl mb-8 underline">Languages</p>
			<div>
				<p class="text-lg italic font-medium">Spanish</p>
				<p>Native or bilingual proficiency</p>
			</div>
			<div>
				<p class="text-lg italic font-medium">English</p>
				<p>Native or bilingual proficiency</p>
			</div>
			<div>
				<p class="text-lg italic font-medium">Swedish</p>
				<p>Native or bilingual proficiency</p>
			</div>
		</div>

		<!-- Skills -->
		<div>
			<p class="text-xl mb-8 underline">Skills</p>
			<ul class="list-image-[url(/icons/done_black_24dp.svg)] ml-6">
				<li>Visual identity</li>
				<li>Editorial design</li>
				<li>UX/UI Design</li>
				<li>Illustrator</li>
				<li>InDesign</li>
				<li>Figma</li>
				<li>Lightroom</li>
				<li>Photoshop</li>
			</ul>
		</div>

		<!-- Achievements and interests -->
		<div>
			<p class="text-xl mb-8 underline">Achievements</p>
			<p>
				In 2020 I received the Honorable Mention for my Web and Multimedia final project, as well as
				an Extraordinary Price for Professional Artistic Education in Plastic Arts and Design.
			</p>
		</div>
	</div>
</div>

<script>
	import education_data from '$lib/education.json';
	import experience_data from '$lib/experience.json';
	import achievements_data from '$lib/achievements.json';
	import skills_data from '$lib/skills.json';
</script>

<div class="space-y-16 mb-16 max-md:px-[2vh] max-xl:px-[8vh] xl:px-[12vh]">
	<h1>CV</h1>

	<!-- <p class="text-3xl font-light leading-snug">
		I’m a self motivated and detail-oriented Graphic Designer with a keen eye for typography. <br />
		I bring hands-on experience in branding, print, and UI/UX design. Actively seeking junior in-house
		opportunities and willing to relocate.
	</p> -->

	<!-- Education -->
	<div>
		<div class="space-y-8">
			<h2>Education</h2>
			<div class="flex flex-row max-lg:flex-col lg:gap-8 max-lg:gap-12">
				{#each education_data as education}
					<div class="space-y-4 max-lg:full-width lg:w-1/3">
						<!-- When and where -->
						<div class="space-x-8 flex flex-row font-light uppercase">
							<p class="w-1/3">
								{education.start_date} / <br />
								{education.end_date}
							</p>
							<p class="w-2/3">{education.where}</p>
						</div>

						<!-- Title and description -->
						<!-- <p class="text-3xl font-light"> -->
						<h3>
							<span class="lora">{education.title},</span>
							{education.type}
						</h3>
						<!-- </p> -->
						<div class="space-y-1">
							<p class="font-light">{education.grade}</p>
							<p>
								{education.description}
							</p>
							<!-- <ul class="space-y-2">
								{#each education.bullets as bullet}
									<li>{bullet}</li>
								{/each}
							</ul> -->
						</div>

						<!-- Skill tags -->
						<div class="flex flex-wrap font-light font-[#1040b0]">
							{#each education.skills as skill}
								<p
									class="tag text-nowrap align-center w-fit rounded-2xl border-[1px] border-[#1040b0] px-2 py-0.75 mr-1 my-[3px]"
								>
									{skill}
								</p>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- 2nd row -->
	<div class="flex flex-row max-lg:flex-col gap-8 max-lg:space-y-8">
		<!-- Experience -->
		<div class="w-1/3 max-lg:w-full space-y-8">
			<h2>Experience</h2>
			<div class="flex flex-row space-x-8">
				{#each experience_data as experience}
					<div class="space-y-4">
						<!-- When and where -->
						<div class="space-x-8 flex flex-row">
							<p class="w-1/3 font-light uppercase">
								{experience.start_date} /<br />
								{experience.end_date}
							</p>
							<p class="font-light uppercase w-2/3">{experience.where}</p>
						</div>

						<!-- Title and description -->
						<h3>
							<span class="lora">{experience.title},</span>
							{experience.type}
						</h3>
						<p>
							{experience.description}
						</p>

						<!-- Skill tags -->
						<div class="flex flex-wrap font-light font-[#1040b0]">
							{#each experience.skills as skill}
								<p
									class="tag text-nowrap align-center w-fit rounded-2xl border-[1px] border-[#1040b0] px-2 py-0.75 mr-1 my-[3px]"
								>
									{skill}
								</p>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Achievements -->
		<div class="space-y-8 w-1/3 max-lg:w-full">
			<h2>Achievements</h2>
			<div class="space-y-6">
				{#each achievements_data as achievements}
					<div class="space-y-1">
						<div class="flex flex-row space-x-8">
							<p class="font-light uppercase">{achievements.date}</p>
							<p class="font-semibold lora">{achievements.title}</p>
						</div>
						<p>{achievements.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Languages and skills -->
		<div class="space-y-16 w-1/3 max-lg:w-full">
			<!-- Languages -->
			<div class="space-y-8">
				<h2>Languages</h2>
				<div class="space-y-6">
					<div class="space-y-1">
						<p class="font-semibold lora">Spanish</p>
						<p>Native or bilingual proficiency.</p>
					</div>
					<div class="space-y-1">
						<p class="font-semibold lora">English</p>
						<p>Native or bilingual proficiency.</p>
					</div>
					<div class="space-y-1">
						<p class="font-semibold lora">Swedish</p>
						<p>Native or bilingual proficiency.</p>
					</div>
				</div>
			</div>
			<!-- Skills -->
			<div class="space-y-8">
				<h2>Skills</h2>
				<!-- Skill tags -->
				<div class="flex flex-wrap font-light font-[#1040b0]">
					{#each skills_data as skill}
						<p
							class="tag text-nowrap align-center w-fit rounded-2xl border-[1px] border-[#1040b0] px-2 py-0.75 mr-1 my-[3px]"
						>
							{skill.title}
						</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

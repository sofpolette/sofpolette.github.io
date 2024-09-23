<script>
	import { P } from 'flowbite-svelte';
	import Label from '../../lib/Label.svelte';
	import education_data from '$lib/education.json';
	import experience_data from '$lib/experience.json';
	import achievements_data from '$lib/achievements.json';
	import skills_data from '$lib/skills.json';
</script>

<div class="space-y-16 mb-16 max-md:px-[1vh] max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
	<h1>CV</h1>

	<!-- Education -->
	<div>
		<div class="space-y-8">
			<h2>Education</h2>
			<div class="flex flex-row space-x-8">
				{#each education_data as education}
					<div class="space-y-4 w-1/3">
						<!-- When and where -->
						<div class="space-x-8 flex flex-row font-light uppercase">
							<p class="w-fit">
								{education.start_date} / <br />
								{education.end_date}
							</p>
							<p>{education.where}</p>
						</div>

						<!-- Title and description -->
						<p class="text-2xl">
							<span class="font-bold">{education.title},</span>
							{education.type}
						</p>
						<div class="space-y-1">
							<p class="font-light">{education.grade}</p>
							<p>
								{education.description}
							</p>
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
	<div class="flex flex-row space-x-8">
		<!-- Experience -->
		<div class="w-1/3 space-y-8">
			<h2>Experience</h2>
			<div class="flex flex-row space-x-8">
				{#each experience_data as experience}
					<div class="space-y-4">
						<!-- When and where -->
						<div class="space-x-8 flex flex-row">
							<p class="font-light uppercase w-2/5">
								{experience.start_date} /<br />
								{experience.end_date}
							</p>
							<p class="font-light uppercase w-3/5">{experience.where}</p>
						</div>

						<!-- Title and description -->
						<p class="text-2xl">
							<span class="font-bold">{experience.title},</span>
							{experience.type}
						</p>
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
		<div class="space-y-8 w-1/3">
			<h2>Achievements</h2>
			<div class="space-y-6">
				{#each achievements_data as achievements}
					<div>
						<div class="flex flex-row space-x-8">
							<p class="font-light uppercase">{achievements.date}</p>
							<p class="font-bold">{achievements.title}</p>
						</div>
						<p>{achievements.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Languages and skills -->
		<div class="space-y-16 w-1/3">
			<!-- Languages -->
			<div class="space-y-8">
				<h2>Languages</h2>
				<div class="space-y-6">
					<div>
						<p class="font-bold">Spanish</p>
						<p>Native or bilingual proficiency</p>
					</div>
					<div>
						<p class="font-bold">English</p>
						<p>Native or bilingual proficiency</p>
					</div>
					<div>
						<p class="font-bold">Swedish</p>
						<p>Native or bilingual proficiency</p>
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

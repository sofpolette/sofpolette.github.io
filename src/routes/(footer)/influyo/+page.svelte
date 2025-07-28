<script>
	import projects from '$lib/projects_new.json';
	import Project from '$lib/Project.svelte';
	import '$lib/typography.css';
	let data = projects[2];
</script>

<!-- Content -->
<Project {data} />

<main>
	<!-- Intro -->
	<div class="flex flex-col gap-12 m-12">
		<!-- Summary -->
		<div class="flex flex-col gap-8">
			<div class="flex flex-row gap-8">
				<div class="flex flex-col w-1/4">
					<p class="text-body-sm">Timeline</p>
					<p class="text-body-base">12 weeks (part-time)</p>
				</div>
				<div class="flex flex-col w-1/4">
					<p class="text-body-sm">Client</p>
					<p class="text-body-base">
						EASD Fernando Estévez — multidisciplinary art and design school (est. 1910, ~900
						students)
					</p>
				</div>
				<div class="flex flex-col w-1/4">
					<p class="text-body-sm">Role</p>
					<p class="text-body-base">
						Research, UX/UI Design, Visual Design, Brand Identity, Project Management
					</p>
				</div>
				<div class="flex flex-col w-1/4">
					<p class="text-body-sm">Tools</p>
					<p class="text-body-base">
						Figma, Illustrator, Photoshop, InDesign, Google Forms, paper + pen
					</p>
				</div>
			</div>

			<!-- TL; DR -->
			<div class="flex flex-row gap-8">
				<div class="flex flex-col w-1/4">
					<p class="text-body-sm">Goal</p>
					<p class="text-body-base">
						Help local students develop emotional regulation skills independently.
					</p>
				</div>
				<div class="flex flex-col w-2/4">
					<p class="text-body-sm">Outcome</p>
					<p class="text-body-base">
						Developed a mobile-first toolkit grounded in user research and emotional theory.
						Prototype tested with students, with feedback showing increased self-awareness and
						positive response to reflection tools.
					</p>
				</div>
				<div class="w-1/8" />
				<div class="w-1/8" />
			</div>
		</div>

		<!-- Quote -->
		<div class="flex flex-row gap-8 px-12 py-8 bg-[#1040b0] text-white rounded-2xl">
			<p class="text-h4">“Emotions are data, not directives”</p>
			<p class="text-h4 opacity-50">— Susan David</p>
		</div>

		<!-- Design process -->
		<div class="flex flex-col px-12 py-8 gap-6 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Design process</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex justify-center gap-24">
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-heart text-3xl" />
					<p class="text-body-sm">Empathise</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-pencil-line text-3xl" />
					<p class="text-body-sm">Define</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-lightbulb-filament text-3xl" />
					<p class="text-body-sm">Ideate</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-browsers text-3xl" />
					<p class="text-body-sm">Prototype</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-test-tube text-3xl" />
					<p class="text-body-sm">Test</p>
				</div>
			</div>

			<!-- Divider -->
			<hr class="border-t-[1.5px] border-[#1040b0]/50" />

			<!-- Notes -->
			<div class="flex flex-row gap-8">
				<div class="flex flex-row gap-8">
					<i class="ph-repeat text-lg" />
					<p class="text-body-xs">
						The approach was iterative and non-linear, allowing flexibility to revisit phases as
						needed.
					</p>
				</div>
				<div class="flex flex-row gap-8">
					<i class="ph-timer text-lg" />
					<p class="text-body-xs">
						The approach was iterative and non-linear, allowing flexibility to revisit phases as
						needed.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Problem & Goal Definition -->

	<!-- Title -->
	<div class="px-12 py-12 bg-[#1040b0] text-white">
		<p class="text-h2 text-center">Problem & Goal Definition</p>
	</div>

	<!-- Content -->
	<div class="flex flex-col gap-12 my-12">
		<div class="flex flex-row margins gap-8">
			<div class="flex flex-col margins px-12 py-8 gap-6 bg-[#1040b0]/10 rounded-2xl">
				<p class="text-h6 text-center">The problem</p>
				<hr class="border-t-[1.5px] border-[#1040b0]/50" />
				<p class="text-body-base">
					Students at EASD Fernando Estévez faced emotional challenges like stress, burnout, and low
					self-awareness—yet had limited tools or support to manage them. Despite emotional
					education being part of the curriculum, these issues remained largely invisible and
					unaddressed, affecting both academic performance and personal well-being.
				</p>
			</div>
			<div class="flex flex-col margins px-12 py-8 gap-6 bg-[#1040b0]/10 rounded-2xl">
				<p class="text-h6 text-center">The goal</p>
				<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
				<p class="text-body-base">
					To design a user-centered, research-driven initiative that helps students develop
					emotional self-awareness and self-management skills. The aim was to create accessible,
					context-appropriate resources that could improve well-being and engagement, while
					integrating naturally into students’ daily academic lives.
				</p>
			</div>
		</div>

		<div
			class="flex flex-col gap-6 mx-12 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
		>
			<p class="text-h6 text-center">Why the problem was challenging</p>
			<hr class="border-t-[1.5px] border-[#1040b0]/50" />
			<div class="flex flex-row gap-8">
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-bandaids text-3xl" />
					<p class="text-body-sm text-center">
						Limited school infrastructure for mental health or emotional support
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-users-four text-3xl" />
					<p class="text-body-sm text-center">
						Diversity in student ages, academic levels, and emotional readiness
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-chat-dots text-3xl" />
					<p class="text-body-sm text-center">
						Stigma around mental health made open conversations difficult
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-currency-dollar-simple text-3xl" />
					<p class="text-body-sm text-center">
						The intervention had to be scalable, low-cost, and easy to adopt
					</p>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col gap-6 mx-12 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
		>
			<p class="text-h6 text-center">Main Objectives</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-ear text-3xl" />
					<p class="text-body-sm text-center">
						Understand the emotional well-being challenges specific to EASD students
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-bezier-curve text-3xl" />
					<p class="text-body-sm text-center">
						Design practical, student-centered solutions rooted in their context and motivation
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-repeat text-3xl" />
					<p class="text-body-sm text-center">
						Test prototypes with students and refine based on their feedback
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-calendar text-3xl" />
					<p class="text-body-sm text-center">
						Create accessible, relevant resources for daily use in school life
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Phase 1: Empathise -->
	<div class="flex flex-col gap-12 my-12">
		<!-- Title -->
		<div
			class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white"
		>
			<p class="text-h2 opacity-50">Phase 1:</p>
			<p class="text-h2 text-center">Empathise</p>
		</div>

		<div class="flex flex-row gap-8 mx-12">
			<div class="flex flex-row gap-6">
				<div class="flex flex-col gap-8 w-1/2">
					<p class="text-h3">Research methods</p>
					<p class="">
						Since the issue initially came to light through my own and peers’ experiences, I used
						three research methods to confirm whether it impacted other student groups as well.
						Combining these approaches allowed me to explore the topic thoroughly while staying
						focused and avoiding distractions.
					</p>
				</div>

				<div
					class="flex flex-row gap-8 mx-12 px-12 py-8 w-1/2 items-center justify-center border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				>
					<div class="flex flex-col items-center justify-center gap-2">
						<i class="ph-user-focus text-3xl" />
						<p class="text-body-sm text-center">Interviews with experts</p>
					</div>
					<div class="flex flex-col items-center justify-center gap-2">
						<i class="ph-users-three text-3xl" />
						<p class="text-body-sm text-center">Student survey</p>
					</div>
					<div class="flex flex-col items-center justify-center gap-2">
						<i class="ph-books text-3xl" />
						<p class="text-body-sm text-center">Documentary research</p>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-row gap-8 mx-12">
			<p class="text-h4 w-2/4">Interviews with experts</p>
			<div class="flex flex-col w-1/4 gap-2">
				<p class="text-body-xs">Interview 1</p>
				<div>
					<p class="text-body-base font-bold">Evelia Sánchez Afonso</p>
					<p class="text-body-base">School Counselor</p>
				</div>
			</div>
			<div class="flex flex-col w-1/4 gap-2">
				<p class="text-body-xs">Interview 2</p>
				<div>
					<p class="text-body-base font-bold">Víctor Socas Guerra</p>
					<p class="text-body-base">Head of the Health Promotion and Emotional Education Program</p>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col gap-6 mx-12 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
		>
			<p class="text-h6 text-center">Key insights</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-headset text-3xl" />
					<p class="text-body-sm text-center">
						Mental health issues have increased since the COVID pandemic, but support systems are
						still severely lacking
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-user-focus text-3xl" />
					<p class="text-body-sm text-center">
						Students tend to navigate social relationships well but struggle more with
						self-awareness and emotional regulation
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-person-simple-walk text-3xl" />
					<p class="text-body-sm text-center">
						Emotional Agility is a useful framework to face emotions openly, let go of unhelpful
						thoughts, and take values-based action
					</p>
				</div>
			</div>
		</div>

		<div class="flex flex-row gap-8 mx-12">
			<p class="text-h4 w-2/4">Student Survey</p>
			<p class="text-body-base w-1/4">
				To capture firsthand insights at scale, I designed a primarily closed-ended survey focused
				on students’ academic and emotional experiences. This format enabled efficient analysis and
				comparison.
			</p>
			<p class="text-body-base w-1/4">
				<span class="font-bold">120 students</span> from different academic levels and specializations
				participated, showing deep interest in the initiative.
			</p>
		</div>

		<div
			class="flex flex-col gap-6 mx-12 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
		>
			<p class="text-h6 text-center">Questions included</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-chalkboard-teacher text-3xl" />
					<p class="text-body-sm text-center">
						How do you feel about your studies and academic environment?
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-heartbeat text-3xl" />
					<p class="text-body-sm text-center">
						What emotions arise in response to academic pressure?
					</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-wrench text-3xl" />
					<p class="text-body-sm text-center">Do you feel equipped to manage these emotions?</p>
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<i class="ph-brain text-3xl" />
					<p class="text-body-sm text-center">
						Included a simple emotional intelligence self-assessment test
					</p>
				</div>
			</div>
		</div>

		<!-- Quote -->
		<div class="mx-12 flex flex-row gap-8 px-12 py-8 bg-[#1040b0] text-white rounded-2xl">
			<p class="text-h4">
				“The biggest challenge I’ll face [in my professional future] will be myself and my
				psychological circumstances.”
			</p>
			<p class="text-h4 opacity-50">— Anonymous participant, emotional well-being survey</p>
		</div>
	</div>

	<!-- Phase 2: Define -->

	<!-- Title -->
	<div class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Phase 2:</p>
		<p class="text-h2 text-center">Define</p>
	</div>

	<!-- Content -->
	<div class="flex flex-col gap-12 my-24 mx-32">
		<div class="flex flex-col gap-12">
			<p class="text-h3">Redefining the Problem Through Research</p>
			<div class=" flex flex-row gap-8 text-body-base">
				<p class="w-1/2">
					Through primary (survey, EI test) and secondary research, we refined the initial problem
					to reveal a clear gap in students’ intrapersonal skills—especially self-awareness. The
					emotional intelligence test showed that while many students demonstrated some ability in
					self-management, self-awareness was significantly lower.
				</p>
				<p class="w-1/2">
					Open-ended responses provided context, revealing common struggles: insecurity, fear of
					being undervalued, difficulty meeting deadlines, and handling intense emotions. Despite
					academic and specialization differences, these emotional challenges were consistently
					reported across the student body.
				</p>
			</div>
		</div>
		<div class="flex flex-row margins gap-8 items-center justify-center">
			<img src="/influyo/cluster1.jpg" alt="" class="w-1/3" />
			<img src="/influyo/cluster2.jpg" alt="" class="w-1/3" />
			<img src="/influyo/cluster3.jpg" alt="" class="w-1/3" />
		</div>
		<div class=" flex flex-row gap-8 text-body-base">
			<p class="w-1/2">
				By clustering the survey data and synthesizing insights with user personas and empathy maps,
				the focus sharpened on two main categories: self-awareness and self-management.
			</p>
			<p class="w-1/2">
				These intrapersonal skills appeared to be the foundation for addressing students’ emotional
				challenges, outweighing interpersonal or technical skill concerns.
			</p>
		</div>
		<div class="flex flex-row margins gap-8 items-center justify-center">
			<img src="/influyo/user-persona.jpg" alt="" class="w-1/2" />
			<img src="/influyo/empathy-map.jpg" alt="" class="w-1/2" />
		</div>
	</div>

	<!-- Divider -->
	<hr class="border-t-[1.5px] border-[#1040b0]/50" />

	<div class="flex flex-col gap-12 my-24 mx-32">
		<div class="flex flex-col gap-12">
			<p class="text-h3">From Problem to Content Strategy</p>
			<p class="">
				With a clearer picture of students’ emotional needs, the content strategy began by focusing
				on self-awareness—helping students identify emotions, recognize personal strengths, and
				reflect on their existing coping habits. From there, the goal was to guide them toward a
				confident, self-directed vision of the future.
			</p>
		</div>
		<img src="/influyo/content-strategy.jpg" alt="" class="" />
	</div>

	<!-- Divider -->
	<hr class="border-t-[1.5px] border-[#1040b0]/50" />

	<div class="flex flex-col gap-12 my-24 mx-32">
		<p class="text-h3">Choosing the Right platform: Digital vs. Physical</p>
		<div class=" flex flex-row gap-8 text-body-base">
			<p class="w-1/2">
				Initially, a printed hand-book was considered, but after evaluating pros and cons, a digital
				format was chosen. Digital offers greater accessibility and fits better with students’
				existing daily digital habits, making it more accesible. While some activities encourage
				offline writing, the digital platform acts as a bridge between digital and physical tools.
			</p>
			<p class="w-1/2">
				Additionally, the digital format enables data analysis to track usage and improve the tool,
				supports user progress monitoring, and offers long-term benefits for emotional agility.
				Making the resource digital and public also allows it to serve not just the school community
				but to inspire broader emotional competence initiatives.
			</p>
		</div>
	</div>

	<!-- Phase 3: Ideate -->

	<div>
		<!-- Title -->
		<div
			class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white"
		>
			<p class="text-h2 opacity-50">Phase 3:</p>
			<p class="text-h2 text-center">Ideate</p>
		</div>

		<!-- Content -->
		<div class="flex flex-col gap-12 my-24 mx-32">
			<div class="flex flex-col gap-12">
				<p class="text-h3">Content strategy</p>
				<div class=" flex flex-row gap-8 text-body-base">
					<p class="w-1/2">
						The content strategy was shaped around two key content types: techniques (practical
						tools for emotional regulation and self-reflection) and itineraries (guided paths
						tailored to the student’s emotional state and goals).
					</p>
					<p class="w-1/2">
						These content blocks were carefully defined and categorized using insights from the
						empathy phase and structured using the content diagram developed in the define stage.
					</p>
				</div>
			</div>

			<div class="flex flex-row gap-8 items-start justify-center">
				<img
					src="/influyo/content-sketch1.jpg"
					alt=""
					class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
				<img
					src="/influyo/content-sketch2.jpg"
					alt=""
					class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
			</div>
		</div>

		<!-- Divider -->
		<hr class="border-t-[1.5px] border-[#1040b0]/50" />

		<div class="flex flex-col gap-12 my-24 mx-32">
			<div class="flex flex-col gap-12">
				<p class="text-h3">UX design</p>
				<div class=" flex flex-row gap-8 text-body-base">
					<p class="w-1/2">
						The UX design phase began by analyzing references like Headspace, Design Orientation
						Scale or Design Toolkit UOC and translating research into structure.
					</p>
					<p class="w-1/2">
						Early ideation focused on how to organize and present the selected content in a way that
						felt intuitive, supportive, and engaging for students.
					</p>
				</div>
			</div>

			<div class="flex gap-8 w-fit max-w-full h-64">
				<img
					src="/influyo/ux-sketch1.jpg"
					alt=""
					class="w-64
 object-cover h-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
				<img
					src="/influyo/ux-sketch2.jpg"
					alt=""
					class="w-32
 object-cover h-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
				<img
					src="/influyo/ux-sketch3.jpg"
					alt=""
					class="w-32
 object-cover h-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
				<img
					src="/influyo/ux-sketch4.jpg"
					alt=""
					class="w-64
 object-cover h-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
			</div>

			<div class="flex flex-row gap-8 items-start justify-center">
				<img
					src="/influyo/wireframe1.jpg"
					alt=""
					class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
				<img
					src="/influyo/wireframe2.jpg"
					alt=""
					class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
				/>
			</div>
		</div>
	</div>

	<!-- Phase 4: Prototype -->

	<!-- Title -->
	<div class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Phase 4:</p>
		<p class="text-h2 text-center">Prototype</p>
	</div>

	<div class="m-12 gap-12">
		<!-- Prototype 1 -->
		<div class="mb-12">
			<iframe
				style="border: 1px solid rgba(0, 0, 0, 0.1);"
				class="w-full h-124"
				src="https://embed.figma.com/proto/uMeZAvbihqQ8QSJT7tg81z/Influyo?node-id=222-1648&scaling=scale-down&content-scaling=fixed&page-id=222%3A1432&starting-point-node-id=222%3A1648&embed-host=share"
				allowfullscreen
			/>
		</div>

		<!-- Prototype stills -->
		<!-- <div class="grid grid-cols-4 gap-8 justify-istems-center mx-24">
			<img src="/influyo/prototype1-landing.png" alt="" class="w-full h-auto" />
			<img src="/influyo/prototype1-itinerary.png" alt="" class="w-full h-auto" />
			<img src="/influyo/prototype1-technique.png" alt="" class="w-full h-auto" />
			<img src="/influyo/prototype1-feedback.png" alt="" class="w-full h-auto" />
		</div> -->
	</div>

	<!-- Phase 5: Test -->
	<!-- Title -->
	<div class="flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Phase 5:</p>
		<p class="text-h2 text-center">Test</p>
	</div>

	<div class="flex flex-col gap-12 my-12 mx-32">
		<p class="mx-24">
			The first prototype was tested with 5 users, whose feedback provided valuable direction for
			refinement. The most relevant insight was the need for a more personalized and continuous
			experience.
		</p>

		<!-- User insights -->
		<div class="flex flex-col gap-6 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Users expressed wanting to</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex w-1/3 flex-col items-center justify-center gap-2">
					<i class="ph-user text-3xl" />
					<p class="text-body-sm text-center">Create a <br />personal profile</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-flag-banner text-3xl" />
					<p class="text-body-sm text-center">Track their progress <br />over time</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-list-checks text-3xl" />
					<p class="text-body-sm text-center">Review previously completed activities</p>
				</div>
			</div>
		</div>

		<p class="mx-24">
			These suggestions highlighted the importance of continuity and reflection within the tool, not
			just one-time use. Based on this, new functionalities were proposed, and the design process
			returned to the sketching phase. User flows were also created to identify potential gaps or
			friction points in the navigation and user experience.
		</p>

		<!-- Quote -->
		<div class="flex flex-row gap-8 px-12 py-8 bg-[#1040b0] text-white rounded-2xl">
			<p class="text-h4">
				“It’d be helpful to reread my older answers or check what I wrote earlier.”
			</p>
			<p class="text-h4 opacity-50">— Student participant, usability testing session</p>
		</div>
	</div>

	<!-- Back to phase 3: -->
	<!-- Ideate -->
	<div class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Phase 5:</p>
		<p class="text-h2 text-center">Test</p>
	</div>

	<div class="flex flex-col gap-12 my-12 mx-32">
		<p class="">
			The second round of ideation followed a similar wireframing process as the first, now focused
			on implementing new functionalities based on user feedback.
		</p>

		<!-- User insights -->
		<div class="flex flex-col gap-6 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Key additions</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex w-1/3 flex-col items-center justify-center gap-2">
					<i class="ph-user-circle text-3xl" />
					<p class="text-body-sm text-center">User profile creation and customization</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-calendar-check text-3xl" />
					<p class="text-body-sm text-center">Emotion tracking <br />calendar</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-star text-3xl" />
					<p class="text-body-sm text-center">Editing and saving favorite techniques</p>
				</div>
			</div>
		</div>

		<!-- Sketches -->
		<div class="flex flex-wrap gap-8 justify-center items-start">
			<img
				src="/influyo/ideate2-sketch1.jpg"
				alt=""
				class="h-64 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/ideate2-sketch2.jpg"
				alt=""
				class="h-64 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/ideate2-sketch3.jpg"
				alt=""
				class="h-48 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/ideate2-sketch4.jpg"
				alt=""
				class="h-64 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
		</div>

		<p class="">
			Additionally, a new emotion identification flow was designed, inspired by Plutchik’s Wheel of
			Emotions. The session also introduced basic interactions for sign-up and login, building the
			foundation for a more personalized user experience.
		</p>

		<div class="flex flex-row gap-8 items-start justify-center">
			<img
				src="/influyo/wireframe3.jpg"
				alt=""
				class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/wireframe4.jpg"
				alt=""
				class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
		</div>
	</div>

	<!-- Divider -->
	<hr class="border-t-[1.5px] border-[#1040b0]/50" />

	<!-- Visual Identity & UI Design -->
	<div class="flex flex-col gap-12 my-24 mx-32">
		<div class="flex flex-col gap-12 mx-24">
			<p class="text-h3">Visual Identity & UI Design</p>
			<p class="">
				The visual direction of the project began to take shape with the naming process. Through a
				series of word-mapping and deconstruction exercises, I arrived at Influyo (“I make a
				difference”)—a name that captures the essence of self-agency, personal growth, and flow.
			</p>
		</div>

		<div class="flex flex-row gap-8 items-start justify-center">
			<img
				src="/influyo/naming-sketch1.jpg"
				alt=""
				class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/naming-sketch2.jpg"
				alt=""
				class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
		</div>

		<div class="mx-24">
			<p class="">
				From there, the visual identity began to take form. Early sketching explored metaphors for
				emotional complexity and user transformation, while also considering color, texture, and
				typography that would feel both grounded and relatable for students.
			</p>
		</div>

		<div class="flex flex-row gap-8 items-start justify-center">
			<img
				src="/influyo/visual-sketch1.jpg"
				alt=""
				class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/visual-sketch2.jpg"
				alt=""
				class="w-1/2 border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
		</div>

		<div class="flex flex-row gap-12">
			<p class="w-1/2">
				This naturally led into UI design. Familiar elements like textured noise, human silhouettes,
				and abstract patterns, were carried into interface sketches, helping visually connect
				identity and functionality.
			</p>
			<p class="w-1/2">
				One key challenge was designing an intuitive way to represent emotions. After testing
				multiple models, I landed on a simple but effective approach: emotions as shapes inside a
				head silhouette, using color (emotion) and size (intensity) for clarity.
			</p>
		</div>

		<!-- Sketches -->
		<div class="flex flex-wrap gap-8 justify-center items-start">
			<img
				src="/influyo/ui-sketch1.jpg"
				alt=""
				class="h-64 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/ui-sketch2.jpg"
				alt=""
				class="h-64 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
			<img
				src="/influyo/ui-sketch3.jpg"
				alt=""
				class="h-64 w-auto border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			/>
		</div>

		<div class="mx-24">
			<p class="">
				To support this system, the UI color palette was rethought using Plutchik’s emotional color
				theory as a base, but adapted for visual harmony and high contrast in interface use. This
				shift caused a noticeable leap in visual coherence between prototypes.
			</p>
		</div>

		<!-- Color reference and result -->
		<div class="flex gap-8 justify-center items-start">
			<img src="/influyo/plutchnik.png" alt="" class="w-1/2" />
			<img src="/influyo/visual-colors.png" alt="" class=" w-1/2" />
		</div>
	</div>

	<!-- Back to phase 4: -->
	<!-- Prototype -->
	<div class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Back to phase 4:</p>
		<p class="text-h2 text-center">Prototype</p>
	</div>

	<div class="flex flex-col gap-12 my-12 mx-24">
		<iframe
			style="border: 1px solid rgba(0, 0, 0, 0.1);"
			class="w-full h-124"
			src="https://embed.figma.com/proto/JrebuelLfmRB7gGsClX2BS/Influyo-3?node-id=222-1648&scaling=scale-down&content-scaling=fixed&page-id=222%3A1432&starting-point-node-id=222%3A1648&embed-host=share"
			allowfullscreen
		/>

		<!-- Prototype stills -->
		<!-- <div class="grid grid-cols-4 gap-8 justify-istems-center mx-24">
			<img src="/influyo/prototype2-landing.png" alt="" class="w-full h-auto" />
			<img src="/influyo/prototype2-ID.png" alt="" class="w-full h-auto" />
			<img src="/influyo/prototype2-itinerary.png" alt="" class="w-full h-auto" />
			<img src="/influyo/prototype2-technique.png" alt="" class="w-full h-auto" />
		</div> -->
	</div>

	<!-- Back to phase 5: -->
	<!-- Test -->
	<div class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Back to phase 5:</p>
		<p class="text-h2 text-center">Test</p>
	</div>

	<div class="flex flex-col gap-12 my-12 mx-24">
		<p class="mx-24">
			Throughout iterations, testing feedback was critical. The second prototype was tested by 8
			users, which informed improvements that helped refine the final visual and interaction
			experience.
		</p>

		<!-- User insights -->
		<div class="flex flex-col gap-6 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Pain points</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex w-1/4 flex-col items-center justify-center gap-2">
					<i class="ph-article-ny-times text-3xl" />
					<p class="text-body-sm text-center">
						Content felt too long and not engaging enough to practice
					</p>
				</div>
				<div class="flex flex-col w-1/4 items-center justify-center gap-2">
					<i class="ph-calendar-check text-3xl" />
					<p class="text-body-sm text-center">Abstract techniques were hard to understand</p>
				</div>
				<div class="flex flex-col w-1/4 items-center justify-center gap-2">
					<i class="ph-star text-3xl" />
					<p class="text-body-sm text-center">
						Users did not understand what the product did on first use
					</p>
				</div>
				<div class="flex flex-col w-1/4 items-center justify-center gap-2">
					<i class="ph-star text-3xl" />
					<p class="text-body-sm text-center">Overuse of color distracted from the content</p>
				</div>
			</div>
		</div>

		<!-- Quote -->
		<div class="flex flex-row gap-8 px-12 py-8 bg-[#1040b0] text-white rounded-2xl">
			<p class="text-h4">"There’s too much text... I kind of lose interest halfway through."</p>
			<p class="text-h4 opacity-50">— Student participant, usability testing session</p>
		</div>
	</div>

	<!-- Back to phase 4: Prototype -->
	<div class=" flex flex-row px-12 py-12 gap-8 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 opacity-50">Back to phase 4:</p>
		<p class="text-h2 text-center">Prototype</p>
	</div>

	<div class="flex flex-col gap-12 my-12 mx-24">
		<p class="mx-24">
			The final prototype focused on clarity, personalization, and delight. These changes made the
			kit more intuitive, engaging, and better aligned with students’ emotional needs.
		</p>

		<!-- User insights -->
		<div class="flex flex-col gap-6 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Pain points</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8">
				<div class="flex w-1/4 flex-col items-center justify-start gap-2">
					<i class="ph-image text-3xl" />
					<p class="text-body-sm text-center">Simplified text explanations and added visual aids</p>
				</div>
				<div class="flex flex-col w-1/4 items-center justify-center gap-2">
					<i class="ph-compass text-3xl" />
					<p class="text-body-sm text-center">Added onboarding flow to guide first-time users</p>
				</div>
				<div class="flex flex-col w-1/4 items-center justify-center gap-2">
					<i class="ph-swatches text-3xl" />
					<p class="text-body-sm text-center">Improved visual consistency and refined color use</p>
				</div>
				<div class="flex flex-col w-1/4 items-center justify-center gap-2">
					<i class="ph-cards text-3xl" />
					<p class="text-body-sm text-center">
						Redesigned homepage with seasonal, mood-aware content for students
					</p>
				</div>
			</div>
		</div>

		<iframe
			style="border: 1px solid rgba(0, 0, 0, 0.1);"
			class="w-full h-124"
			src="https://embed.figma.com/proto/6LVE2pl0d77XDJI2yIuRV7/InfluyoTFG?node-id=222-1648&scaling=scale-down&content-scaling=fixed&page-id=222%3A1432&starting-point-node-id=222%3A1648&show-proto-sidebar=1&embed-host=share"
			allowfullscreen
		/>
	</div>

	<!-- Final results -->
	<div class=" flex flex-row px-12 py-12 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 text-center">The Results</p>
	</div>

	<div class="image-container">
		<div class="full-width-image">
			<img src="/influyo/prototype3-landing.png" alt="" />
		</div>
		<div class="full-width-image">
			<img src="/influyo/prototype3-itinerary.png" alt="" />
		</div>
	</div>

	<div class="flex flex-col gap-8 my-24 mx-32">
		<p class="text-h3">Emotional ID Flow</p>
		<div class=" flex flex-row gap-8 text-body-base">
			<p class="w-1/2">
				Identifying emotions is key to enhancing students' self-awareness. The emotional ID flow was
				developed to make this process more approachable.
			</p>
			<p class="w-1/2">
				The Plutchnik emotional model is used as inspiration, defining emotions through two
				variables:
			</p>
		</div>
		<div class="flex flex-row gap-8">
			<div
				class="flex flex-col w-1/2 p-12 gap-4 items-center justify-center border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			>
				<i class="ph-swatches text-3xl" />
				<div class="flex flex-col gap-1">
					<p class="text-body-base text-center uppercase">Color</p>
					<p class="text-body-sm text-center">To identify the type of emotion</p>
				</div>
			</div>
			<div
				class="flex flex-col w-1/2 p-12 gap-4 items-center justify-center border-[1.5px] border-[#1040b0]/50 rounded-2xl"
			>
				<i
					class="ph-arrows-out-simple

 text-3xl"
				/>
				<div class="flex flex-col gap-1">
					<p class="text-body-base text-center uppercase">Size</p>
					<p class="text-body-sm text-center">To express emotional intensity</p>
				</div>
			</div>
		</div>
		<p class="">
			This system makes it easier for users to identify their emotional state. Additionally, it also
			contributes to developing students' emotional vocabulary.
		</p>
	</div>

	<!-- Divider -->
	<hr class="border-t-[1.5px] border-[#1040b0]/50" />

	<div class="flex flex-col gap-8 my-24 mx-32">
		<p class="text-h3">Visual Identity</p>
		<p class="">
			The visual identity builds on the project’s unique emotion system—represented by a filled
			circle within an outlined one. This element replaces the letter “o” in the logotype,
			reinforcing the concept visually.
		</p>
	</div>

	<div class="full-width-image">
		<img src="/influyo/logo.gif" alt="" />
	</div>

	<div class="flex flex-col gap-8 my-24 mx-32">
		<p>
			To ensure adaptability across digital formats, especially in small sizes, a simplified symbol
			(the emotion icon) is used as a standalone brand mark when needed, such as for the favicon.
		</p>
	</div>

	<div class="full-width-image">
		<img src="/influyo/symbol.jpg" alt="" />
	</div>

	<div class="flex flex-col gap-8 my-24 mx-32">
		<p>
			The color palette assigns one distinct color to each of the eight core emotions, complemented
			by neutral tones (gray and white). To maintain clarity and visual harmony, emotion colors are
			only paired with neutrals, never with each other. This approach creates a vibrant yet cohesive
			identity rooted in the product’s content.
		</p>
	</div>

	<div class="full-width-image">
		<img src="/influyo/colors.jpg" alt="" />
	</div>

	<div class="flex flex-col gap-8 my-24 mx-32">
		<p class="text-h3">Launch Campaign</p>
		<p class="">
			To ensure that students were aware of and used the platform, a launch campaign was designed
			that included the delivery of a physical starter kit to each student.
		</p>

		<!-- Onboarding kit included -->
		<div class="flex flex-col gap-6 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Onboarding kit included</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8 text-center">
				<div class="flex w-1/3 flex-col items-center justify-start gap-2">
					<i class="ph-image text-3xl" />
					<p class="text-body-sm">Educational cards</p>
					<p class="text-body-base">Introducing students to the emotional ID system</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-compass text-3xl" />
					<p class="text-body-sm">Merchandising</p>
					<p class="text-body-base">Increasing brand presence & recognition in the school</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-swatches text-3xl" />
					<p class="text-body-sm">Supporting materials</p>
					<p class="text-body-base">Inviting the user to <br />write manually</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Merchandising -->
	<div class="image-row flex justify-between w-1/3">
		<img src="/influyo/stationary.png" alt="" class="pair-image" />
		<img src="/influyo/stickers.jpg" alt="" class="pair-image right-image" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="/influyo/laptop.jpg" alt="" class="pair-image" />
		<img src="/influyo/cards.jpg" alt="" class="pair-image right-image" />
	</div>
	<div class="image-row flex justify-between w-1/3">
		<img src="/influyo/pins.jpg" alt="" class="pair-image" />
		<img src="/influyo/tote.png" alt="" class="pair-image right-image" />
	</div>

	<div class=" flex flex-row px-12 py-12 items-center justify-center bg-[#1040b0] text-white">
		<p class="text-h2 text-center">The Impact</p>
	</div>

	<div class="flex flex-col gap-12 my-24 mx-32">
		<div class="flex flex-row gap-8">
			<div class="w-1/3 flex flex-col gap-4">
				<p class="text-body-sm">Validated by users and experts</p>
				<p class="text-body-base">
					Although the project wasn’t formally launched, testing and survey feedback confirmed its
					relevance. Students and educators saw clear value in the toolkit’s ability to support
					emotional well-being in a practical, engaging way.
				</p>
			</div>
			<div class="w-1/3 flex flex-col gap-4">
				<p class="text-body-sm">Designed to complement the curriculum</p>
				<p class="text-body-base">
					While emotional education is part of the school’s curriculum, many students found it
					difficult to apply in real life. This toolkit provides a more approachable, self-guided
					way to build emotional skills—reinforcing what’s taught in class, but in a way that feels
					relevant and personal.
				</p>
			</div>
			<div class="w-1/3 flex flex-col gap-4">
				<p class="text-body-sm">Resource-aware by design</p>
				<p class="text-body-base">
					The modular, digital-first format was intentionally created to be low-cost, scalable, and
					easy to adopt—without adding pressure to already limited staff or school infrastructure.
				</p>
			</div>
		</div>

		<!-- Potential long-term impact -->
		<div class="flex flex-col gap-6 px-12 py-8 border-[1.5px] border-[#1040b0]/50 rounded-2xl">
			<p class="text-h6 text-center">Potential long-term impact</p>
			<hr class="border-t-[1.5px] border-[#1040b0] opacity-50" />
			<div class="flex flex-row gap-8 text-center">
				<div class="flex w-1/3 flex-col items-center justify-start gap-2">
					<i class="ph-smiley text-3xl" />
					<p class="text-body-sm">Reduce burnout and academic disengagement</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i
						class="ph-link-break

 text-3xl"
					/>
					<p class="text-body-sm">Decrease pressure on school counseling services</p>
				</div>
				<div class="flex flex-col w-1/3 items-center justify-center gap-2">
					<i class="ph-strategy text-3xl" />
					<p class="text-body-sm">Improve focus and self-led problem-solving</p>
				</div>
			</div>
		</div>
	</div>
</main>

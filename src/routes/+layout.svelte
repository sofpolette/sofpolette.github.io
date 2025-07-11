<script>
	import '../app.postcss';
	import Marquee from 'svelte-fast-marquee';
</script>

<main>
	<!-- Desktop marquee -->
	<!-- <Marquee class="sticky top-0 left-0 right-0 bg-[#1040B0] text-white marquee-text">
		<div class="max-lg:hidden flex flex-row justify-between w-[95vw]">
			<span>Seeking in-house opportunities</span>
			<span>/</span>
			<span>Seeking in-house opportunities</span>
			<span>/</span>
			<span>Seeking in-house opportunities</span>
			<span>/</span>
		</div>
	</Marquee> -->

	<!-- Mobile marquee -->
	<!-- <Marquee class="sticky top-0 left-0 right-0 bg-[#1040B0] text-white marquee-text">
		<div class="lg:hidden flex flex-row gap-16 w-[100vw]">
			<span>Actively seeking in-house opportunities</span>
			<span>/</span>
		</div>
	</Marquee> -->

	<!-- Blue line -->
	<div class="bg-[#1040B0] h-2" />

	<!-- Desktop menu -->
	<div class="flex flex-row w-full justify-between my-6 gap-8 max-md:hidden margins">
		<!-- Left -->
		<a href="/" class="flex justify-start w-1/3 text-menu hover:underline">
			SOFÍA J. POLETTE STUBB
		</a>

		<!-- Center -->
		<a href="/about-me" class="flex justify-center w-1/3 text-menu hover:underline"> about me </a>

		<!-- Right -->
		<div class="flex justify-end items-center w-1/3">
			<a href="/contact" class="flex items-center gap-2 text-menu group">
				<span class="hover:underline">Get in touch!</span>
				<span
					class="emoji-fly inline-block not-italic group-hover:animate-fly transition-transform"
					style="font-size: 1.6em;">✉</span
				>
			</a>
		</div>
	</div>

	<!-- Body -->
	<slot />
</main>

<style>
	/* Reuse styles or create new ones for top menu emoji */
	.emoji-fly {
		position: relative;
		left: 0;
		transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-block;
	}

	.text-menu {
		position: relative; /* container for relative positioning */
		font-weight: 600; /* example styling */
		text-transform: uppercase;
	}

	.text-menu:hover .emoji-fly {
		left: calc(100%); /* move emoji to container's right edge */
	}
</style>

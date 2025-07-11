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
		<a href="/" class="flex justify-right w-2/3 menu-item hover:underline">
			SOFÍA J. POLETTE STUBB
		</a>
		<div class="flex flex-row w-1/3 h-fit items-center space-x-2">
			<a href="/contact" class="menu-item h-full w-full hover:underline">
				Get in touch!&nbsp;&nbsp;<span class="emoji-fly" style="font-size: 1.6em;">✉</span>
			</a>
		</div>
	</div>

	<!-- Mobile menu -->
	<div class="flex flex-row w-full justify-between items-center my-6 md:hidden margins">
		<a href="/" class="flex menu-item w-1/2">SOFÍA J. <br />POLETTE STUBB</a>
		<div class="w-2/3 flex flex-col gap-1 justify-between">
			<div class="flex flex-row w-full h-fit items-center gap-2 justify-end">
				<a href="/contact" class="menu-item"
					>Get in touch! &nbsp &nbsp<span style="font-size: 1.6em;">✉</span></a
				>
			</div>
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

	.menu-item {
		position: relative; /* container for relative positioning */
		font-weight: 600; /* example styling */
		text-transform: uppercase;
	}

	.menu-item:hover .emoji-fly {
		left: calc(100%); /* move emoji to container's right edge */
	}
</style>

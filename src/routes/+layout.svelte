<script>
	import '../app.postcss';
	import Marquee from 'svelte-fast-marquee';
</script>

<main>
	<Marquee class="sticky top-0 left-0 right-0 bg-[#1040B0] text-white marquee-text">
		<div class="gap-5 flex flex-row">
			<span>Actively seeking in-house and agency opportunities</span>
			<!-- <span>/</span> -->
		</div>
	</Marquee>

	<!-- Desktop menu -->
	<div
		class="flex flex-row w-full justify-between my-6 py-2 max-md:hidden max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]"
	>
		<div class="flex flex-row space-x-16 w-1/3">
			<div><a href="/cv" class="menu-item">CV</a></div>
			<div class="opacity-60">
				<p href="" class="menu-item">Additional<br />works</p>
				<p class=" text-sm">(under construction)</p>
			</div>
		</div>
		<a href="/" class="flex justify-center w-1/3 menu-item">SOFÍA J. POLETTE STUBB</a>
		<div class="flex flex-row w-1/3 justify-end h-fit items-center space-x-2">
			<a href="/contact" class="menu-item">Get in touch</a>
			<div class="w-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#1040b0"
					viewBox="0 0 24 24"
					stroke-width="3"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	<div
		class="flex flex-col w-full gap-4 my-6 py-2 md:hidden max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]"
	>
		<a href="/" class="flex justify-center w-full menu-item text-center">SOFÍA J. POLETTE STUBB</a>
		<div class="flex flex-col gap-4 w-full my-6 items-center">
			<div><a href="/cv" class="menu-item text-center">CV</a></div>
			<div class="opacity-60 text-center">
				<p href="" class=" menu-item text-center">Additional works</p>
				<p class=" text-sm text-center">(under construction)</p>
			</div>
			<div class="flex flex-row h-fit items-center gap-2">
				<a href="/contact" class="menu-item">Get in touch</a>
				<div class="w-4 justify-end">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#1040b0"
						viewBox="0 0 24 24"
						stroke-width="3"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>

	<!-- Body -->
	<slot />
</main>

<script>
	import '../../app.postcss';
</script>

<main>
	<!-- Body -->
	<slot />

	<!-- Footer -->
	<footer class="">
		<a
			href="/contact"
			class="flex flex-row w-full justify-between bg-[#1040b0] py-4 max-md:px-[2vh] max-xl:px-[8vh] xl:px-[12vh]"
		>
			<p class="lora text-4xl text-[#FCFCF7]">Let's collaborate!</p>
			<div class="w-10">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#FCFCF7"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="#FCFCF7"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
					/>
				</svg>
			</div>
		</a>
	</footer>
</main>

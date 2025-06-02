<script>
	import '../../app.postcss';
</script>

<main>
	<!-- Body -->
	<slot />

	<!-- Footer -->
	<footer>
		<a
			href="/contact"
			class="flex flex-row w-full justify-between hover:underline text-[#1040b0] hover:bg-[#1040b0] hover:text-[#FCFCF7] transition-colors duration-300 py-8 max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]"
		>
			<p class="text-2xl uppercase w-full relative">
				Get in touch!
				<span class="emoji-fly ml-4">✉</span>
			</p>
		</a>
	</footer>
</main>

<style>
	.emoji-fly {
		position: relative;
		left: 0;
		transition: left 0.8s cubic-bezier(0.4, 0, 0.2, 1);
		display: inline-block;
		font-size: 1.5em;
	}

	a:hover .emoji-fly {
		left: calc(100%); /* move emoji right to edge of container */
	}
</style>

<script>
	import '../../app.css';
	import '$lib/typography.css';
</script>

<main>
	<!-- Body -->
	<slot />

	<!-- Footer -->
	<footer>
		<a
			href="/contact"
			class="flex flex-row w-full justify-between margins hover:underline text-[#1040b0] hover:bg-[#1040b0] transition-colors duration-300 py-8"
		>
			<p class="text-2xl uppercase w-full relative hover:text-[#FCFCF7]">
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

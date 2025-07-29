<script>
	import '../../app.css';
	import '$lib/typography.css';
</script>

<main>
	<!-- Body -->
	<slot />

	<!-- Footer -->
	<footer class="">
		<a
			href="/contact"
			class="group flex flex-row w-full justify-between margins hover:bg-[#1040b0] transition-colors duration-300 py-8"
		>
			<p
				class="text-h5 uppercase font-normal w-full relative group-hover:text-[#FCFCF7] group-hover:underline group-hover:decoration-[#FCFCF7]"
			>
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

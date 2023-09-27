<script>
	import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
	import '@glidejs/glide/dist/css/glide.core.min.css';
	import '@glidejs/glide/dist/css/glide.theme.min.css';
	import { onMount } from 'svelte';

	// Props
	export let images;

	var currIdx = 0;
	var glide;

	onMount(() => {
		glide = new Glide('.glide', {
			type: 'carousel',
			startAt: 0,
			perView: 1,
			gap: 0,
			focusAt: 'center',
			autoplay: 4000,
			hoverpause: true,
			peek: 0
		});

		glide.on('move', function () {
			currIdx = glide.index;
		});

		glide.mount({ Controls, Breakpoints });
	});
</script>

<div class="glide space-y-2">
	<!-- Images -->
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides">
			{#each images as img}
				<li class="glide__slide">
					<img src={img.path} alt={img.caption} class="rounded-3xl object-contain object-left" />
				</li>
			{/each}
		</ul>
	</div>
	<!-- Controls and caption -->
	<div data-glide-el="controls" class="flex flex-row items-center space-x-1">
		<button data-glide-dir="<"
			><img
				src="/icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg"
				alt="Previous"
				class="h-6"
			/></button
		>
		<div>{currIdx + 1} / {images.length}</div>
		<button data-glide-dir=">"
			><img
				src="/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg"
				alt="Next"
				class="h-6"
			/></button
		>
		<p class="opacity-70">{images[currIdx].caption}</p>
	</div>
</div>

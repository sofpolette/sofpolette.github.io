<script>
	import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
	import { onMount } from 'svelte';

	// Props
	export let images;

	var currIdx = 0;
	var glide;

	// on:swipe.move() {
	// 	currIdx = glide.index;
	// }

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

<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" />
<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.theme.min.css" />
<div class="glide">
	<div class="glide__track" data-glide-el="track">
		<ul class="glide__slides">
			{#each images as img}
				<li class="glide__slide">
					<img src={img.path} alt={img.caption} />
				</li>
			{/each}
		</ul>
	</div>
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

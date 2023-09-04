<!--
	TODO
	- Fix object cover for both vertical and horizontal images
-->

<script>
	import { data } from 'autoprefixer';
	import Siema from 'siema';
	import { onMount } from 'svelte';

	let slider, prev, next, radioSlider;

	// Props
	export let images;

	let currIndex = 1;
	let currImg = images[0];

	onMount(() => {
		slider = new Siema({
			selector: '.siema',
			duration: 200,
			easing: 'ease-in-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: true,
			rtl: false,
			onInit: () => {},
			onChange: () => {}
		}); //end Siema constructor

		prev = () => {
			slider.prev();
			currIndex = (((currIndex - 1) % images.length) + images.length) % images.length;
			if (currIndex == 0) {
				currIndex = images.length;
			}
			currImg = images[currIndex - 1];
		};

		next = () => {
			slider.next();
			currIndex = (currIndex % images.length) + 1;
			currImg = images[currIndex - 1];
		};
	}); //end onMount
</script>

<div class="space-y-8">
	<div class="siema">
		{#each images as img}
			<div class="flex w-full h-64 justify-left">
				<img src={img.path} alt={img.caption} class="object-cover rounded-3xl w-full" />
			</div>
		{/each}
	</div>

	<div class="flex flex-row items-center space-x-1">
		<button on:click={prev}>
			<img src="/icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg" alt="Previous" class="h-6" />
		</button>
		<div>{currIndex} / {images.length}</div>
		<button on:click={next}>
			<img src="/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg" alt="Next" class="h-6" />
		</button>
		<p class="opacity-70">{currImg.caption}</p>
	</div>
</div>

<style>
	/* .bullet {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;

		border-radius: 50%;
		width: 8px;
		height: 8px;

		background-color: lightgrey;
		transition: 0.2s all linear;
		margin-right: 5px;

		position: relative;
		top: 4px;
	}
	input:checked {
		background-color: grey;
	} */
</style>

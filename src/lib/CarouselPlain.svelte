<script>
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	import Swiper from 'swiper';
	//import 'swiper/swiper-bundle.css';

	register();

	// Props
	export let images;

	let swiperEl, swiperObj;

	onMount(() => {
		swiperObj = new Swiper(swiperEl, {
			navigation: true,
			pagination: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			on: {
				activeIndexChange: function () {
					currIdx = swiperObj.realIndex;
				}
			}
		});
	});
</script>

<div>
	<swiper-container bind:this={swiperEl}>
		{#each images as img}
			<swiper-slide class="flex w-full h-56 justify-left">
				<img src={img.path} alt="" class="object-cover rounded-3xl w-full" />
			</swiper-slide>
		{/each}
	</swiper-container>

	<!-- Breadcrumbs
	<div class="flex flex-row items-center space-x-1">
		<button on:click={prev}>
			<img src="/icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg" alt="Previous" class="h-6" />
		</button>
		<div>{currIdx + 1} / {images.length}</div>
		<button on:click={next}>
			<img src="/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg" alt="Next" class="h-6" />
		</button>
		<p class="opacity-70">{images[currIdx].caption}</p>
	</div> -->
</div>

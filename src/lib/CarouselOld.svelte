<script>
	import { register } from 'swiper/element/bundle';
	// import Glider from '/@glidejs/glide/dist/glide.min.js';
	import { onMount } from 'svelte';
	import Swiper from 'swiper';

	register();

	const spaceBetween = 10;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};

	// Props
	export let images;

	let currIdx = 0;

	let swiperEl, swiperObj;

	function prev() {
		console.log('prev');
		console.log(swiperObj);
		swiperObj.slidePrev();
	}

	function next() {
		console.log('next');
		console.log(swiperObj);
		swiperObj.slideNext();
	}

	onMount(() => {
		swiperObj = new Swiper(swiperEl, {
			navigation: true,
			pagination: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			},
			slidesPerView: 1,
			// spaceBetween: 10,
			// loop: true,
			on: {
				activeIndexChange: function () {
					// if (isNaN(swiperObj.realIndex)) {
					// 	swiperObj.realIndex = 0;
					// } else {
					// 	currIdx = swiperObj.realIndex;
					// }
					currIdx = swiperObj.activeIndex;
					console.log(swiperObj);
					console.log('active: ' + swiperObj.activeIndex);
				}
			}
		});
	});
</script>

<div class="space-y-4 h-full">
	<!-- <swiper-container bind:this={swiperEl}>
		{#each images as img}
			<swiper-slide class="flex justify-right h-full max-h-[28rem]">
				<img src={img.path} alt={img.caption} class="rounded-3xl object-contain object-left" />
			</swiper-slide>
		{/each}
	</swiper-container> -->
	<swiper-container bind:this={swiperEl}>
		{#each images as img}
			<swiper-slide class="flex justify-right w-full max-h-[28rem]">
				<img src={img.path} alt={img.caption} class="rounded-3xl object-contain object-left" />
			</swiper-slide>
		{/each}
	</swiper-container>

	<!-- Breadcrumbs -->
	<div class="flex flex-row items-center space-x-1">
		<button on:click={prev}>
			<img src="/icons/chevron_left_FILL0_wght400_GRAD0_opsz48.svg" alt="Previous" class="h-6" />
		</button>
		<div>{currIdx + 1} / {images.length}</div>
		<button on:click={next}>
			<img src="/icons/chevron_right_FILL0_wght400_GRAD0_opsz48.svg" alt="Next" class="h-6" />
		</button>
		<p class="opacity-70">{images[currIdx].caption}</p>
	</div>
</div>

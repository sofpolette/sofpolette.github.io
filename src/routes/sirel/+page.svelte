<script>
	import { Carousel, CarouselTransition } from 'flowbite-svelte';
	let showThumbs = false;
	let showCaptions = false;
	let slideControls = false;
	const images = [
		{
			id: 0,
			name: 'Main logo',
			imgurl: 'sirel/logo-sirel.png'
		},
		{
			id: 1,
			name: 'Special logo',
			imgurl: 'sirel/logo2-sirel.png'
		},
		{
			id: 2,
			name: 'T-shirt',
			imgurl: 'sirel/champu-sirel.png'
		},
		{
			id: 3,
			name: 'Assets',
			imgurl: 'sirel/papeleria-sirel.png'
		},
		{
			id: 4,
			name: 'Pins',
			imgurl: 'sirel/pins-sirel.png'
		},
		{
			id: 5,
			name: 'Sign',
			imgurl: 'sirel/rotulo-sirel.png'
		},
		{
			id: 5,
			name: 'Hair comb',
			imgurl: 'sirel/peine.png'
		},
		{
			id: 5,
			name: 'Social media',
			imgurl: 'sirel/facebook-sirel.png'
		}
	];
</script>

<!-- Content -->
<div class="my-8 flex space-x-8 h-full">
	<!-- Text -->
	<div class="col w-1/2">
		<a href="/">
			<img src="/icons/arrow_back_FILL0_wght400_GRAD0_opsz40.svg" alt="Return" class="fill-blue" />
		</a>
		<h1 class="text-3xl my-4">Sirel</h1>
		<p>
			Sirel is a beauty salon for pets and their human friends to enjoy together. It allows a space
			where you and your furry friend can relax, as well as strengthen your relationship and improve
			your overall health. Sirel offers you a highly personalized service that adapts to your
			specific needs using high-quality, all-natural treatments, thus achieving the best possible
			experience for you and your best friend!
		</p>
	</div>
	<div class="col w-1/2">
		<Carousel {images} {showCaptions} {showThumbs} {slideControls} />
	</div>
</div>

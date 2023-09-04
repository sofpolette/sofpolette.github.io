<script>
	import { Carousel, CarouselTransition } from 'flowbite-svelte';
	let showThumbs = false;
	let showCaptions = false;
	let slideControls = false;
	const images = [
		{
			id: 0,
			name: 'Design 1: Federico',
			imgurl: 'sirel/logo-sirel.png'
		},
		{
			id: 1,
			name: 'Federico',
			imgurl: 'sirel/logo2-sirel.png'
		},
		{
			id: 2,
			name: 'Design 2: Kis',
			imgurl: 'sirel/champu-sirel.png'
		},
		{
			id: 3,
			name: 'Kis',
			imgurl: 'sirel/papeleria-sirel.png'
		},
		{
			id: 4,
			name: 'Design 3: Glenn',
			imgurl: 'sirel/pins-sirel.png'
		},
		{
			id: 5,
			name: 'Glenn',
			imgurl: 'sirel/rotulo-sirel.png'
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
		<a href="https://www.crowdants.com/creasd/no-humanos/1114">
			<h1 class="text-3xl my-4">No humanos</h1>
		</a>
		<p>
			El objetivo fue crear varios diseños de camisetas con ilustraciones y venderlas para donar los
			beneficios a "Finca Arkadia", un refugio de animales ubicado en el norte de Tenerife. Cada
			diseño está inspirado en uno de los residentes del refugio. Gracias al apoyo de los
			contribuyentes conseguimos cerrar el proyecto con una recaudación de 1387€, un 231% del mínimo
			esperado para la campaña.
		</p>
	</div>
	<div class="col w-1/2">
		<Carousel {images} {showCaptions} {showThumbs} {slideControls} />
	</div>
</div>

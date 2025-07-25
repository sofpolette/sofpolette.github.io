<script>
	import { onMount } from 'svelte';

	onMount(() => {
		// Load the gtag script dynamically
		const script1 = document.createElement('script');
		script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-MJJ9XZGKQL';
		script1.async = true;
		document.head.appendChild(script1);

		// Initialize gtag after script loads
		script1.onload = () => {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			window.gtag = gtag;
			gtag('js', new Date());
			gtag('config', 'G-MJJ9XZGKQL');
		};
	});
</script>

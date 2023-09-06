<script>
	export let labels;
	console.log(labels);
</script>

<div class="flex flex-row flex-wrap">
	{#each Object.entries(labels) as [label, color]}
		<div
			class="rounded-2xl border-[1.5px] border-blue-50 border-solid border-opacity-70 opacity-70 px-2.5 py-0.25 mr-1 my-0.5"
			style="border-color: {color}; color: {color};"
		>
			{label}
		</div>
	{/each}
</div>

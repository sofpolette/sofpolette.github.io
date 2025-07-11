<script>
	export let labels;
</script>

<div class="h-max flex flex-row flex-wrap">
	{#each Object.entries(labels) as [label, color]}
		<div
			class="rounded-2xl border-[1.5px] border-blue-50 border-solid border-opacity-50 opacity-50 px-3 py-2 mr-1 my-[3px]"
			style="border-color: {color}; color: {color};"
		>
			{label}
		</div>
	{/each}
</div>

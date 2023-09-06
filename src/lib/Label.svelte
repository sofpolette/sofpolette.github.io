<script>
	export let labels;
</script>

<div class="flex flex-row space-x-1.5">
	{#each labels as label}
		<div
			class="rounded-2xl border-[1.5px] border-solid border-[#312783] border-opacity-70 opacity-70 px-2.5 py-0.25"
		>
			{label}
		</div>
	{/each}
</div>

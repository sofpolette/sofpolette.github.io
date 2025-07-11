<script>
	export let data;
</script>

<div class="space-y-10 py-12 max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]">
	<!-- Title, year, context -->
	<div class="flex flex-col gap-2">
		<h1 class="text-h1 text-center">{data.title}</h1>
		<div class="flex gap-8 justify-center text-h4 opacity-50">
			<h5>{data.year}</h5>
			<h5>{data.context}</h5>
		</div>
	</div>

	<!-- Tags -->
	<div class="flex flex-row flex-wrap justify-center gap-1">
		{#each data.areas as area}
			<p
				class="text-tags text-nowrap align-center w-fit rounded-full opacity-50 border-[1.5px] border-[#1040b0] h-min px-[16px] py-[1px]"
			>
				{area}
			</p>
		{/each}
	</div>

	<!-- Description -->
	<div class="flex justify-center">
		<h4 class="text-h4 text-center w-[56rem]">
			{data.description}
		</h4>
	</div>
</div>

<!-- Thumbnail -->
<div
	class="bg-cover max-h-[120vh] overflow-hidden border-b-[1px] border-t-[1px] border-[#1040b0] flex justify-center items-center"
>
	<img src={data.images[0].path} alt={data.images[0].alt} />
</div>

<!-- Brief and solution -->
<div
	class="flex lg:flex-row max-lg:flex-col gap-8 my-12 max-md:px-[4vh] max-xl:px-[8vh] xl:px-[12vh]"
>
	<div class="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
		<p class="text-h5 text-center">Brief</p>
		<div class="bg-[#1040b0] h-[1.5px] opacity-50" />
		<p>{data.brief}</p>
	</div>
	<div class="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
		<h3 class="text-h5 text-center">Solution</h3>
		<div class="bg-[#1040b0] h-[1.5px] opacity-50" />

		<p>{data.solution}</p>
	</div>
</div>

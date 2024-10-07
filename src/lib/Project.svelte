<script>
	export let data;
</script>

<div class="space-y-10 mb-16 max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
	<!-- Title, year, context -->
	<div class=" flex flex-col gap-3">
		<h1>{data.title}</h1>
		<div class="flex gap-8 justify-center uppercase font-light">
			<p class="text-xl">{data.year}</p>
			<p class="text-xl">{data.context}</p>
		</div>
	</div>

	<!-- Tags -->
	<div class="flex flex-row flex-wrap justify-center font-light">
		{#each data.areas as area}
			<p
				class="tag text-nowrap align-center w-fit rounded-2xl border-[1px] border-[#1040b0] h-min px-2 py-0.75 mr-1 my-[3px]"
			>
				{area}
			</p>
		{/each}
	</div>

	<!-- Description -->
	<div class="flex justify-center">
		<p class="text-3xl font-light leading-snug text-center w-[56rem]">
			{data.description}
		</p>
	</div>
</div>

<!-- Thumbnail -->
<div class="bg-cover max-h-[80vh] overflow-hidden border-b-[1px] border-t-[1px] border-[#1040b0]">
	<img src={data.thumbnail.path} alt={data.thumbnail.alt} />
</div>

<!-- Brief and solution -->
<div class="flex flex-row gap-8 my-12 max-lg:px-[8vh] max-2xl:px-[12vh] 2xl:px-[24vh]">
	<div class="flex flex-col gap-4 w-1/2">
		<h3 class="lora font-light">Brief</h3>
		<p>{data.brief}</p>
	</div>
	<div class="flex flex-col gap-4 w-1/2">
		<h3 class="lora font-light">Solution</h3>
		<p>{data.solution}</p>
	</div>
</div>

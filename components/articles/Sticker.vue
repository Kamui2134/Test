<script setup lang="ts">
const catImages = ref<string[]>([])
const catImagesNeed = computed(() => {
	return 3 - catImages.value.length
})

const fetchThreeCats = async () => {
	catImages.value = []

	for (let i = 0; i < 3; i++) {
		try {
			const response: BlobPart = await $fetch('https://cataas.com/cat', {
				responseType: 'blob',
			})

			const blob = new Blob([response], { type: 'image/jpeg' })
			const blobUrl = URL.createObjectURL(blob)
			catImages.value.push(blobUrl)
		} catch (error) {
			console.error(`Ошибка загрузки котика ${i + 1}:`, error)
		}
	}
}
onMounted(() => {
	fetchThreeCats()
})
</script>

<template>
	<article class="sticker">
		<div class="sticker__container">
			<ul class="sticker__accounts">
				<li
					class="sticker__account"
					v-for="catImage in catImages"
					:key="catImage"
				>
					<img
						class="sticker__account-img"
						:src="catImage"
						alt="cat"
						width="61"
						height="61"
					/>
				</li>
				<li
					class="sticker__account sticker__account--skeleton"
					v-for="n in catImagesNeed"
					:key="'skeleton-' + n"
				></li>
			</ul>
			<img
				class="sticker__arrow"
				src="/assets/images/icons/arrow-left.svg"
				alt=""
			/>
		</div>
		<div class="sticker__container sticker__container--clone">
			<h3 class="sticker__title">Консультация эксперта</h3>
			<ul class="sticker__accounts sticker__accounts--clone">
				<li
					class="sticker__account sticker__account--clone"
					v-for="catImage in catImages"
					:key="catImage"
				>
					<img
						class="sticker__account-img"
						:src="catImage"
						alt="cat"
						width="61"
						height="61"
					/>
				</li>
				<li
					class="sticker__account sticker__account--skeleton"
					v-for="n in catImagesNeed"
					:key="'skeleton-' + n"
				></li>
			</ul>
			<button class="sticker__btn">Получить консультацию</button>
		</div>
	</article>
</template>

<style scoped lang="scss">
.sticker {
	position: fixed;
	top: 50%;
	right: 20px;
	transform: translate(0, -50%);

	&__container {
		background-color: $color-gray-1;
		border-radius: 8px;
		padding: 22px 2px 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 266px;
		gap: 32px;

		&--clone {
			position: absolute;
			top: 0;
			right: 0;
			width: 280px;
			max-width: 0px;
			transition: max-width 0.6s ease;
			padding: 24px 0;
			gap: 24px;
			overflow: hidden;
		}
	}
	&__accounts {
		display: flex;
		flex-direction: column;
		position: relative;

		&--clone {
			flex-direction: row;
		}
	}
	&__account {
		position: relative;

		&:not(:last-of-type) {
			margin-bottom: -20px;
		}

		&--clone {
			&:not(:last-of-type) {
				margin-bottom: 0;
				margin-right: -20px;
			}
		}
		&--skeleton {
			width: 64px;
			height: 64px;
			background-color: $color-black-1;
			border-radius: 8px;
			border: 3px solid $color-gray-1;
		}
	}
	&__account-img {
		width: 64px;
		height: 64px;
		object-fit: cover;
		border-radius: 15px;
		border: 3px solid $color-gray-1;
	}
	&__arrow {
		width: 24px;
	}

	&__title {
		@include text('subtitle', $color-black-1);
		text-align: center;
	}
	&__btn {
		@include text('btn', $color-black-1, nowrap);
		padding: 19px 24px;
		background-color: $color-white;
		border-radius: 6px;
	}

	&:hover &__container--clone {
		transition: max-width 0.6s ease;
		max-width: 280px;
	}
}
</style>

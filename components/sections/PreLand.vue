<script setup lang="ts"></script>

<template>
	<section class="landing">
		<div class="landing__container">
			<NuxtLink class="landing__link" to="/sticker">Sticker</NuxtLink>
		</div>
	</section>
</template>

<style scoped lang="scss">
.landing {
	&__container {
		margin-bottom: 0;
		box-shadow: 0 0 0 0 transparent;
	}
	&__link {
		@include text('hero-title', $color-black-1);
	}
}
</style>

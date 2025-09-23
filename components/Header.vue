<script setup lang="ts"></script>

<template>
	<header class="header">
		<div class="header__container">
			<NuxtLink class="header__link" to="/">Back</NuxtLink>
			<h1 class="header__title">Header</h1>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 10px;

	&__container {
		width: min(1200px, 100%);
		background-color: $color-blue-1;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0 0 12px 12px;
		padding: 20px;
		position: relative;
	}
	&__link {
		@include text('link', $color-white);
		position: absolute;
		top: 50%;
		left: 20px;
		transform: translateY(-50%);
	}
	&__title {
		@include text('title', $color-white);
	}
}
</style>

<script setup lang="ts"></script>

<template>
	<header class="header">
		<div class="header__container">Header</div>
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
		@include text('title', $color-white);
		width: 1200px;
		background-color: $color-blue-1;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0 0 12px 12px;
		padding: 20px;
	}
}
</style>

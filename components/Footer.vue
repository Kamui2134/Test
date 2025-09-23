<script setup lang="ts"></script>

<template>
	<footer class="footer">
		<div class="footer__container">Footer</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
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
		border-radius: 12px 12px 0 0;
		padding: 20px;
	}
}
</style>

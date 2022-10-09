<template>
	<div class="flex flex-col gap-10">
		<h1 class="capitalize font-bold text-4xl font-abys">lets talk</h1>
		<p class="font-abys">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, in
		</p>
		<div
			class="flex flex-row justify-between items-center gap-10 w-full bg-indigo-300 p-10 rounded-lg"
		>
			<form
				action="https://formsubmit.co/2cc81d572477d4dcde92597ba572d262 "
				method="POST"
				class="w-1/2 flex flex-col justify-start gap-5"
			>
				<div class="flex flex-col gap-2">
					<label class="capitalize text-white">last name</label>
					<input
						name="last_name"
						placeholder="Last Name"
						type="text"
						class="p-2 rounded-lg outline-sky-500"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="capitalize text-white">first name</label>
					<input
						name="first_name"
						placeholder="First Name"
						type="text"
						class="p-2 rounded-lg outline-sky-500"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="capitalize text-white">Email</label>
					<input
						name="email"
						placeholder="Email"
						type="email"
						class="p-2 rounded-lg outline-sky-500"
					/>
				</div>
				<div class="flex flex-col gap-2">
					<label class="capitalize text-white">Message</label>
					<textarea
						name="message"
						rows="10"
						placeholder="Message"
						type="text"
						class="p-2 rounded-lg outline-sky-500"
					/>
				</div>
				<button
					class="p-3 text-white font-bold rounded-lg bg-blue-400 hover:bg-blue-700"
				>
					Send
				</button>
			</form>

			<img
				src="../assets/contact-img1.jpg"
				class="w-1/2 h-[500px] my-auto rounded-xl"
				alt=""
			/>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>

<template>
	<div>
		<div class="bg-gradient-to-r p-5 min-h-screen from-sky-300 to-sky-500">
			<div
				class="flex flex-row justify-between items-start pt-[60px] h-screen"
			>
				<div>
					<h1
						class="hero-text transform scale-0 opacity-0 italic ml-16 text-white capitalize font-abys text-[50px]"
					>
						<b>pay</b>: administer global <br />
						rewards and benefits
					</h1>
					<h3
						class="hero-subtext transform scale-0 opacity-0 text-white text-xl"
					>
						A single worldwide payroll function directly connected to your
						personnel records.
					</h3>
				</div>
				<img
					src="../assets/catalog.jpg"
					class="hero-img transform opacity-0 scale-0 w-[500px] rounded-full h-[400px]"
					alt=""
				/>
			</div>
		</div>
		<div class="min-h-screen flex flex-col justify-start items-center p-5">
			<div
				class="card transform opacity-0 scale-0 flex flex-col justify-center items-center gap-10 bg-blue-700 w-4/5 my-10 rounded-3xl p-5 h-[300px]"
			>
				<h1 class="text-white text-3xl font-semibold capitalize">
					unlimited employees,multiple pay functions,one platform
				</h1>
				<h4 class="text-white text-lg text-center">
					Wherever you expand across the planet and however many people you
					contract or hire, you can reward all of them from within Atlas.
					Fully automated and globally intelligent, our system processes
					salaries, wages, contractor invoices, benefits, and expenses.
				</h4>
				<button
					class="outline-none border-2 border-white p-2 text-white text-lg hover:bg-blue-900 rounded-2xl"
				>
					Request a demo
				</button>
			</div>
			<div
				v-for="(data, index) in homeData"
				:key="index"
				:class="(index + 1) % 2 ? 'flex-row' : 'flex-row-reverse'"
				class="flex my-16 justify-between items-center gap-16"
			>
				<div class="flex flex-col gap-5 justify-start items-start max-w-lg">
					<h1
						:class="data.titleClass"
						class="transform scale-0 opacity-0 capitalize text-4xl font-semibold"
					>
						{{ data.title }}
					</h1>
					<p
						:class="data.subtitleClass"
						class="transform opacity-0 scale-0"
					>
						{{ data.subtitle }}
					</p>
				</div>
				<img
					:class="data.imgClass"
					class="transform scale-0 opacity-0 shadow-lg w-[400px] h-[300px]"
					:src="data.img"
					alt=""
				/>
			</div>
			<h1 class="capitalize text-5xl font-bold">
				the benefits to your bussiness
			</h1>
			<div
				class="flex flex-row justify-between items-center gap-10 py-20 w-full"
			>
				<div
					v-for="(data, index) in benefitsCard"
					:key="index"
					:class="data.class"
					class="flex flex-col transform opacity-0 scale-0 justify-start items-start gap-3 w-[400px] h-[300px] p-5 shadow-lg bg-blue-50"
				>
					<span
						class="flex flex-row justify-center items-center bg-blue-700 p-3 rounded-full w-[60px] h-[60px]"
					>
						<fa :icon="data.icon" class="text-white text-xl" />
					</span>
					<h1 class="font-abys font-bold capitalize">{{ data.title }}</h1>
					<p class="font-abys">{{ data.subtitle }}</p>
				</div>
			</div>
			<div class="w-full">
				<GetInTouch />
			</div>
		</div>
		<footer
			class="flex flex-col justify-center items-center bg-blue-500 mt-20 w-full h-[300px]"
		>
			<div
				class="flex flex-row justify-between gap-5 w-full items-center px-5"
			>
				<div>
					<h1 class="text-white text-7xl font-abys capitalize">
						lorem ipsum
					</h1>
					<span
						class="flex flex-row justify-center items-center gap-5 mt-5"
					>
						<fa
							class="text-2xl hover:text-blue-700 cursor-pointer"
							:icon="['fab', 'facebook']"
						/>
						<fa
							class="text-2xl hover:text-blue-700 cursor-pointer"
							:icon="['fab', 'twitter']"
						/>
						<fa
							class="text-2xl hover:text-blue-700 cursor-pointer"
							:icon="['fab', 'youtube']"
						/>
					</span>
				</div>
				<div class="w-1/2">
					<ul
						class="flex flex-row gap-5 text-lg justify-start text-white capitalize"
					>
						<li class="cursor-pointer hover:text-blue-700">home</li>
						<li class="cursor-pointer hover:text-blue-700">about</li>
						<li class="cursor-pointer hover:text-blue-700">teams</li>
						<li class="cursor-pointer hover:text-blue-700">
							request demo
						</li>
						<li class="cursor-pointer hover:text-blue-700">
							get in touch
						</li>
					</ul>
				</div>
			</div>
			<h1 class="text-sm text-white">All rights reserved</h1>
		</footer>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import dashboard from "../assets/dashboard-img.jpg";
import payrollWorldwide from "../assets/payroll-worldwide.jpg";
import fullyPersonalize from "../assets/fully-personalize-img.jpg";
import GetInTouch from "./GetInTouch.vue";

interface HomeData {
	title: string;
	subtitle: string;
	img: typeof dashboard | typeof payrollWorldwide | typeof fullyPersonalize;
	titleClass: string;
	subtitleClass: string;
	imgClass: string;
}

interface BenefitsCard {
	icon: string;
	title: string;
	subtitle: string;
	class: string;
}

const benefitsCard: BenefitsCard[] = [
	{
		class: "card1",
		icon: "fa-arrows-down-to-people",
		title: "conectivity",
		subtitle:
			"Because it’s hosted in-platform, our Pay function is joined-up to every other piece of data you hold on your people across the globe. This enables you to deliver consistently in line with contractual agreements and local employment legislation.",
	},
	{
		class: "card2",
		icon: "fa-gears",
		title: "Automation",
		subtitle:
			"We remove manual processes from the payroll function. You can easily move money between your business and ours. And track payments between Atlas and your people.",
	},
	{
		class: "card2",
		icon: "fa-chalkboard-user",
		title: "transparency",
		subtitle:
			"Our payment network is sophisticated and transparent. You can see country-to-country gross-to-net pay, and understand currency conversions, at a glance.",
	},
];

const homeData: HomeData[] = [
	{
		title: "payroll plus",
		subtitle:
			"Our pay function is about more than just payroll. It also guides you on allowable expenses from country to country, and enables you to customize and administer benefits by location.",
		img: dashboard,
		titleClass: "payroll-title",
		subtitleClass: "payroll-subtitle",
		imgClass: "payroll-img",
	},
	{
		title: "local insight",
		subtitle:
			"Lorem ipsum offers on-the-ground knowledge of payroll and benefits compliance—and common practices—in over 160 countries.Whether it’s rental allowances in Mexico or meal allowances in Spain.",
		img: payrollWorldwide,
		titleClass: "insight-title",
		subtitleClass: "insight-subtitle",
		imgClass: "insight-img",
	},
	{
		title: "fully personalized",
		subtitle:
			"Payroll is a core part of the platform, so it’s directly connected to all other information within the system. You get information that tells you what you need to act on in order to reward your people and stay compliant locally.",
		img: fullyPersonalize,
		titleClass: "personalize-title",
		subtitleClass: "personalize-subtitle",
		imgClass: "personalize-img",
	},
];

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
	const tl = gsap.timeline({ defaults: { duration: 2 } });
	const benefitsCardTl = gsap.timeline({
		defaults: { duration: 1 },
		scrollTrigger: {
			trigger: ".card1",
			toggleActions: "restart none none none",

			// scrub: true,
		},
	});

	tl.to(".hero-text", { opacity: 1, scale: 1 })
		.to(".hero-subtext", {
			opacity: 1,
			scale: 1,
		})
		.to(".hero-img", { opacity: 1, scale: 1 });

	benefitsCardTl
		.to(".card1", {
			opacity: 1,
			scale: 1,
		})
		.to(".card2", {
			opacity: 1,
			scale: 1,
		})
		.to(".card3", {
			opacity: 1,
			scale: 1,
		});

	gsap.to(".card", {
		scrollTrigger: {
			trigger: ".card",
			toggleActions: "restart none none none",
			// markers: true,
			scrub: true,
		},
		duration: 1,
		opacity: 1,
		scale: 1,
	});

	homeData.map((data, index) => {
		gsap.to(`.${data.titleClass}`, {
			scrollTrigger: {
				trigger: `.${data.titleClass}`,
				toggleActions: "restart none none none",
			},
			duration: 1,
			opacity: 1,
			scale: 1,
		});
		gsap.to(`.${data.subtitleClass}`, {
			scrollTrigger: {
				trigger: `.${data.subtitleClass}`,
				toggleActions: "restart none none none",
			},
			duration: 1,
			opacity: 1,
			scale: 1,
		});
		gsap.to(`.${data.imgClass}`, {
			scrollTrigger: {
				trigger: `.${data.imgClass}`,
				toggleActions: "restart none none none",
				scrub: index == 2 ? false : true,
			},
			duration: 1,
			opacity: 1,
			scale: 1,
		});
	});

	
});
</script>

<style scoped></style>

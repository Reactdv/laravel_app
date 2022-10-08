import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/home",
			name: "home",
			component: Home,
		},

		{
			path: "/dashboard",
			name: "dashboard",
			component: Dashboard,
		},
	],
});

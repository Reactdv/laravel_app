import sanityClient, { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { env } from "process";
let process: NodeJS.Process;

export const sanity = sanityClient({
	projectId: "jxhz6pm0",
	dataset: "production",
	apiVersion: "2021-10-21",
	useCdn: true,
	token: import.meta.env.VITE_API_SANITY_TOKEN,
});

const builder = imageUrlBuilder(sanity);

export const urlFor = (source: any): any => builder.image(source);

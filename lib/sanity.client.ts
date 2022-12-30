import { createClient } from "next-sanity";

export const projectId = "vssbw191";
export const dataset = "production" 
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION; 

export const client = createClient({
	projectId,
	dataset,
	useCdn: false,
});

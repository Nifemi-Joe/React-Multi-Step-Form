/* eslint-disable no-unused-vars */
import supabase from "./supabase";

export async function sendBusinessInquiry(details) {
	const { data, error } = await supabase
		.from("business")
		.insert([
			{
				name: details.name,
				email: details.email,
				company: details.company,
				phone: details.phone,
				// message: details.message,
				// terms: details.terms
			},
		])
		.select();

	if (error) {
		console.error(error);
		throw new Error("Message was not sent");
	}
	console.log(data);
	return data;
}

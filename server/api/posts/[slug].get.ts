import { posts } from "../../mock/posts";

export default defineEventHandler(async (event) => {
	const { slug } = event.context.params!;
	const post = posts.find((p) => p.slug === slug);
	if (!post) {
		setResponseStatus(event, 404);
		return { message: "Not found" };
	}
	await new Promise((r) => setTimeout(r, 200));
	return post;
});

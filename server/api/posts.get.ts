import { posts } from "../mock/posts";

export default defineEventHandler(async (event) => {
	const q = getQuery(event);
	const page = Number(q.page || 1);
	const pageSize = Number(q.pageSize || 5);
	await new Promise((r) => setTimeout(r, 300));
	return {
		items: posts.slice((page - 1) * pageSize, page * pageSize),
		total: posts.length,
		page,
		pageSize,
	};
});

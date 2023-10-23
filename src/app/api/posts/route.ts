import {prisma} from '@/server/prisma';

export async function GET() {
	const posts = await prisma.post.findMany();
	return new Response(JSON.stringify(posts));
}
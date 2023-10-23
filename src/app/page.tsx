import { prisma } from '@/server/prisma'

export default async function Home() {
	const users = await prisma.user.findMany()
	const posts = await prisma.post.findMany()

	return (
		<main className="flex min-h-screen flex-col items-center">
			<h1 className="text-5xl font-bold pt-3">Below content data got from the database via prisma. So cool..</h1>

			<div className="m-3">
				<h3 className="text-2xl">Users</h3>
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>

			<div className="m-3">
				{posts.map((post) => (
					<article key={post.id} className="py-3">
						<h3 className="text-3xl">{post.title}</h3>
						<p>{post.content}</p>
					</article>
				))}
			</div>
		</main>
	)
}

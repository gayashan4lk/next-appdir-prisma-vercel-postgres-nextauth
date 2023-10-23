import {prisma} from '@/server/prisma';

export default async function Home() {

  const users = await prisma.user.findMany();
  const posts = await prisma.post.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className='mx-32 p-3 text-left'>
        <article>
          <h3 className='text-2xl'>Where does it come from?</h3>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, comes from a line in section 1.10.32.
          </p>
          <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. add this to check why postgres data update not showing.
          </p>
        </article>
      </div>


      <h1 className='text-3xl font-bold pt-3'>Below content data got from the database via prisma. So cool..</h1>
      <div className='m-3'>
        <h3 className='text-2xl'>Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div className='m-3'>
        <h3 className='text-2xl'>Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

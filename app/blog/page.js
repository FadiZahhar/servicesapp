import FrontEndLayout from "../../components/layouts/FrontEndLayout"
import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
export default function PostsPage() {
    
    const posts = getAllPosts();
    return(<FrontEndLayout>
        <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <main>
      <section id="blogs" className="blogs">
      <div className="container" data-aos="fade-up">
        <AllPosts posts={posts} />
      </div>
      </section>
      </main>
    </FrontEndLayout>)
}

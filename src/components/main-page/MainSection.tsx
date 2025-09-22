import { onGetBlogPosts } from "@/actions/landing";
import { getMonthName } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "../ui/card";

type Props = {
  id: string;
  title: string;
  image: string;
  content: string;
  createdAt: Date;
}[];

const MainSection = async () => {
  const posts: any = await onGetBlogPosts();
  console.log("Final Posts: ", posts);

  // Add error handling and array check
  if (!posts || !Array.isArray(posts)) {
    return (
      <section className="container mt-10 text-center">
        <p>No blog posts available at the moment.</p>
      </section>
    );
  }

  return (
    <section className="lg:grid-cols-3 grid-cols-1 grid gap-5 container mt-10">
      {posts.map((post: any) => (
        <Link href={`/blogs/${post.id}`} key={post.id}>
          <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
            <div className="relative w-full aspect-video">
              <Image
                src={`${process.env.CLOUDWAYS_WORDPRESS_BLOG_UPLOADS_URL}${post.image}`}
                alt="post featured image"
                fill
              />
            </div>
            <div className="py-5 px-10 flex flex-col gap-5">
              <CardDescription>
                {getMonthName(post.createdAt.getMonth())}{" "}
                {post.createdAt.getDate()} {post.createdAt.getFullYear()}
              </CardDescription>
              <CardTitle>{post.title}</CardTitle>
              {parse(post.content.slice(4, 100))}
            </div>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default MainSection;

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
      <section className="container mt-10 text-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 p-8 rounded-2xl">
        <p className="text-gray-700 dark:text-gray-300">
          No blog posts available at the moment.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-slate-800 dark:to-purple-900 py-16 px-4">
      <div className="lg:grid-cols-3 grid-cols-1 grid gap-8 container max-w-7xl mx-auto">
        {posts.map((post: any) => (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <Card className="flex flex-col gap-2 rounded-2xl overflow-hidden h-full hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
              <div className="relative w-full aspect-video">
                <Image
                  src={`${process.env.CLOUDWAYS_WORDPRESS_BLOG_UPLOADS_URL}${post.image}`}
                  alt="post featured image"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="py-6 px-6 flex flex-col gap-4">
                <CardDescription className="text-sm text-purple-600 dark:text-purple-400 font-medium">
                  {getMonthName(post.createdAt.getMonth())}{" "}
                  {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                </CardDescription>
                <CardTitle className="text-gray-800 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {post.title}
                </CardTitle>
                <div className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {parse(post.content.slice(4, 100))}
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainSection;

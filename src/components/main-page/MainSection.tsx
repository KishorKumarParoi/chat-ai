import { onGetBlogPosts } from "@/actions/landing";

type Props = {
  id: string;
  title: string;
  image: string;
  content: string;
  createdAt: Date;
}[];

const MainSection = async () => {
  const posts: any = await onGetBlogPosts();

  return (
    <section className="lg:grid-cols-3 grid-cols-1 grid gap-5 container">
      {/*
      {posts &&
        posts.map((post: any) => (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <Card className="flex flex-col gap-2 rounded-xl overflow-hidden h-full hover:bg-gray-100">
              <div className="realtive w-full aspect-video">
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
          */}
    </section>
  );
};

export default MainSection;

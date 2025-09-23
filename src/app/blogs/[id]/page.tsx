import { onGetBlogPost } from "@/actions/landing";
import { CardDescription } from "@/components/ui/card";
import { getMonthName } from "@/lib/utils";
import parse from "html-react-parser";

type Props = {
  params: { id: string };
};

const Postpage = async ({ params }: Props) => {
  const post = await onGetBlogPost(params.id);

  return (
    <div className="container flex justify-center my-10">
      <div className="lg:w-1/2 flex flex-col">
        <CardDescription>
          {post?.createdAt ? (
            <>
              {getMonthName(post.createdAt)} {post.createdAt.getDate()}{" "}
              {post.createdAt.getFullYear()}
            </>
          ) : null}
        </CardDescription>
        <h2 className="text-6xl font-bold">{post?.title}</h2>
        <div>{parse(post?.content)}</div>
      </div>
    </div>
  );
};

export default Postpage;

"use server";
import axios from "axios";

export const onGetBlogPosts = async () => {
  try {
    const postArray: {
      id: string;
      title: string;
      image: string;
      content: string;
      createdAt: Date;
    }[] = [];

    const postsUrl = process.env.CLOUDWAYS_WORDPRESS_BLOG_URL;
    if (!postsUrl) return;

    const posts = await axios.get(postsUrl);
    console.log("posts: ", posts.data);

    let i = 0;
    while (i < posts.data.length) {
      const image = await axios.get(
        `${process.env.CLOUDWAYS_WORDPRESS_BLOG_IMAGE_URL}`
      );
      console.log("image:", image.data);

      if (image) {
        const post: {
          id: string;
          title: string;
          image: string;
          content: string;
          createdAt: Date;
        } = {
          id: posts.data[i].id,
          title: posts.data[i].title.rendered,
          image: image.data.media_details.file,
          content: posts.data[i].content.rendered,
          createdAt: new Date(posts.data[i].date),
        };
        postArray.push(post);
      }
      i++;
    }
    if (posts.data) return postArray;
  } catch (error) {
    return {
      status: 500,
      message: `Internal Error on fetching blog post: ${error}`,
    };
  }
};

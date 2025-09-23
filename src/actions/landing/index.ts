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
      let image;
      if (posts.data[i].featured_media !== 0) {
        image = await axios.get(
          `${process.env.CLOUDWAYS_WORDPRESS_BLOG_IMAGE_URL}/${posts.data[i].featured_media}`
        );
      }

      console.log("image", image?.data);

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

export const onGetBlogPost = async (id: string) => {
  try {
    const postsUrl = process.env.CLOUDWAYS_WORDPRESS_BLOG_URL;
    if (!postsUrl) return;

    const post = await axios.get(`${postsUrl}${id}`);
    if (post.data) {
      const author = await axios.get(
        `${process.env.CLOUDWAYS_WORDPRESS_BLOG_AUTHOR_URL}`
      );
      if (author.data) {
        return {
          id: post.data.id,
          title: post.data.title.rendered,
          content: post.data.content.rendered,
          createdAt: new Date(post.data.date),
          author: author.data.name,
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
};

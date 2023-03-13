import Link from "next/link";
import getBlogMetadataFromCategory from "@/components/getBlogMetadataFromCategory";
import getAllCategories from "@/components/getAllCategories";
import getAllBlogs from "@/components/getAllBlogs";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

export const generateStaticParams = async () => {
  const blogList = getAllBlogs();

  return blogList.map((blog) => ({
    category: blog.category,
    blog: blog.filename,
  }));
};

const getPostContent = (category, filename) => {
  const folder = "public/data/blog/";
  let file = `${folder}${category}/${filename}.md`;
  if (!fs.existsSync(file)) {
    file = `${folder}${category}/${filename}.mdx`;
  }
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default function BlogPage({ params }) {
  const filename = params.blog;
  const category = params.category;
  const post = getPostContent(category, filename);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

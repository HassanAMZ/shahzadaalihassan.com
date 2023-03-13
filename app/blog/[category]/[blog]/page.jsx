import Link from "next/link";
import getBlogMetadataFromCategory from "@/components/getBlogMetadataFromCategory";
import getAllCategories from "@/components/getAllCategories";
import getAllBlogs from "@/components/getAllBlogs";
import fs from "fs"
import Markdown from "markdown-to-jsx";
import matter from 'gray-matter'

export const generateStaticParams = async () => {
  const blogList = getAllBlogs();

  return blogList.map((blog) => ({
    blog: blog.slug,
  }));
};

const getPostContent = (category, slug) => {
  const folder = "public/data/blog/";
  let file = `${folder}${category}/${slug}.md`;
  if (!fs.existsSync(file)) {
    file = `${folder}${category}/${slug}.mdx`;
  }
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export default function BlogPage({ params }) {

  const slug = params.blog;
  const category = params.category;
  const post = getPostContent(category, slug);
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
};

import { Inter } from "next/font/google";
import getBlogMetadata from "@/components/getBlogMetadata";
import BlogPreview from "@/components/BlogPreview";
import getBlogCategories from "@/components/getBlogCategories"

const inter = Inter({ subsets: ["latin"] });

export const generateStaticParams = async () => {
  const blogCategoriesList = getBlogCategories()
  return blogCategoriesList.map((blogCategory) => ({
    category: blogCategory,
  }));
};

export default function Category({ params }) {
  const categoryBlogs = getBlogMetadata(params.category)
  const blogPreviews = categoryBlogs.map((blog) => (
    <BlogPreview key={blog.slug} category={params.category}{...blog} />
  ));
  return (
    <main>
      <h1>
        All blogs in {params.category} Category
      </h1>
      <div className="flex flex-col">{blogPreviews}</div>
    </main>
  );
}

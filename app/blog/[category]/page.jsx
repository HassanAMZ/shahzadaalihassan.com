import Link from "next/link";
import getBlogMetadataFromCategory from "@/components/getBlogMetadataFromCategory";
import getAllCategories from "@/components/getAllCategories";

export const generateStaticParams = async () => {
  const blogCategoriesList = getAllCategories();

  return blogCategoriesList.map((blogCategory) => ({
    category: blogCategory,
  }));
};

export default function CategoryPage({ params }) {
  const blogsFromCategory = getBlogMetadataFromCategory(params.category);
  return (
    <div className="flex flex-col">
      {blogsFromCategory.map(({ slug, title, category }, index) => (
        <Link key={index} className="" href={`/blog/${category}/${slug}`}>
          {title}
        </Link>
      ))}
    </div>
  );
}

import getBlogCategoriesLinks from "@/components/getBlogCategoriesLinks";

export default function CategoryPage() {
  const blogCategoryData = getBlogCategoriesLinks();

  return <div className="flex flex-col space-y-3">{blogCategoryData}</div>;
}

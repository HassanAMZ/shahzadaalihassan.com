export const metadata = {
  title: "Blog Page",
  description: "Blog Page",
};

import getBlogCategoriesLinks from "@/components/getBlogCategoriesLinks";

export default function BlogLayout({ children }) {
  const blogCategoryData = getBlogCategoriesLinks();
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col max-w-fit">
        All Categories
        {blogCategoryData}
      </div>

      <div>{children}</div>
    </div>
  );
}

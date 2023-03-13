import fs from "fs";
import getBlogMetadataFromCategory from "@/components/getBlogMetadataFromCategory";
const getAllBlogs = () => {
  const folder = `public/data/blog/`;
  const categories = fs.readdirSync(folder);

  const allBlogMetaData = categories.flatMap((category) => {
    const blogsFromCategory = getBlogMetadataFromCategory(category);
    return blogsFromCategory.map(({ category, slug, title, date }) => ({
      slug: `${category}/${slug}`,
      title: `${title}`,
      date: `${date}`,
    }));
  });

  const sortedData = allBlogMetaData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return sortedData;
};
export default getAllBlogs;

import fs from "fs";
import matter from "gray-matter";

const getBlogMetadataFromCategory = (category) => {
  const folder = `public/data/blog/${category}/`;
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter(
    (file) => file.endsWith(".md") || file.endsWith("mdx")
  );

  // Get gray-matter data from each file.
  const blogs = markdownBlogs.map((fileName) => {
    const fileContents = fs.readFileSync(
      `public/data/blog/${category}/${fileName}`,
      "utf8"
    );

    const matterResult = matter(fileContents);
    return {
      category: category,
      title: matterResult.data.title,
      date: matterResult.data.date,
      blogID: matterResult.data.blogID,
      tags: matterResult.data.tags,
      summary: matterResult.data.summary,
      coverImage: matterResult.data.coverImage,
      slug: fileName.replace(/\.(mdx|md)/, ""),
    };
  });

  const sortedData = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
  return sortedData;
};
export default getBlogMetadataFromCategory;

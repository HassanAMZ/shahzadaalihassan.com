import fs from "fs";
import matter from "gray-matter";

const getBlogMetadata = (category) => {
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
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(/\.(mdx|md)/, ""),
    };
  });

  return blogs;
};
export default getBlogMetadata;

import fs from "fs";

const getBlogCategoriesLinks = () => {
  const folder = `public/data/blog/`;
  const files = fs.readdirSync(folder);

  return files;
};
export default getBlogCategoriesLinks;

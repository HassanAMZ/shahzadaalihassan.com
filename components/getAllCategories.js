import fs from "fs";

const getAllCategories = () => {
  const folder = `public/data/blog/`;
  const files = fs.readdirSync(folder);

  return files;
};
export default getAllCategories;

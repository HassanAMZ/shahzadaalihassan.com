import fs from "fs";
import Link from "next/link";

const getBlogCategoriesLinks = () => {
  const folder = `public/data/blog/`;
  const files = fs.readdirSync(folder);
  const fileName = [];
  files.forEach((file, index) => {
    fileName.push(
      <Link href={`/blog/${file}`} key={index}>
        {file.charAt(0).toUpperCase() + file.slice(1).replace(/-/g, " ")}
      </Link>
    );
  });

  return fileName;
};
export default getBlogCategoriesLinks;

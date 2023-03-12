import { Inter } from "next/font/google";
import fs from "fs";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function Category({ params }) {
  const directoryPath = `public/data/blog/${params.category}/`
  const files = fs.readdirSync(directoryPath);
  const fileNames = [];
  files.forEach((file, index) => {
    fileNames.push(
      <Link href={`/blog/${params.category}/${file}`} key={index}>
        {file.charAt(0).toUpperCase() + file.slice(1).replace(/-/g, " ").substring(0, file.indexOf(".") - 1)}
      </Link>
    );
  });
  return (
    <main>
      Blog Pages
      <ul className="flex flex-col">{fileNames}</ul>
    </main>
  );
}

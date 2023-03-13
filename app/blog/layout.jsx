import Link from 'next/link'
import getAllCategories from "@/components/getAllCategories";

export const metadata = {
  title: "Blog Page",
  description: "Blog Page",
};

export default function BlogLayout({ children }) {
  const allCategories = getAllCategories();
  const fileName = []
  allCategories.forEach((file, index) => {
    fileName.push(
      <Link href={`/blog/${file}`} key={index}>
        {file.charAt(0).toUpperCase() + file.slice(1).replace(/-/g, " ")}
      </Link>
    );
  });
  return (
    <div className="grid grid-cols-3 p-4">
      <div className="flex col-span-1 flex-col bg-gray-50 text-gray-900 p-4">
        All Categories
        {fileName}
      </div>

      <div className="p-4 col-span-2">{children}</div>
    </div>
  );
}

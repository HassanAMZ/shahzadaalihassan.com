import Link from "next/link";
import getAllCategories from "@/components/getAllCategories";

export const metadata = {
  title: "Blog Page",
  description: "Blog Page",
};

export default function BlogLayout({ children }) {
  const allCategories = getAllCategories();
  const fileName = [];
  allCategories.forEach((file, index) => {
    fileName.push(
      <Link key={index}
        href={`/blog/${file}`}
        className="flex w-full justify-between cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-zinc-800 py-2 hover:text-white font-bold"
      >
        {file.charAt(0).toUpperCase() + file.slice(1).replace(/-/g, " ")}
      </Link>
    );
  });
  return (
    <div className="flex max-h-screen">
      <div className="flex flex-col min-w-fit p-2 bg-gray-50 text-gray-900">
        {fileName}
      </div>

      <div className="">{children}</div>
    </div>
  );
}

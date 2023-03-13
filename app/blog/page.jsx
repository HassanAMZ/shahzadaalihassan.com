import Link from "next/link";
import getAllBlogs from "@/components/getAllBlogs";

export default function BlogPage() {
  const allBlogsMetaData = getAllBlogs();

  const allBlogLinks = allBlogsMetaData.map(
    ({ slug, title, date }, index) => (
      <Link href={`/blog/${slug}`} key={index}>

        {title.charAt(0).toUpperCase() + title.slice(1).replace(/-/g, " ")}
      </Link>
    )
  );

  return <div className="grid grid-cols-2">{allBlogLinks}</div>;
}

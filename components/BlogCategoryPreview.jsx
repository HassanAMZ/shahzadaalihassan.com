import Link from "next/link";

const BlogCategoryPreview = (props) => {
  return (
    <div className="border border-slate-300 p-2 rounded-md shadow-sm    bg-white">
      <p className="text-sm text-slate-400"></p>
      <Link href={`/blog/${props.slug}`}>
        <h2 className=" text-violet-600 hover:underline">{props}</h2>
      </Link>
    </div>
  );
};

export default BlogCategoryPreview;

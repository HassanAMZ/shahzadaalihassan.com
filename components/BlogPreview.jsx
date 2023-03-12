import Link from "next/link";

const BlogPreview = (props) => {
    return (
        <div className="border border-slate-300 p-4 rounded-md shadow-sm    bg-white">
            <p className="text-sm text-slate-400">{props.date}</p>

            <Link href={`/blog/${props.category}/${props.slug}`}>
                <h2 className=" text-violet-600 hover:underline mb-4">{props.title}</h2>
            </Link>
        </div>
    );
};

export default BlogPreview;

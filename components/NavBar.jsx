"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { CallToAction } from "@/components/Hero";

export function NavLinks({ href, children }) {
    const segment = useSelectedLayoutSegment();
    let active = (segment === null && href === "/") || href === `/${segment}`;
    return (
        <Link
            className={`${active ? "underline underline-offset-4" : " "}`}
            href={href}
        >
            {children}
        </Link>
    );
}

export default function NavBar() {
    return (
        <nav className="sticky top-0 flex flex-row justify-between items-center p-4 bg-gray-900 z-[90]">
            <h2 className="underline text-base">Shahzadaalihassan</h2>
            {/* <NavLinks href="/blog">Blog Page</NavLinks> */}
            <CallToAction callToActionText={"Migrate Now"} />
        </nav>
    );
}

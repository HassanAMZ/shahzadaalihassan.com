"use client ";

import React from "react";
import CallToAction from "@/components/CallToAction";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-4">
            <div className="flex justify-center items-center gap-3">
                <CallToAction callToActionText={"Get in touch"} />{" "}
            </div>
            <div className="text-center text-sm py-4">
                &copy; ShahzadaAliHassan. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

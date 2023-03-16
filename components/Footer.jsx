"use client ";

import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center space-x-4 text-lg">
                    <a href="#" className="hover:text-gray-400">
                        About Us
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Contact Us
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-gray-400">
                        Terms of Use
                    </a>
                </div>
                <div className="text-center text-sm mt-8">
                    &copy; 2023 Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

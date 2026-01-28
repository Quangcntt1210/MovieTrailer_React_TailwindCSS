import { useEffect } from "react";

const Footer = () => {
    const pageUrl = window.location.origin + window.location.pathname;

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }, [pageUrl]);

    return (
        <footer className="bg-black text-white mt-12 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* COMMENTS HEADER: Bình luận + Like */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        💬 Bình luận
                    </h3>

                    {/* FACEBOOK LIKE */}
                    <div
                        className="bg-black rounded-lg px-2 py-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="fb-like"
                            data-href={pageUrl}
                            data-layout="button_count"
                            data-action="like"
                            data-size="small"
                            data-share="false"
                        ></div>
                    </div>
                </div>

                {/* FACEBOOK COMMENTS */}
                <div className="bg-white rounded-xl p-4 shadow-md">
                    <div
                        className="fb-comments"
                        data-href={pageUrl}
                        data-width="100%"
                        data-numposts="5"
                    ></div>
                </div>

                {/* FOOTER INFO */}
                <div className="flex flex-col items-center gap-3 mt-10 text-sm text-gray-400">

                    {/* Privacy Policy */}
                    <a
                        href="/privacy-policy.html"
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-1 rounded-full border border-gray-600
                        hover:border-orange-500 hover:text-orange-400
                        transition-all duration-300"
                    >
                        🔒 Chính sách quyền riêng tư
                    </a>

                    {/* Divider */}
                    <div className="w-24 h-px bg-gray-700 opacity-40"></div>

                    {/* Copyright */}
                    <p className="text-center">
                        © 2026 <span className="text-white font-medium">Movie Trailer</span>. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

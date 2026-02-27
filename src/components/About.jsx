export default function About() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-red-600 mb-4">About</h1>
                <p className="text-gray-300 leading-7 mb-6">
                    Movie Theater là website xem trailer phim, giúp tra cứu phim hot, phim đề cử,
                    và xem trailer nhanh qua YouTube embed. Dữ liệu phim được lấy từ TMDB API.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="border border-gray-800 rounded-xl p-5 bg-white/5">
                        <h3 className="font-semibold mb-2">🎬 Chức năng</h3>
                        <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• Danh sách phim theo nhóm</li>
                            <li>• Tìm kiếm phim</li>
                            <li>• Xem trailer trong modal</li>
                            <li>• Bình luận Facebook</li>
                        </ul>
                    </div>

                    <div className="border border-gray-800 rounded-xl p-5 bg-white/5">
                        <h3 className="font-semibold mb-2">🧰 Công nghệ</h3>
                        <ul className="text-gray-300 space-y-1 text-sm">
                            <li>• React + Vite</li>
                            <li>• Tailwind CSS</li>
                            <li>• TMDB API</li>
                            <li>• React Multi Carousel</li>
                        </ul>
                    </div>

                    <div className="border border-gray-800 rounded-xl p-5 bg-white/5">
                        <h3 className="font-semibold mb-2">📌 Mục tiêu</h3>
                        <p className="text-gray-300 text-sm leading-6">
                            Xây dựng một giao diện hiện đại, tối ưu trải nghiệm người dùng,
                            có thể mở rộng thành website giới thiệu phim hoàn chỉnh.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

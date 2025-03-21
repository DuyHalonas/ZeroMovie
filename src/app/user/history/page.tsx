"use client"; // 🔥 Thêm dòng này vào đầu file

import React, { useState } from "react";
// Dữ liệu mô phỏng
const UserProfile = () => {
  const user = {
    username: "nguyenvana",
    email: "nguyenvana@example.com",
    bookingHistory: [
      { movie: "The Good Dinosaur", date: "2024-03-15", seats: "A10, A11" },
      { movie: "Coco", date: "2024-03-10", seats: "B5, B6" },
      { movie: "WALL-E", date: "2024-03-05", seats: "C1, C2" },
      { movie: "Inception", date: "2024-02-28", seats: "D3, D4" },
      { movie: "Interstellar", date: "2024-02-25", seats: "E7, E8" },
      { movie: "The Lion King", date: "2024-02-20", seats: "F9, F10" },
      { movie: "Frozen", date: "2024-02-18", seats: "G1, G2" },
      { movie: "Avatar", date: "2024-02-15", seats: "H3, H4" },
      { movie: "Titanic", date: "2024-02-10", seats: "I5, I6" },
    ],
  };

  // Phân trang
  const itemsPerPage = 3;
  const totalPages = Math.ceil(user.bookingHistory.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Lấy dữ liệu của trang hiện tại
  const currentBookings = user.bookingHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mt-20">
        <h1 className="text-3xl font-bold text-blue-400">
          Thông tin người dùng
        </h1>
        <div className="mt-4">
          <p className="text-lg">
            <span className="font-semibold text-gray-300">Username:</span>{" "}
            {user.username}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-300">Email:</span>{" "}
            {user.email}
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-blue-400">Lịch sử đặt vé</h2>

          {/* Hiển thị 3 lịch sử mới nhất theo trang */}
          <div className="mt-4 space-y-4">
            {currentBookings.map((booking, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <p className="text-lg font-semibold">{booking.movie}</p>
                <p>Ngày đặt: {booking.date}</p>
                <p>Ghế: {booking.seats}</p>
              </div>
            ))}
          </div>

          {/* Nút số thứ tự để chuyển trang */}
          <div className="mt-6 flex justify-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg text-white ${
                  page === currentPage
                    ? "bg-blue-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

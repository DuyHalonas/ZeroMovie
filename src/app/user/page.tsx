"use client";
import { useState } from "react";
import Link from "next/link";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white pt-14 pb-14">
      <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg w-[450px] backdrop-blur-md pt-14">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Quản lý tài khoản
        </h1>

        {/* Tabs */}
        <div className="flex justify-between mb-6 border-b border-gray-600">
          <button
            className={`p-2 flex-1 ${
              activeTab === "profile" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Thông tin
          </button>
          <button
            className={`p-2 flex-1 ${
              activeTab === "history" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("history")}
          >
            Lịch sử vé
          </button>
          <button
            className={`p-2 flex-1 ${
              activeTab === "password" ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab("password")}
          >
            Đổi mật khẩu
          </button>
        </div>

        {/* Nội dung từng tab */}
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "history" && <HistoryTab />}
        {activeTab === "password" && <ChangePasswordTab />}
      </div>
    </div>
  );
};

export default UserProfile;

const ProfileTab = () => {
  const [user, setUser] = useState({
    fullName: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    birthDate: "2000-01-01",
    avatar: "/default-avatar.png",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newAvatar = URL.createObjectURL(e.target.files[0]);
      setUser((prev) => ({ ...prev, avatar: newAvatar }));
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-gray-600 object-cover"
        />
        <label className="mt-2 bg-gray-700 hover:bg-gray-600 transition p-2 rounded-md cursor-pointer">
          Cập nhật ảnh
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <label>Họ tên</label>
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
          disabled={!editing}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          disabled={!editing}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
        />
        <label>Số điện thoại</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          disabled={!editing}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
        />
        <label>Ngày sinh</label>
        <input
          type="date"
          name="birthDate"
          value={user.birthDate}
          onChange={handleChange}
          disabled={!editing}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-md w-full text-lg"
          onClick={() => setEditing(!editing)}
        >
          {editing ? "Lưu" : "Chỉnh sửa"}
        </button>
      </div>
    </div>
  );
};

const HistoryTab = () => {
  const user = {
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
  );
};

const ChangePasswordTab = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới không khớp!");
      return;
    }

    // API gọi ở đây để xử lý đổi mật khẩu

    setSuccess("Đổi mật khẩu thành công!");
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label>Mật khẩu cũ</label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
          required
        />
        <label>Mật khẩu mới</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
          required
        />
        <label>Xác nhận mật khẩu mới</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="bg-gray-700 text-white p-2 rounded-md w-full border border-gray-600"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-md w-full text-lg"
        >
          Cập Nhật Mật Khẩu
        </button>
      </form>
    </div>
  );
};

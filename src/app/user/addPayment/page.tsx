// "use client";
// import { useState } from "react";

// const AddPayment = () => {
//   const [activeTab, setActiveTab] = useState("card"); // "card" hoặc "bank"

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg w-[450px] text-white backdrop-blur-md">
//         <div className="flex justify-between">
//           <button
//             onClick={() => setActiveTab("card")}
//             className={`p-2 w-1/2 text-center ${
//               activeTab === "card" ? "border-b-2 border-blue-500" : "opacity-50"
//             }`}
//           >
//             Thẻ Ngân Hàng
//           </button>
//           <button
//             onClick={() => setActiveTab("bank")}
//             className={`p-2 w-1/2 text-center ${
//               activeTab === "bank" ? "border-b-2 border-blue-500" : "opacity-50"
//             }`}
//           >
//             Tài Khoản Thanh Toán
//           </button>
//         </div>

//         {activeTab === "card" ? <CardForm /> : <BankAccountForm />}
//       </div>
//     </div>
//   );
// };

// // 🏦 Form Thêm Thẻ Ngân Hàng
// const CardForm = () => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
//       setError("Số thẻ phải có 16 chữ số.");
//       return;
//     }
//     if (!/^\d{2}\/\d{2}$/.test(expiry)) {
//       setError("Ngày hết hạn không hợp lệ (MM/YY).");
//       return;
//     }
//     if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
//       setError("CVV phải có 3 chữ số.");
//       return;
//     }
//     alert("Thẻ đã được thêm (chỉ là giao diện)");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
//       {error && <p className="text-red-400 text-sm">{error}</p>}
//       <input
//         type="text"
//         placeholder="Tên chủ thẻ"
//         value={cardName}
//         onChange={(e) => setCardName(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Số thẻ (16 số)"
//         value={cardNumber}
//         onChange={(e) => setCardNumber(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//         maxLength={16}
//       />
//       <div className="flex gap-3">
//         <input
//           type="text"
//           placeholder="MM/YY"
//           value={expiry}
//           onChange={(e) => setExpiry(e.target.value)}
//           className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2 w-1/2"
//           required
//           maxLength={5}
//         />
//         <input
//           type="text"
//           placeholder="CVV"
//           value={cvv}
//           onChange={(e) => setCvv(e.target.value)}
//           className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2 w-1/2"
//           required
//           maxLength={3}
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-lg mt-4"
//       >
//         Lưu Thẻ
//       </button>
//     </form>
//   );
// };

// // 💰 Form Thêm Tài Khoản Thanh Toán
// const BankAccountForm = () => {
//   const [accountNumber, setAccountNumber] = useState("");
//   const [accountName, setAccountName] = useState("");
//   const [accountID, setAccountID] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (accountNumber.length < 6 || !/^\d+$/.test(accountNumber)) {
//       setError("Số tài khoản phải có ít nhất 6 chữ số.");
//       return;
//     }
//     if (!bankName.trim()) {
//       setError("Vui lòng chọn ngân hàng.");
//       return;
//     }
//     alert("Tài khoản đã được thêm (chỉ là giao diện)");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
//       {error && <p className="text-red-400 text-sm">{error}</p>}
//       <input
//         type="text"
//         placeholder="Tên chủ tài khoản"
//         value={accountName}
//         onChange={(e) => setAccountName(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Số CCCD"
//         value={accountID}
//         onChange={(e) => setAccountID(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Số tài khoản"
//         value={accountNumber}
//         onChange={(e) => setAccountNumber(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <select
//         value={bankName}
//         onChange={(e) => setBankName(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       >
//         <option value="">Chọn ngân hàng</option>
//         <option value="Vietcombank">Vietcombank</option>
//         <option value="Techcombank">Techcombank</option>
//         <option value="BIDV">BIDV</option>
//         <option value="MB Bank">MB Bank</option>
//       </select>
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-lg mt-4"
//       >
//         Lưu Tài Khoản
//       </button>
//     </form>
//   );
// };

// export default AddPayment;

// "use client";
// import { useState } from "react";

// const AddPayment = () => {
//   const [activeTab, setActiveTab] = useState("card"); // "card" hoặc "bank"
//   const [savedCard, setSavedCard] = useState<any>(null);
//   const [savedAccount, setSavedAccount] = useState<any>(null);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg w-[450px] text-white backdrop-blur-md">
//         <div className="flex justify-between">
//           <button
//             onClick={() => setActiveTab("card")}
//             className={`p-2 w-1/2 text-center ${
//               activeTab === "card" ? "border-b-2 border-blue-500" : "opacity-50"
//             }`}
//           >
//             Thẻ Ngân Hàng
//           </button>
//           <button
//             onClick={() => setActiveTab("bank")}
//             className={`p-2 w-1/2 text-center ${
//               activeTab === "bank" ? "border-b-2 border-blue-500" : "opacity-50"
//             }`}
//           >
//             Tài Khoản Thanh Toán
//           </button>
//         </div>

//         {/* Khu vực hiển thị trạng thái thẻ/tài khoản */}
//         <div className="mt-4 p-3 bg-gray-700/50 rounded-lg">
//           <h3 className="text-lg font-semibold">Trạng Thái Thanh Toán</h3>
//           {savedCard ? (
//             <div className="mt-2">
//               <p>
//                 💳 <strong>Thẻ:</strong> {savedCard.cardName}
//               </p>
//               <p>
//                 🔢 <strong>Số:</strong> **** **** ****{" "}
//                 {savedCard.cardNumber.slice(-4)}
//               </p>
//               <p>
//                 📅 <strong>Hết hạn:</strong> {savedCard.expiry}
//               </p>
//             </div>
//           ) : savedAccount ? (
//             <div className="mt-2">
//               <p>
//                 🏦 <strong>Ngân hàng:</strong> {savedAccount.bankName}
//               </p>
//               <p>
//                 👤 <strong>Tên chủ:</strong> {savedAccount.accountName}
//               </p>
//               <p>
//                 🔢 <strong>Số tài khoản:</strong> ****{" "}
//                 {savedAccount.accountNumber.slice(-4)}
//               </p>
//             </div>
//           ) : (
//             <p className="text-gray-400">Chưa có phương thức thanh toán nào.</p>
//           )}
//         </div>

//         {activeTab === "card" ? (
//           <CardForm setSavedCard={setSavedCard} />
//         ) : (
//           <BankAccountForm setSavedAccount={setSavedAccount} />
//         )}
//       </div>
//     </div>
//   );
// };

// // 🏦 Form Thêm Thẻ Ngân Hàng
// const CardForm = ({ setSavedCard }: { setSavedCard: (data: any) => void }) => {
//   const [cardNumber, setCardNumber] = useState("");
//   const [cardName, setCardName] = useState("");
//   const [expiry, setExpiry] = useState("");
//   const [cvv, setCvv] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
//       setError("Số thẻ phải có 16 chữ số.");
//       return;
//     }
//     if (!/^\d{2}\/\d{2}$/.test(expiry)) {
//       setError("Ngày hết hạn không hợp lệ (MM/YY).");
//       return;
//     }
//     if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
//       setError("CVV phải có 3 chữ số.");
//       return;
//     }

//     setSavedCard({ cardNumber, cardName, expiry });

//     alert("Thẻ đã được thêm!");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
//       {error && <p className="text-red-400 text-sm">{error}</p>}
//       <input
//         type="text"
//         placeholder="Tên chủ thẻ"
//         value={cardName}
//         onChange={(e) => setCardName(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Số thẻ (16 số)"
//         value={cardNumber}
//         onChange={(e) => setCardNumber(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//         maxLength={16}
//       />
//       <div className="flex gap-3">
//         <input
//           type="text"
//           placeholder="MM/YY"
//           value={expiry}
//           onChange={(e) => setExpiry(e.target.value)}
//           className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2 w-1/2"
//           required
//           maxLength={5}
//         />
//         <input
//           type="text"
//           placeholder="CVV"
//           value={cvv}
//           onChange={(e) => setCvv(e.target.value)}
//           className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2 w-1/2"
//           required
//           maxLength={3}
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-lg mt-4"
//       >
//         Lưu Thẻ
//       </button>
//     </form>
//   );
// };

// // 💰 Form Thêm Tài Khoản Thanh Toán
// const BankAccountForm = ({
//   setSavedAccount,
// }: {
//   setSavedAccount: (data: any) => void;
// }) => {
//   const [accountNumber, setAccountNumber] = useState("");
//   const [accountName, setAccountName] = useState("");
//   const [accountID, setAccountID] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (accountNumber.length < 6 || !/^\d+$/.test(accountNumber)) {
//       setError("Số tài khoản phải có ít nhất 6 chữ số.");
//       return;
//     }
//     if (!bankName.trim()) {
//       setError("Vui lòng chọn ngân hàng.");
//       return;
//     }

//     setSavedAccount({ accountNumber, accountName, bankName });

//     alert("Tài khoản đã được thêm!");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
//       {error && <p className="text-red-400 text-sm">{error}</p>}
//       <input
//         type="text"
//         placeholder="Tên chủ tài khoản"
//         value={accountName}
//         onChange={(e) => setAccountName(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <input
//         type="text"
//         placeholder="Số tài khoản"
//         value={accountNumber}
//         onChange={(e) => setAccountNumber(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       />
//       <select
//         value={bankName}
//         onChange={(e) => setBankName(e.target.value)}
//         className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
//         required
//       >
//         <option value="">Chọn ngân hàng</option>
//         <option value="Vietcombank">Vietcombank</option>
//         <option value="Techcombank">Techcombank</option>
//       </select>
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-lg mt-4"
//       >
//         Lưu Tài Khoản
//       </button>
//     </form>
//   );
// };

// export default AddPayment;

"use client";
import { useEffect, useState } from "react";

const AddPayment = () => {
  const [activeTab, setActiveTab] = useState("card"); // "card" hoặc "bank"

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800/50 p-6 rounded-2xl shadow-lg w-[450px] text-white backdrop-blur-md">
        <div className="flex justify-between">
          <button
            onClick={() => setActiveTab("card")}
            className={`p-2 w-1/2 text-center ${
              activeTab === "card" ? "border-b-2 border-blue-500" : "opacity-50"
            }`}
          >
            Thẻ Ngân Hàng
          </button>
          <button
            onClick={() => setActiveTab("bank")}
            className={`p-2 w-1/2 text-center ${
              activeTab === "bank" ? "border-b-2 border-blue-500" : "opacity-50"
            }`}
          >
            Tài Khoản Thanh Toán
          </button>
        </div>

        {activeTab === "card" ? <CardForm /> : <BankAccountForm />}
      </div>
    </div>
  );
};

// 🏦 Form Thêm Thẻ Ngân Hàng
const CardForm = () => {
  // Khai báo biến lưu thẻ
  const [savedCard, setSavedCard] = useState<{
    cardName: string;
    cardNumber: string;
    expiry: string;
  } | null>(null);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");

  // Nút lưu
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      setError("Số thẻ phải có 16 chữ số.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError("Ngày hết hạn không hợp lệ (MM/YY).");
      return;
    }
    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      setError("CVV phải có 3 chữ số.");
      return;
    }

    setSavedCard({ cardName, cardNumber, expiry });
    alert("Thẻ đã được thêm!");
  };

  //Nút xóa thẻ
  const handleDeleteCard = () => {
    if (confirm("Bạn có chắc muốn xóa thẻ này không?")) {
      setSavedCard(null);
    }
  };

  return (
    <div>
      {savedCard && (
        <div className="p-3 bg-gray-700 rounded-md">
          <p className="font-bold">{savedCard.cardName}</p>
          <p>{savedCard.cardNumber}</p>
          <p>Hết hạn: {savedCard.expiry}</p>
          <button
            onClick={handleDeleteCard}
            className="mt-2 bg-red-500 hover:bg-red-600 p-2 rounded-md text-sm"
          >
            Xóa Thẻ
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        {error && <p className="text-red-400 text-sm">{error}</p>}
        Tên chủ thẻ
        <input
          type="text"
          placeholder="Nhập tên chủ thẻ"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
          required
        />
        <p>Thông tin thẻ</p>
        <input
          type="text"
          placeholder="Nhập số thẻ"
          value={cardNumber}
          // onChange là để có khoảng cách khi ghi được 4 số
          onChange={(e) => {
            let value = e.target.value;

            // Loại bỏ tất cả ký tự không phải số
            value = value.replace(/\D/g, "");

            // Giới hạn độ dài tối đa 16 số
            if (value.length > 16) {
              value = value.slice(0, 16);
            }

            // Tự động thêm dấu cách sau mỗi 4 số
            value = value.replace(/(\d{4})/g, "$1 ").trim();

            setCardNumber(value);
          }}
          className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
          required
          maxLength={19}
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="MM/YY"
            value={expiry}
            // onChage để tự động thêm "/" khi ghi được 2 số đầu
            onChange={(e) => {
              let value = e.target.value;

              // Xóa tất cả ký tự không phải số hoặc "/"
              value = value.replace(/[^0-9/]/g, "");

              // Nếu nhập đủ 2 số đầu và chưa có "/", tự động thêm "/"
              if (value.length === 2 && !value.includes("/")) {
                value += "/";
              }

              // Giới hạn độ dài 5 ký tự
              if (value.length > 5) {
                value = value.slice(0, 5);
              }

              setExpiry(value);
            }}
            className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2 w-1/2"
            required
            maxLength={5}
          />
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2 w-1/2"
            required
            maxLength={3}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-lg mt-4"
        >
          Lưu Thẻ
        </button>
      </form>
    </div>
  );
};

// 💰 Form Thêm Tài Khoản Thanh Toán
const BankAccountForm = () => {
  // Khai báo biến lưu tài khoản
  const [savedBankAccount, setSavedBankAccount] = useState<{
    accountName: string;
    accountNumber: string;
    bankName: string;
  } | null>(null);

  interface Bank {
    code: string;
    name: string;
    shortName?: string; // Có thể có hoặc không
  }

  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState("");
  const [banks, setBanks] = useState<Bank[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountNumber.length < 6 || !/^\d+$/.test(accountNumber)) {
      setError("Số tài khoản phải có ít nhất 6 chữ số.");
      return;
    }
    if (!bankName.trim()) {
      setError("Vui lòng chọn ngân hàng.");
      return;
    }

    setSavedBankAccount({ accountName, accountNumber, bankName });
    alert("Tài khoản đã được thêm!");
  };

  const handleDeleteBank = () => {
    if (confirm("Bạn có chắc muốn xóa tài khoản này không?")) {
      setSavedBankAccount(null);
    }
  };

  // Lấy API thông tin ngân hàng ở VN
  useEffect(() => {
    fetch("https://api.vietqr.io/v2/banks")
      .then((response) => response.json())
      .then((data) => setBanks(data.data))
      .catch((error) =>
        console.error("Lỗi khi lấy danh sách ngân hàng:", error)
      );
  }, []);

  return (
    <div>
      {savedBankAccount && (
        <div className="p-3 bg-gray-700 rounded-md">
          <p className="font-bold">{savedBankAccount.accountName}</p>
          <p>Số tài khoản: {savedBankAccount.accountNumber}</p>
          <p>Ngân hàng: {savedBankAccount.bankName}</p>
          <button
            onClick={handleDeleteBank}
            className="mt-2 bg-red-500 hover:bg-red-600 p-2 rounded-md text-sm"
          >
            Xóa Tài Khoản
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <p>Tên chủ tài khoản</p>
        <input
          type="text"
          placeholder="Nhập họ tên"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
          required
        />
        <p>Số tài khoản</p>
        <input
          type="text"
          placeholder="Nhập số tài khoản"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
          className="bg-transparent border-b border-gray-500 focus:border-white outline-none px-3 py-2"
          required
        />
        <p>Ngân hàng</p>
        {/* Dropdown cho chọn ngân hàng */}
        <div className="relative">
          <select
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="appearance-none w-full bg-slate-500 border  focus:border-white outline-none px-2 py-2 rounded-md cursor-pointer"
            required
          >
            <option value="">Chọn ngân hàng</option>
            {banks.map((bank) => (
              <option key={bank.code} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            ▼
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded-lg text-lg mt-4">
          Lưu Tài Khoản
        </button>
      </form>
    </div>
  );
};

export default AddPayment;

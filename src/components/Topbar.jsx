import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#2e2365] text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-4">
        {/* Left side */}
        <div className="flex gap-4">
          <a href="#" className="hover:underline">E-Office</a>
          <a href="#" className="hover:underline">Email</a>
          <a href="#" className="hover:underline">Thư viện - Thông tin</a>
        </div>

        {/* Right side */}
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:underline">Kết nối</a>
          <span>|</span>
          <a href="#" className="hover:underline">Liên hệ</a>

          {/* Flags */}
          <a href="#" className="flex items-center gap-1">
            <img src="./img/vn.jpg" alt="VN" className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center gap-1">
            <img src="./img/my.jpg" alt="EN" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

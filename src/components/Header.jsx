import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-100 py-2 px-6 flex items-center">
      {/* Logo bên trái */}
      <img
        src="/iuh.png"
        alt="Logo Trường"
        className="h-20 mr-6" // cao 80px, cách text 1 chút
      />
      {/* Text bên phải */}
      <div className="flex flex-col text-center flex-1">
        <h1 className="text-xl font-bold text-blue-900 leading-tight">
          BỘ CÔNG THƯƠNG<br />
          <span className="text-2xl">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</span>
        </h1>
        <p className="text-sm text-red-600 mt-1">
          Đổi mới tư duy, làm giàu thêm tri thức - đời sống
        </p>
      </div>
    </div>
  );
};

export default Header;

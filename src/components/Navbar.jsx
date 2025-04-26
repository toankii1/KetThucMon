import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  const menuItems = [
    {
      title: "GIỚI THIỆU",
      submenu: [
        "Giới thiệu chung",
        "Tầm nhìn - Sứ mạng - Mục tiêu chiến lược",
        "Triết lý giáo dục",
        "Phương châm hoạt động",
        "Giá trị cốt lõi",
        "Chính sách chất lượng",
        "Sơ đồ bộ máy tổ chức",
        "Cơ sở vật chất",
        "Đội ngũ",
        "Báo cáo công khai",
        "Hệ thống nhận diện",
      ],
    },
    {
      title: "ĐÀO TẠO",
      submenu: ["Chuyen trang dao tao", "Đào tạo quốc tế"],
    },
    {
      title: "TUYỂN SINH",
      submenu: ["Tuyen Sinh Dai Hoc", "Tuyen sinh chuong trinh lien ket", "Tuyen sinh trinh do thac si-tien si"],
    },
    { title: "NGHIÊN CỨU" },
    { title: "SINH VIÊN" },
    { title: "GIẢNG VIÊN" },
    { title: "VĂN BẰNG" },
  ];

  return (
    <nav className="bg-[#d0dce5] shadow">
      <div className="container mx-auto flex">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="px-4 py-3 font-bold text-[#2e317c] hover:text-red-600 flex items-center"
            >
              {item.title}
              {item.submenu && <span className="ml-1">▼</span>}
            </button>

            {/* Submenu */}
            {item.submenu && openMenu === index && (
              <div className="absolute left-0 top-full w-60 bg-white shadow-md text-gray-800 z-50">
                {item.submenu.map((subitem, subindex) => (
                  <a
                    href="#"
                    key={subindex}
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    {subitem}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Replace the previous search input with the SearchBar component */}
        <div className="ml-auto flex items-center">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

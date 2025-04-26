import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleMenu = (menuItem) => {
    setExpandedMenu(expandedMenu === menuItem ? null : menuItem);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">CƠ CẤU TỔ CHỨC</div>
      <ul className="sidebar-menu">
        <li className={`sidebar-item ${expandedMenu === 'lanhdao' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('lanhdao')}>
            <a href="#">LÃNH ĐẠO</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'lanhdao' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">ĐẢNG ỦY</a></li>
              <li className="sub-menu-item"><a href="#">BAN GIÁM HIỆU</a></li>
            </ul>
          )}
        </li>
        <li className={`sidebar-item ${expandedMenu === 'phongban' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('phongban')}>
            <a href="#">CÁC PHÒNG BAN</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'phongban' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">PHÒNG TỔ CHỨC - HÀNH CHÍNH</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG TÀI CHÍNH - KẾ TOÁN</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG KẾ HOẠCH - ĐẦU TƯ</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG ĐÀO TẠO</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG QUẢN LÝ KHOA HỌC VÀ HỢP TÁC QUỐC TẾ</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG CÔNG TÁC CHÍNH TRỊ VÀ HỖ TRỢ SINH VIÊN</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG KHẢO THÍ VÀ ĐẢM BẢO CHẤT LƯỢNG</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG QUẢN TRỊ</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG DỊCH VỤ</a></li>
              <li className="sub-menu-item"><a href="#">PHÒNG QUẢN LÝ KÝ TÚC XÁ</a></li>
              <li className="sub-menu-item"><a href="#">TẠP CHÍ KHOA HỌC VÀ CÔNG NGHỆ</a></li>
              <li className="sub-menu-item"><a href="#">NHÀ XUẤT BẢN</a></li>
            </ul>
          )}
        </li>
        <li className={`sidebar-item ${expandedMenu === 'khoa' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('khoa')}>
            <a href="#">CÁC KHOA</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'khoa' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">KHOA CÔNG NGHỆ THÔNG TIN</a></li>
              <li className="sub-menu-item"><a href="#">KHOA ĐIỆN - ĐIỆN TỬ</a></li>
              <li className="sub-menu-item"><a href="#">KHOA CƠ KHÍ</a></li>
              {/* Thêm các khoa khác tại đây */}
            </ul>
          )}
        </li>
        <li className={`sidebar-item ${expandedMenu === 'vien' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('vien')}>
            <a href="#">CÁC VIỆN</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'vien' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">VIỆN NGHIÊN CỨU VÀ PHÁT TRIỂN ỨNG DỤNG</a></li>
              <li className="sub-menu-item"><a href="#">VIỆN ĐÀO TẠO QUỐC TẾ</a></li>
              {/* Thêm các viện khác tại đây */}
            </ul>
          )}
        </li>
        <li className={`sidebar-item ${expandedMenu === 'trungtam' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('trungtam')}>
            <a href="#">CÁC TRUNG TÂM</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'trungtam' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">TRUNG TÂM NGOẠI NGỮ - TIN HỌC</a></li>
              <li className="sub-menu-item"><a href="#">TRUNG TÂM HỖ TRỢ SINH VIÊN</a></li>
              {/* Thêm các trung tâm khác tại đây */}
            </ul>
          )}
        </li>
        <li className={`sidebar-item ${expandedMenu === 'phanhieu' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('phanhieu')}>
            <a href="#">CÁC PHÂN HIỆU</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'phanhieu' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">PHÂN HIỆU TẠI QUẢNG NGÃI</a></li>
              <li className="sub-menu-item"><a href="#">CƠ SỞ TẠI THANH HÓA</a></li>
              {/* Thêm các phân hiệu khác tại đây */}
            </ul>
          )}
        </li>
        <li className={`sidebar-item ${expandedMenu === 'doanthe' ? 'active' : ''}`}>
          <div className="menu-item-header" onClick={() => toggleMenu('doanthe')}>
            <a href="#">ĐOÀN THỂ</a>
            <div className="arrow-icon">&gt;</div>
          </div>
          {expandedMenu === 'doanthe' && (
            <ul className="sub-menu">
              <li className="sub-menu-item"><a href="#">ĐOÀN THANH NIÊN</a></li>
              <li className="sub-menu-item"><a href="#">HỘI SINH VIÊN</a></li>
              {/* Thêm các đoàn thể khác tại đây */}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
import React from 'react';
import './Announcements.css'; // Import file CSS

function Announcements() {
  return (
    <div className="announcements-container">
      <div className="announcement-block">
        <div className="announcement-header">
          <h3>THÔNG BÁO</h3>
          <a href="#" className="view-all">xem tất cả</a>
        </div>
        <ul className="announcement-list">
          <li>
            <span><div className="bullet"></div> Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025</span>
            <span className="date">24-04-2025</span> <span className="new-badge">new</span>
          </li>
          <li>
            <span><div className="bullet"></div> Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội...</span>
            <span className="date">21-04-2025</span> <span className="new-badge">new</span>
          </li>
          {/* Thêm các thông báo khác */}
        </ul>
      </div>

      <div className="announcement-block">
        <div className="announcement-header">
          <h3>TUYỂN SINH</h3>
          <a href="#" className="view-all">xem tất cả</a>
        </div>
        <ul className="announcement-list">
          <li>
            <span><div className="bullet"></div> Thông báo tuyển sinh đào tạo liên thông từ trình độ cao đẳng lên trình...</span>
            <span className="date">28-03-2025</span>
          </li>
          <li>
            <span><div className="bullet"></div> Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025</span>
            <span className="date">20-03-2025</span>
          </li>
          {/* Thêm các thông tin tuyển sinh khác */}
        </ul>
      </div>

      <div className="news-events-block">
        <div className="announcement-header">
          <h3>TIN TỨC - SỰ KIỆN</h3>
          <a href="#" className="view-all">xem tất cả</a>
        </div>
        <div className="news-event-item">
          <img src="placeholder.jpg" alt="Tin tức 1" /> {/* Thay bằng đường dẫn ảnh thật */}
          <p>IUH bế mạc thành công đợt đánh giá chất lượng cấp trường theo tiêu chuẩn...</p>
          <span className="date">26-04-2025</span> <span className="new-badge">new</span>
        </div>
        <div className="news-event-item">
          <p>AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp...</p>
          <span className="date">25-04-2025</span> <span className="new-badge">new</span>
        </div>
        {/* Thêm các tin tức - sự kiện khác */}
      </div>

      <div className="international-cooperation-block">
        <div className="announcement-header">
          <h3>HỢP TÁC QUỐC TẾ</h3>
          <a href="#" className="view-all">xem tất cả</a>
        </div>
        <div className="international-cooperation-item">
          <img src="placeholder.jpg" alt="Hợp tác 1" /> {/* Thay bằng đường dẫn ảnh thật */}
          <p>Sôi nổi loạt hoạt động Tuần lễ giao lưu văn hóa, khoa học sinh viên quốc...</p>
          <span className="date">24-03-2025</span>
        </div>
        <div className="international-cooperation-item">
          <p>Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus</p>
          <span className="date">19-03-2025</span>
        </div>
        {/* Thêm các thông tin hợp tác quốc tế khác */}
      </div>
    </div>
  );
}

export default Announcements;
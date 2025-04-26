import React from 'react';
import './Branches.css'; 

function Branches() {
  return (
    <div className="branches-container">
      <div className="branch-block">
        <h3>Phân Hiệu Quảng Ngãi</h3>
        <img src="quangngai.jpg" alt="Phân Hiệu Quảng Ngãi" /> {/* Thay bằng đường dẫn ảnh thật */}
      </div>
      <div className="branch-block">
        <h3>Cơ Sở Thanh Hóa</h3>
        <img src="thanhhoa.jpg" alt="Cơ Sở Thanh Hóa" /> {/* Thay bằng đường dẫn ảnh thật */}
      </div>
      <div className="video-block">
        <div className="video-header">
          <h3>Video và Hình Ảnh</h3>
          <a href="#" className="view-all">xem tất cả</a>
        </div>
        <div className="video-item">
          <img src="video_placeholder.jpg" alt="Video 1" /> {/* Thay bằng đường dẫn ảnh thật */}
          <div className="play-icon">▶</div>
        </div>
        {/* Có thể thêm các video/hình ảnh khác */}
      </div>
    </div>
  );
}

export default Branches;
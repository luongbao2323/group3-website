// File này sẽ tự động bơm dòng chữ chạy và menu vào mọi trang
const topBarHTML = `
    <div class="top-bar">
        <div class="marquee">
            <span>12A2 MÃI ĐỈNH • 12A2 MÃI ĐỈNH • 12A2 MÃI ĐỈNH • 12A2 MÃI ĐỈNH</span>
            <span>12A2 MÃI ĐỈNH • 12A2 MÃI ĐỈNH • 12A2 MÃI ĐỈNH • 12A2 MÃI ĐỈNH</span>
        </div>
    </div>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-brand">
                <img src="anhlogomenu.jpg" alt="Logo 12A2" class="logo-img"> 
                <span class="brand-text">Lớp 12A2</span>
            </a>
            <ul class="nav-menu">
                <li><a class="nav-link" href="index.html">Trang chủ</a></li>
                <li><a class="nav-link" href="thanhvien.html">Thành viên</a></li>
                <li><a class="nav-link" href="giaovien.html">Giáo viên</a></li>
                <li><a class="nav-link" href="anh.html">Ảnh</a></li>
                <li><a class="nav-link" href="lienhe.html">Liên hệ</a></li>
            </ul>
        </div>
    </nav>
`;

// Chèn vào đầu thẻ body
document.body.insertAdjacentHTML('afterbegin', topBarHTML);
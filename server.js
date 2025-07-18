const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Railway sẽ cung cấp biến môi trường PORT

// 1. Phục vụ các file tĩnh từ thư mục 'public'
// Khi có yêu cầu đến một file tồn tại trong thư mục 'public' (ví dụ: /confirm.html, /css/style.css),
// Express sẽ phục vụ file đó trực tiếp.
app.use(express.static(path.join(__dirname, 'public')));

// 2. Xử lý tất cả các yêu cầu còn lại (fallback) để hiển thị index.html
// app.get('*') sẽ khớp với BẤT KỲ đường dẫn nào mà không được xử lý bởi express.static() ở trên.
// Điều này đảm bảo rằng các đường dẫn như /random, /abc, hay bất kỳ đường dẫn không hợp lệ nào
// cũng sẽ trả về nội dung của index.html.
app.get('*', (req, res) => {
    // Đảm bảo gửi file index.html từ thư mục public
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log('Serving files from the "public" directory.');
    console.log('All other routes will be served by index.html.');
});

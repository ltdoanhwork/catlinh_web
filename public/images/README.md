# Hình ảnh cho portfolio

Đặt ảnh thật vào đúng các đường dẫn dưới đây. Khi chưa có ảnh, trang tự hiển thị
placeholder gradient hồng nhẹ nhàng — nên trang luôn đẹp dù thiếu ảnh.

## Cần đặt các file sau

| Đường dẫn file (trong `public/`)      | Dùng ở đâu                         | Gợi ý kích thước |
| ------------------------------------- | ---------------------------------- | ---------------- |
| `images/profile.jpg`                  | Ảnh đại diện ở Hero                 | vuông, ~600×600  |
| `images/projects/jeify.jpg`           | Thumbnail project JEIFY            | 16:9, ~1200×675  |
| `images/projects/mindly.jpg`          | Thumbnail project Mindly          | 16:9, ~1200×675  |
| `images/instagram/post-1.jpg` … `post-6.jpg` | Lưới bài đăng Instagram     | vuông, ~800×800  |
| `images/tiktok/video-1.jpg` … `video-4.jpg` | Thumbnail video TikTok      | dọc 9:16, ~720×1280 |

## Cách lấy ảnh

- **Ảnh đại diện:** mở trang LinkedIn/Instagram của bạn → chuột phải vào ảnh →
  "Lưu ảnh thành…" → đổi tên thành `profile.jpg` và đặt vào `public/images/`.
- **Ảnh Instagram:** mở từng bài đăng trên `@noidaycocat`, lưu ảnh và đặt tên
  `post-1.jpg` → `post-6.jpg` trong `public/images/instagram/`.

Caption từng ô Instagram có thể chỉnh trong `src/data.js` (mục `instagram.posts`).

Định dạng hỗ trợ: `.jpg`, `.png`, `.webp`. Nếu đổi đuôi file, nhớ cập nhật đường
dẫn tương ứng trong `src/data.js`.

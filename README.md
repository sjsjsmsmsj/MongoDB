# 📚 [TÊN MÔN HỌC] - TÀI LIỆU THỰC HÀNH THI CUỐI KỲ

Đây là bộ tài liệu thực hành được thiết kế để ôn tập cho kỳ thi cuối kỳ môn **[Thay thế bằng Tên Môn học, ví dụ: Hệ QTCSDL NoSQL - MongoDB]**.

Tài liệu này bao gồm đề thi mẫu, bộ dữ liệu mẫu (.json) đã được chuẩn bị, và các lệnh Mongo Shell/Aggregation hoàn chỉnh, giúp bạn ôn tập và kiểm tra các kỹ năng truy vấn nâng cao.

* **Mã đề áp dụng:** [Thay thế bằng Mã đề, ví dụ: 789]
* **Database mặc định:** MSSV (ví dụ: `23703881`)

---

## 1. 📂 CẤU TRÚC DỰ ÁN

Tổ chức các file dữ liệu và tài liệu theo cấu trúc sau:

| Tên File/Thư mục | Mô tả |
| :--- | :--- |
| `README.md` | Hướng dẫn chung. |
| `DE_THI.md` | Nội dung chi tiết của đề thi gốc. |
| **`data/`** | Thư mục chứa các file JSON dữ liệu mẫu. |
| `data/[collection_1].json` | Dữ liệu cho Collection 1 (ví dụ: `sinhVien.json`). |
| `data/[collection_2].json` | Dữ liệu cho Collection 2 (ví dụ: `khoa.json`). |
| `QUERIES.js` | (Tùy chọn) File chứa tất cả các lệnh truy vấn giải đề. |

---

## 2. 🚀 CÀI ĐẶT VÀ IMPORT DỮ LIỆU

### 2.1. Thiết lập Database

Mở Mongo Shell và tạo/chuyển đến database theo mã số sinh viên của bạn:

```bash
use [Thay thế bằng MSSV của bạn] 
// Ví dụ: use 23703881

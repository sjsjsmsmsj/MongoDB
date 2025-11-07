# 📚 TÀI LIỆU THỰC HÀNH THI CUỐI KỲ MÔN HỆ QTCSDL NoSQL - MONGODB

Chào mừng bạn đến với bộ tài liệu thực hành được thiết kế dựa trên đề thi cuối kỳ môn **Hệ QTCSDL NoSQL - MongoDB**. Tài liệu này bao gồm đề thi, bộ dữ liệu mẫu (JSON) và các lệnh truy vấn giải đề hoàn chỉnh, giúp bạn ôn tập hiệu quả nhất.

---

## 1. ⚙️ CẤU TRÚC DỰ ÁN

Tài liệu được tổ chức theo cấu trúc sau:

| Tên File/Thư mục | Mô tả |
| :--- | :--- |
| `README.md` | File hướng dẫn sử dụng và giới thiệu tổng quan. |
| `DE_THI.md` | Nội dung chi tiết của đề thi cuối kỳ. |
| **`data/`** | Thư mục chứa toàn bộ dữ liệu mẫu (.json) để import. |
| `data/sinhVien.json` | Dữ liệu về sinh viên. |
| `data/lopHoc.json` | Dữ liệu về lớp học. |
| `data/monHocPhan.json`| Dữ liệu về môn học phần. |
| `data/khoa.json` | Dữ liệu về khoa và chuyên ngành (dữ liệu lồng nhau). |
| `data/dangKyHP.json` | Dữ liệu về đăng ký học phần (dữ liệu lồng nhau và ngày tháng). |

---

## 2. 🚀 BẮT ĐẦU THỰC HÀNH (CÂU 1)

**Yêu cầu:** Database sử dụng là **`[MSSV]`** (Ví dụ: `23703881`).

### 2.1. Chọn Database

Mở Mongo Shell (hoặc MongoDB Compass Shell) và chọn database của bạn:

```bash
use 23703881
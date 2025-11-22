// Kết nối đến database
db = db.getSiblingDB("climbing");;  // Đặt tên db mà em muốn

// Xóa collection cũ nếu có
db.mountains.drop();

// Tạo một mảng dữ liệu mẫu để insert nhanh
let bulk = db.mountains.initializeUnorderedBulkOp();

// Danh sách các đỉnh núi giả lập
const mountainNames = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu", "Cho Oyu", "Dhaulagiri", "Manaslu", "Nanga Parbat", "Annapurna"];
const countries = ["Nepal", "China", "Pakistan", "India", "Bhutan", "Tibet"];

// Dump data giả, thông tin các field các em có thể chủ động thay thế
for (let i = 0; i < 1000000; i++) {
    bulk.insert({
        _id: i,  // Đảm bảo _id là duy nhất
        name: mountainNames[i % mountainNames.length],  // Chọn ngẫu nhiên từ danh sách
        height: Math.floor(Math.random() * 2000) + 7000,  // Chiều cao từ 7000m - 9000m
        location: [countries[i % countries.length], countries[(i + 1) % countries.length]], // Hai quốc gia
        ascents: {
            first: { year: 1950 + Math.floor(Math.random() * 20) },  // Lần đầu leo từ 1950-1970
            first_winter: { year: 2000 + Math.floor(Math.random() * 20) }, // Lần đầu mùa đông từ 2000-2020
            total: Math.floor(Math.random() * 1000) + 100 // Số lần leo từ 100-1100
        }
    });

    // Insert theo batch 10.000 để tăng tốc độ | Tụi em có thể tìm hiểu thêm về insert theo batch, sẽ học ở môn Data Model
    if (i % 10000 === 0 && i !== 0) {
        bulk.execute();
        bulk = db.mountains.initializeUnorderedBulkOp();
        print(`Đã thêm ${i} documents...`);
    }
}

// Insert phần còn lại
if (bulk.length > 0) {
    bulk.execute();
}

print("Thêm thành công 1.000.000 documents!");

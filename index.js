// Bài tập 1
//  VIẾT CHƯƠNG TRÌNH TÍNH TIỀN LƯƠNG CHO NHÂN VIÊN
//  input: lương 1 ngày 100000, cho người dùng nhập vào số ngày làm; biết công thức tính lương là 100000 * số ngày làm
//  progress: dom tới thẻ input cho người dùng nhập vào số ngày làm, sau đó lấy số ngày người dùng nhập vào nhân với tiền lương 1 ngày
//  output: tính ra tiền lương của nhân viên khi nhập số ngày làm
var tinhTien = (document.querySelector("#ketQuaTienLuong").onclick =
  function () {
    var luong1ngay = 100000;
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var tongLuong = soNgayLam * luong1ngay;
    var ketQua = tongLuong.toLocaleString("vn-VN", {
      style: "currency",
      currency: "VND",
    });
    document.getElementById("xuatKetQuaTienLuong").innerHTML =
      "tổng lương là " + ketQua;
  });

// Bài tập 2
// VIẾT CHƯƠNG TRÌNH NHẬP VÀO 5 SỐ THỰC
// input: nhập vào năm số thực
// progress: tạo biến của 5 số thực, dom vào lấy giá trị của số thực trong input, tạo công thức tính tổng giá trị của năm số thực và công thức tính trung bình cộng của năm số thực
// output: tính ra giá trị của năm số thực và xuất ra màn hinh
var ketQuaTrungBinh = (document.querySelector("#giaTriTrungBinh").onclick =
  function () {
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var soThu4 = document.getElementById("soThu4").value * 1;
    var soThu5 = document.getElementById("soThu5").value * 1;
    var trungBinhCong = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById("xuatGiaTriTrungBinh").innerHTML =
      "Giá trị trung bình của 5 số là " + trungBinhCong;
  });

// Bài tập 3
// VIẾT CHƯƠNG TRÌNH QUY ĐỔI TỪ TIỀN ĐÔ SANG TIỀN VIỆT
// input: nhập vào số tiền USD
// progress: dom tới thẻ input lấy giá trị của số mà người dùng nhập vào, sau đó tạo công thức tính tiền USD sang tiền Việt bằng cách lấy số tiền USD nhân với 23500
// output:quy đổi tiền đô sang tiền việt
var quyDoi = (document.querySelector("#btnQuyDoi").onclick = function () {
  var USD = 23500;
  var soTienQuyDoi = document.getElementById("soTienQuyDoi").value * 1;
  var thanhTien = soTienQuyDoi * USD;
  var soTien = thanhTien.toLocaleString("vn-VN", {
    style: "currency",
    currency: "VND",
  });
  document.getElementById("soTienDaQuyDoi").innerHTML = "Thành tiền " + soTien;
});

// Bài tập 4
// VIẾT CHƯƠNG TRÌNH NHẬP VÀO CHIỀU DÀI VÀ CHIỀU RỘNG TÍNH CHU VI VÀ DIÊN TÍCH
// input:nhập vào chiều dài và chiều rộng
// progress: tạo biến chiều dài và chiều rông, viết công thức tính chu vi và diện tích
// output: tính chu vi và diện tích
var btnTinh = (document.querySelector("#btnTinh").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("dienTichVaChuVi").innerHTML = `
    <p>Diện tích: ${dienTich}</p>
    <p>Chu vi: ${chuVi}</p>
    `;
});

// Bài tập 5
// VIẾT CHƯƠNG TRÌNH NHẬP VÀO 1 SỐ CÓ 2 CHỮ SỐ
// input: nhập vào 1 số có 2 chữ số
// progress : nhập vào 1 số bất kì lấy ra giá trị hàng chục và đơn vị, sau đó cho cộng lại với nhau
// output: tổng 2 kí số
var tinhTongKySo = (document.querySelector("#tinhTongKySo").onclick =
  function () {
    var haiChuSo = document.getElementById("haiChuSo").value * 1;
    var hangChucLe = haiChuSo / 10;
    var hangChuc = Math.floor(hangChucLe);
    var hangDonVi = haiChuSo % 10;
    var tongKySo = hangChuc + hangDonVi;
    document.getElementById("xuatTongKySo").innerHTML =
      "Tổng ký số là: " + tongKySo;
  });

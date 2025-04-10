import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";

const SamNgocLinh = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="pt-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-green-800">
              Sâm Ngọc Linh – Quốc Bảo Dược Liệu Việt Nam
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Sâm Ngọc Linh là loài sâm quý hiếm chỉ mọc ở độ cao từ 1.200m trở
              lên tại vùng núi Ngọc Linh, Kon Tum – Quảng Nam. Đây là loại sâm
              được phát hiện năm 1973 và được các nhà khoa học đánh giá có giá
              trị dược liệu vượt trội hơn cả sâm Hàn Quốc. Với hơn 50 hoạt chất
              quý, Sâm Ngọc Linh có tác dụng tăng cường miễn dịch, giảm stress,
              kéo dài tuổi thọ và hỗ trợ điều trị nhiều bệnh lý mãn tính.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743836764/h7gnwyet9gb7k7pvqnrx.png"
              alt="Cây Sâm Ngọc Linh"
              className="w-[80%] md:w-[90%] lg:w-[80%] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743837823/ekpsjpqc5dit9wrolrx9.png"
              alt="Sâm Ngọc Linh"
              className="w-full h-100 md:h-140 object-cover "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">
              Giới thiệu Sâm Ngọc Linh
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              Sâm Ngọc Linh là một loại dược liệu quý hiếm chỉ được tìm thấy tại
              vùng núi Ngọc Linh, Kon Tum – Quảng Nam. Đây được xem là “quốc
              bảo” của Việt Nam nhờ hàm lượng saponin cao cùng hơn 50 hợp chất
              quý có lợi cho sức khỏe. Sâm giúp tăng cường miễn dịch, cải thiện
              trí nhớ, chống oxy hóa, hỗ trợ điều trị nhiều bệnh lý mãn tính.
              Chúng tôi cam kết cung cấp các sản phẩm từ Sâm Ngọc Linh nguyên
              chất, được khai thác và chế biến theo quy trình nghiêm ngặt.
            </p>
            <h2 className="text-2xl font-bold mt-5 mb-4 text-green-800 ">
              Thành phần chính :{" "}
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>52 loại saponin (26 đã biết, 26 mới)</li>
              <li>7 polyacetylen (5 rõ cấu trúc)</li>
              <li>20 nguyên tố vi lượng</li>
              <li>18 acid amin (8 thiết yếu)</li>
              <li>Acid béo, vitamin, tinh dầu...</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-green-800 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Cách sử dụng Sâm Ngọc Linh
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <div>
              <h3 className="font-semibold">Ngâm rượu:</h3>
              <p>
                Ngâm sâm tươi 3 tháng trong rượu 40–50 độ. Dùng 50–100ml mỗi
                ngày.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Ngâm mật ong:</h3>
              <p>
                Thái lát mỏng, ngâm mật ong nguyên chất. Dùng mỗi ngày 1–2 lát.
              </p>
            </div>
            <div>
              <h3 className="font-semibold"> Hãm trà:</h3>
              <p>
                Thái lát, phơi khô. Hãm 1–2g/lần. Không uống sau 17h để tránh
                mất ngủ.
              </p>
            </div>
            <div>
              <h3 className="font-semibold"> Ngậm trực tiếp:</h3>
              <p>Thái lát mỏng, ngậm tan dần, nhai và nuốt.</p>
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-2xl font-bold  mb-4">* Lưu ý khi sử dụng :</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Không dùng quá liều.</li>
              <li>Người tiểu đường tránh dùng mật ong.</li>
              <li>Không dùng trà xanh ngay sau khi dùng sâm.</li>
              <li>Tham khảo ý kiến bác sĩ nếu có bệnh nền.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-900 mb-4">
            13 Tác dụng của Sâm Ngọc Linh
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800 text-lg">
            <ul className="space-y-2 list-disc list-inside">
              <li>Bảo vệ gan, chống viêm</li>
              <li>Hỗ trợ điều trị ung thư (MR-2)</li>
              <li>Giúp ngủ ngon, giảm stress</li>
              <li>Tăng sức đề kháng</li>
              <li>Chống lão hóa, làm đẹp da</li>
              <li>Tăng cường sinh lý</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Chống oxy hóa</li>
              <li>Cải thiện trí nhớ</li>
              <li>Giảm mệt mỏi</li>
              <li>Hỗ trợ tim mạch</li>
              <li>Ổn định huyết áp</li>
              <li>Kéo dài tuổi thọ</li>
              <li>Hỗ trợ tiêu hóa</li>
            </ul>
            <div className="max-w-4xl mx-auto ">
              <h2 className="text-2xl font-bold  mb-4">
                Phân biệt Sâm Ngọc Linh thật và giả
              </h2>
              <p className="text-lg text-gray-700">
                Sâm thật có lát giòn, mùi thơm đặc trưng, vị đắng hậu ngọt, mắt
                sâm mọc theo zíc zắc. Sâm giả thường là Tam thất hoang, sâm
                Trung Quốc, lát xốp, không thơm, có mùi hắc.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold  mb-4">
                Cách tính tuổi Sâm Ngọc Linh
              </h2>
              <p className="text-lg text-gray-700">
                Sau 3 năm đầu, mỗi năm thân rễ mọc thêm một mắt sâm (sẹo) theo
                hình zíc zắc. Ví dụ: Củ có 5 mắt sâm = 8 năm tuổi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Form />
    </div>
  );
};

export default SamNgocLinh;

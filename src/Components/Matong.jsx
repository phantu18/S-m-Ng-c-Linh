import React from "react";
import { motion } from "framer-motion";
import Form from "./Form";

const MatOng = () => {
  return (
    <div className="">
      <div className="pt-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-700">
              Mật Ong Nguyên Chất – Tinh Túy Từ Thiên Nhiên
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Mật ong nguyên chất được khai thác từ các tổ ong nuôi trong rừng
              hoặc vùng nguyên sinh, giàu dưỡng chất và hoàn toàn không pha
              trộn. Đây là sản phẩm thiên nhiên quý giá, chứa nhiều vitamin,
              khoáng chất và chất chống oxy hóa, mang lại nhiều lợi ích cho sức
              khỏe và sắc đẹp.
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
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743842907/ypybemsvvgmeashdk3es.png" // thay bằng hình thật của bạn
              alt="Mật Ong"
              className="w-[80%] md:w-[90%] lg:w-[80%] object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743844468/shcaaeisuojduzy2fjog.png" // thay bằng hình thật
              alt="Giới thiệu mật ong"
              className="w-full h-100 md:h-140 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-yellow-700">
              Giới thiệu Mật Ong Nguyên Chất
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              Mật ong nguyên chất là sản phẩm 100% từ thiên nhiên, được thu
              hoạch thủ công từ các tổ ong không sử dụng kháng sinh hay hóa
              chất. Ngoài vị ngọt thơm đặc trưng, mật ong còn giúp tăng cường
              sức đề kháng, hỗ trợ tiêu hóa, làm đẹp da và phòng chống bệnh tật.
            </p>
            <h2 className="text-2xl font-bold mt-5 mb-4 text-yellow-700">
              Thành phần chính:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Glucose, Fructose tự nhiên</li>
              <li>Vitamin nhóm B, C, K</li>
              <li>Khoáng chất: Kẽm, Sắt, Magie</li>
              <li>Chất chống oxy hóa tự nhiên</li>
              <li>Enzyme và acid hữu cơ</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-yellow-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Cách sử dụng Mật Ong
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <div>
              <h3 className="font-semibold">Uống buổi sáng:</h3>
              <p>Pha 1 thìa mật ong với nước ấm, uống trước khi ăn 30 phút.</p>
            </div>
            <div>
              <h3 className="font-semibold">Ngâm tỏi hoặc gừng:</h3>
              <p>Tăng cường miễn dịch, hỗ trợ tiêu hóa.</p>
            </div>
            <div>
              <h3 className="font-semibold">Đắp mặt nạ:</h3>
              <p>Trộn mật ong với sữa chua hoặc nghệ để dưỡng da.</p>
            </div>
            <div>
              <h3 className="font-semibold">Nấu ăn:</h3>
              <p>Ướp thịt, pha nước chấm, làm bánh, detox.</p>
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-2xl font-bold mb-4">* Lưu ý khi sử dụng:</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Không dùng cho trẻ dưới 1 tuổi.</li>
              <li>Người tiểu đường cần hỏi ý kiến bác sĩ.</li>
              <li>Không pha với nước quá nóng.</li>
              <li>Đóng kín, bảo quản nơi khô ráo.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">
            10 Lợi ích của Mật Ong
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800 text-lg">
            <ul className="space-y-2 list-disc list-inside">
              <li>Tăng cường miễn dịch</li>
              <li>Kháng khuẩn, chống viêm</li>
              <li>Hỗ trợ tiêu hóa</li>
              <li>Chống lão hóa</li>
              <li>Giảm ho, đau họng</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Dưỡng da, trị mụn</li>
              <li>Cải thiện giấc ngủ</li>
              <li>Hỗ trợ giảm cân</li>
              <li>Giảm stress</li>
              <li>Tốt cho tim mạch</li>
            </ul>
          </div>
        </div>
      </section>

      <Form />
    </div>
  );
};

export default MatOng;

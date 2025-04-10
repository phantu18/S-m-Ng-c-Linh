import React from "react";
import Form from "./Form";
import { motion } from "framer-motion";
const NamLinhChi = () => {
  return (
    <div className="">
      <div className="pt-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-red-800">
              Nấm Linh Chi – Dược Liệu Quý Từ Thiên Nhiên
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Nấm Linh Chi là loại thảo dược quý có lịch sử hơn 2000 năm, được
              sử dụng trong y học cổ truyền để tăng cường sức khỏe, kéo dài tuổi
              thọ và phòng chống bệnh tật. Với hoạt chất polysaccharide và
              triterpenoid cao, Nấm Linh Chi được xem như “thần dược” giúp thanh
              lọc cơ thể, hỗ trợ điều trị nhiều bệnh mãn tính.
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
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743845373/c2gxrqydc27i5kymsvau.png" // thay bằng hình thật của bạn
              alt="Nấm Linh Chi"
              className="w-[80%] md:w-[90%] lg:w-[80%] object-contain "
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
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743846608/wtqjrmiconsv3dsjcpwz.png" // thay bằng hình thật
              alt="Giới thiệu Nấm Linh Chi"
              className="w-full h-100 md:h-140 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-red-800">
              Giới thiệu Nấm Linh Chi
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              Nấm Linh Chi là loài nấm quý được sử dụng trong Đông y từ ngàn đời
              nay. Chứa nhiều hoạt chất sinh học quan trọng như polysaccharides,
              triterpenes, peptidoglycans..., Linh Chi giúp tăng cường miễn
              dịch, cải thiện chức năng gan, ổn định huyết áp và hỗ trợ điều trị
              ung thư. Chúng tôi cung cấp Nấm Linh Chi chất lượng cao, được nuôi
              trồng tự nhiên và chế biến an toàn.
            </p>
            <h2 className="text-2xl font-bold mt-5 mb-4 text-red-800">
              Thành phần chính:
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
              <li>Polysaccharides</li>
              <li>Triterpenoids</li>
              <li>Peptidoglycans</li>
              <li>Acid ganoderic</li>
              <li>Vitamin B, D và khoáng chất</li>
            </ul>
          </motion.div>
        </div>
      </div>

      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-red-700 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Cách sử dụng Nấm Linh Chi
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
            <div>
              <h3 className="font-semibold">Sắc nước uống:</h3>
              <p>
                Thái lát mỏng, đun sôi 20 phút với 1 lít nước. Uống thay trà
                hằng ngày.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Ngâm rượu:</h3>
              <p>Ngâm nấm lát trong rượu 40 độ, dùng 30ml mỗi ngày.</p>
            </div>
            <div>
              <h3 className="font-semibold">Nghiền bột:</h3>
              <p>Pha 1-2g bột với nước ấm hoặc sữa. Dùng buổi sáng/tối.</p>
            </div>
            <div>
              <h3 className="font-semibold">Nấu cháo, hầm canh:</h3>
              <p>Cho nấm vào món ăn để bổ dưỡng, thanh lọc cơ thể.</p>
            </div>
          </div>
          <div className="py-5">
            <h2 className="text-2xl font-bold mb-4">* Lưu ý khi sử dụng:</h2>
            <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
              <li>Không dùng quá liều lượng (5–10g/ngày là đủ).</li>
              <li>Người huyết áp thấp nên cẩn trọng.</li>
              <li>Không dùng chung với trà hoặc cà phê.</li>
              <li>Phụ nữ mang thai nên hỏi ý kiến bác sĩ.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            10 Tác dụng nổi bật của Nấm Linh Chi
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-800 text-lg">
            <ul className="space-y-2 list-disc list-inside">
              <li>Tăng cường miễn dịch</li>
              <li>Thải độc gan, tốt cho người uống rượu bia</li>
              <li>Ổn định huyết áp</li>
              <li>Giảm cholesterol xấu</li>
              <li>Chống lão hóa, làm đẹp da</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside">
              <li>Hỗ trợ điều trị ung thư</li>
              <li>Giảm căng thẳng, lo âu</li>
              <li>Cải thiện chức năng phổi</li>
              <li>Hỗ trợ giảm cân</li>
              <li>Tăng cường trí nhớ</li>
            </ul>
          </div>
        </div>
      </section>

      <Form />
    </div>
  );
};

export default NamLinhChi;

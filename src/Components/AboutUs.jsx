import React from "react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Form from "./Form";
const AboutUs = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <div className="w-full font-sans">
      <div
        className="relative w-full h-[200px] md:h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/dxejkfwm6/image/upload/v1743757500/jrit3du1nrcajmoxjvl1.jpg')`,
        }}
      >
        <h1 className="text-[#e8aa4c] text-2xl md:text-4xl font-bold drop-shadow-lg"></h1>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743758850/xeeemxo5kw4y5uctkmut.jpg"
              alt="Giới thiệu"
              className="w-full rounded-xl shadow-md object-cover h-70 md:h-90"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">
              Về Chúng Tôi
            </h2>
            <p className="text-gray-700 text-lg text-justify">
              Được hình thành từ niềm đam mê với thiên nhiên và sự trân trọng
              đối với những giá trị bản địa, công ty chúng tôi ra đời với sứ
              mệnh khai thác và lan tỏa những tinh túy của núi rừng Tây Nguyên –
              nơi được mệnh danh là thủ phủ của các loại dược liệu quý hiếm. Với
              nhiều năm kinh nghiệm trong lĩnh vực dược liệu thiên nhiên, chúng
              tôi tự hào mang đến cho khách hàng những sản phẩm tinh khiết, an
              toàn và giàu giá trị sức khỏe như <strong>Sâm Ngọc Linh</strong> –
              quốc bảo của Việt Nam,
              <strong>mật ong rừng nguyên chất</strong>, và{" "}
              <strong>nấm linh chi</strong> được nuôi trồng theo tiêu chuẩn hữu
              cơ.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-12 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-700">Sứ Mệnh</h2>
            <p className="text-gray-700 text-lg text-justify">
              Sứ mệnh của chúng tôi là khơi dậy và phát huy giá trị vốn có của
              các loại dược liệu quý hiếm từ núi rừng Việt Nam, không chỉ phục
              vụ nhu cầu chăm sóc sức khỏe trong nước mà còn hướng tới thị
              trường quốc tế. Bằng việc áp dụng công nghệ hiện đại vào quy trình
              chế biến và bảo quản, kết hợp cùng phương pháp truyền thống của
              người bản địa, chúng tôi cam kết tạo ra những sản phẩm mang tính
              kế thừa và đột phá. Đồng thời, công ty còn chú trọng đến việc bảo
              tồn tài nguyên thiên nhiên và hỗ trợ cộng đồng địa phương thông
              qua các chương trình phát triển bền vững.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743759410/ebns4xq4rvz0yrfvdvoj.jpg"
              alt="Sứ mệnh"
              className="w-full rounded-xl shadow-md object-cover h-70 md:h-90"
            />
          </motion.div>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743759383/vjhvg0bbdepnunh5mpua.jpg"
              alt="Tầm nhìn"
              className="w-full rounded-xl shadow-md object-cover h-70 md:h-90"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-700">Tầm Nhìn</h2>
            <p className="text-gray-700 text-lg text-justify">
              Trong vòng 10 năm tới, chúng tôi đặt mục tiêu trở thành thương
              hiệu dẫn đầu tại Việt Nam về sản phẩm dược liệu tự nhiên cao cấp,
              được người tiêu dùng trong và ngoài nước tin tưởng lựa chọn. Tầm
              nhìn của chúng tôi không chỉ dừng lại ở việc kinh doanh, mà còn là
              hành trình truyền cảm hứng về lối sống lành mạnh, gần gũi với
              thiên nhiên. Chúng tôi mong muốn xây dựng một hệ sinh thái bền
              vững, nơi mỗi sản phẩm không chỉ là một món quà từ núi rừng Kon
              Tum, mà còn là biểu tượng của sự hài hòa giữa con người và thiên
              nhiên.
            </p>
          </motion.div>
        </div>
      </div>

      <Form />
    </div>
  );
};

export default AboutUs;

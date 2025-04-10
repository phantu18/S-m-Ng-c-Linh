import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
export default function About() {
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
    <section className="flex flex-col md:flex-row items-center bg-white p-8">
      {/* Hình ảnh bên trái */}
      <div className="md:w-1/2">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
          poster=""
          onClick={handleVideoClick}
        >
          <source
            src="https://res.cloudinary.com/dxejkfwm6/video/upload/v1743157297/rqm8qefcdhmhxtk35nhv.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Nội dung bên phải */}
      <div className="md:w-1/2 p-8">
        <p className="text-sm text-gray-500  tracking-widest">Về Chúng Tôi</p>
        <h2 className="text-4xl font-serif font-semibold text-black mt-2">
          CTY TNHH SÂM NGỌC LINH
        </h2>
        <p className="text-gray-700 mt-4">
          {" "}
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="x"
            className="text-[#e8aa4c] pr-2"
          />
          Chúng tôi tự hào là đơn vị cung cấp các sản phẩm thảo dược quý từ
          thiên nhiên, được nuôi trồng và thu hái từ vùng núi Ngọc Linh – Kon
          Tum.
        </p>
        <p className="text-gray-700 mt-4">
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="x"
            className="text-[#e8aa4c] pr-2"
          />
          Với sứ mệnh mang đến những tinh hoa từ thiên nhiên, chúng tôi chuyên
          cung cấp Sâm Ngọc Linh, mật ong rừng, và nấm linh chi chất lượng cao,
          giúp chăm sóc sức khỏe một cách an toàn và hiệu quả.
        </p>
        <p className="text-gray-700 mt-4">
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="x"
            className="text-[#e8aa4c] pr-2"
          />
          Mỗi sản phẩm đều được tuyển chọn kỹ lưỡng, đảm bảo nguồn gốc rõ ràng
          và giữ trọn vẹn giá trị dược liệu.
        </p>
        <p className="text-gray-700 mt-4">
          <FontAwesomeIcon
            icon={faCheckCircle}
            size="x"
            className="text-[#e8aa4c] pr-2"
          />
          Hãy cùng chúng tôi khám phá sức mạnh từ thiên nhiên để nâng cao sức
          khỏe và chất lượng cuộc sống!
        </p>
      </div>
    </section>
  );
}

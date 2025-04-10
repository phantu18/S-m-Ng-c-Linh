import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import ZaloIcon from "./ZaloIcon";

export default function Form() {
  return (
    <div
      className="relative bg-cover bg-center py-12 px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('https://res.cloudinary.com/dxejkfwm6/image/upload/v1743329541/tmkd7zyf2yj4a0spjsyb.jpg')",
      }}
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        <div className="text-white">
          <h2 className="text-3xl font-bold">Địa Chỉ Liên Hệ</h2>
          <p className="mt-2 mb-6">Văn Phòng Offline</p>
          <div className="space-y-4">
            <p className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLocationDot} size="xl" color="#e8aa4c" />
              <span>QL40B, Ngọc Lây, Tu Mơ Rông, Kon Tum.</span>
            </p>
            <p className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} size="xl" color="#e8aa4c" />
              <span>0862 708 510</span>
            </p>
            <p className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} size="xl" color="#e8aa4c" />
              <span>pat18102004@gmail.com</span>
            </p>
          </div>
          <p className="mt-5 mb-4">Social Media</p>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/phan.anh.tu.608790"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="xl" />
            </a>
            <a
              href="https://zalo.me/0862708510"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ZaloIcon />
            </a>
          </div>
        </div>

        <div className="bg-white bg-opacity-40 backdrop-blur-md rounded-lg p-6 shadow-lg relative z-10">
          <form
            className="flex flex-col gap-3"
            action="https://formspree.io/f/manedpwe"
            method="POST"
          >
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="name"
                className="text-sm text-[#e8aa4c] font-semibold"
              >
                Name
              </label>
              <input
                name="Name"
                type="text"
                placeholder="Họ Và Tên"
                className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="email"
                className="text-sm text-[#e8aa4c] font-semibold"
              >
                Email
              </label>
              <input
                name="Email"
                type="email"
                placeholder="Email"
                className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="password"
                className="text-sm text-[#e8aa4c] font-semibold"
              >
                Phone
              </label>
              <input
                name="Phone"
                type="text"
                placeholder="Số điện thoại"
                className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="password"
                className="text-sm text-[#e8aa4c] font-semibold"
              >
                Message
              </label>
              <textarea
                name="Message"
                placeholder="Liên hệ để nhận thông tin chi tiết về sản phẩm."
                required
                className="w-full py-px pl-0 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#e8aa4c] text-white py-2 rounded-md hover:opacity-75"
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import FacebookPage from "./FacebookPage";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <img
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1742822579/irbn8bl8sjje52ydelbt.png"
              alt="Logo"
              className="h-40"
            />
            <p className="mt-2 italic text-sm text-gray-500">
              “Chất lượng tạo nên uy tín. Chúng tôi cam kết cung cấp sản phẩm
              nguyên chất, không pha trộn, không hóa chất, mang lại sức khỏe bền
              vững cho bạn.”
            </p>

            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faFacebookMessenger} size="lg" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="/" className="hover:text-gray-700">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-700">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="/sam-ngoc-linh" className="hover:text-gray-700">
                  Sâm Ngọc Linh
                </a>
              </li>
              <li>
                <a href="/mat-ong-rung" className="hover:text-gray-700">
                  Mật Ong Rừng
                </a>
              </li>
              <li>
                <a href="/nam-linh-chi" className="hover:text-gray-700">
                  Nấm Linh Chi
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Địa chỉ: Ql40, Ngọc Linh, Tu Mơ Rông, KonTum.
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Email: pat18102004@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  HotLine: 0862 708 510
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2025 Sâm Ngọc Linh, PAT
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import ZaloIcon from "./ZaloIcon";

const navigation = [
  { name: "Trang Chủ", href: "/" },
  { name: "Về Chúng Tôi", href: "/about" },
  // { name: "Sản phẩm", href: "/products" },
  { name: "Sâm Ngọc Linh", href: "/sam-ngoc-linh" },
  { name: "Mật Ong Rừng", href: "/mat-ong-rung" },
  { name: "Nấm Linh Chi", href: "/nam-linh-chi" },
  { name: "Liên Hệ", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1742823039/oihgaudskbcectk8jmru.png"
              className="h-10 md:h-12 lg:h-14 w-auto"
            />
          </NavLink>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon icon={faBars} size="6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.slice(0, 5).map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `text-sm font-semibold ${
                  isActive
                    ? " border-b-2 border-[#e8aa4c]"
                    : " hover:text-[#e8aa4c]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/contact"
            className="text-sm font-semibold text-gray-900 hover:text-[#e8aa4c]"
          >
            Contact <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
          </NavLink>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-25"
          onClick={() => setMobileMenuOpen(false)}
        />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-white px-3 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform transform ease-in-out duration-300">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <img
                alt="Logo"
                src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1742823039/oihgaudskbcectk8jmru.png"
                className="h-12 w-auto"
              />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#e8aa4c] border-l-4 border-[#e8aa4c]"
                      : "text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

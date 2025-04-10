import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    date: "Mar 30, 2025",
    title: "Giá trị dược liệu và công dụng của Sâm Ngọc Linh",
    description:
      "Sâm Ngọc Linh có giá trị dược liệu và công dụng tuyệt vời cho sức khỏe con người.",
    image:
      "https://usfwsnortheast.wordpress.com/wp-content/uploads/2014/01/ginseng.jpg",
    link: "https://quangnam.gov.vn/gia-tri-duoc-lieu-va-cong-dung-cua-sam-ngoc-linh-60243.html",
  },
  {
    id: 2,
    date: "Mar 30, 2025",
    title: "Công dụng và hướng dẫn dùng mật ong đúng cách",
    description:
      "Mật ong ngày càng được sử dụng phổ biến trên thế giới với những công dụng tuyệt vời như một chất làm ngọt tự nhiên, chất chống viêm, chống oxy hóa và kháng khuẩn.",
    image:
      "https://media.istockphoto.com/id/520733611/vi/anh/l%E1%BB%8D-m%E1%BA%ADt-ong-v%E1%BB%9Bi-t%E1%BB%95-ong.jpg?s=612x612&w=0&k=20&c=VUdwKTZnZzZ4ge8O5vygZmOKhv6qEJkNCqGkspfA6VY=",
    link: "https://www.vinmec.com/vie/bai-viet/cong-dung-va-huong-dan-dung-mat-ong-dung-cach-vi",
  },
  {
    id: 3,
    date: "Mar 30, 2025",
    title: "Nấm linh chi có tác dụng gì? Lợi ích và rủi ro",
    description:
      "Nấm linh chi là một loại dược liệu quý xuất hiện cách đây hàng nghìn năm. Theo nghiên cứu lâm sàng nấm linh chi mang lại nhiều tác dụng cho sức khỏe.",
    image:
      "https://media.istockphoto.com/id/2032569168/vi/anh/dried-lingzhi-mushroom-with-capsule-drug-alternative-medicine-herbal-organic-herb.jpg?s=612x612&w=0&k=20&c=dh9n0Ox2fEb20WMDdXhdKtF28BSpLac9QJcJxxB_8hI=",
    link: "https://www.vinmec.com/vie/bai-viet/nam-linh-chi-co-tac-dung-gi-loi-ich-va-rui-ro-vi",
  },
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900">TIN TỨC</h2>
      <p className="text-center italic text-gray-600 mb-8">
        " Tự nhiên trong từng sản phẩm "
      </p>

      {!isMobile ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <a
              target="_blank"
              key={post.id}
              href={post.link}
              className="block bg-[#f7f7f7] rounded-lg overflow-hidden group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{post.date}</p>
                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{post.description}</p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
          <AnimatePresence>
            {blogPosts.map(
              (post, index) =>
                index === currentIndex && (
                  <motion.a
                    key={post.id}
                    href={post.link}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    target="_blank"
                    className="absolute w-full   max-w-lg bg-[#FFF7FC] rounded-lg  overflow-hidden  "
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-md group-hover:opacity-75"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-500">{post.date}</p>
                      <h3 className="mt-2 text-lg font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </motion.a>
                )
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Blog;

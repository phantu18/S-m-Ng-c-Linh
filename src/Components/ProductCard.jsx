const products = [
  {
    id: 1,
    name: "Sâm Ngọc Linh",
    href: "/sam-ngoc-linh",
    imageSrc:
      "https://res.cloudinary.com/dxejkfwm6/image/upload/v1743240492/bsteljxgltvnriacff46.png",
    imageAlt: "Sâm Ngọc Linh",
  },
  {
    id: 2,
    name: "Mật Ong Rừng",
    href: "/mat-ong-rung",
    imageSrc:
      "https://res.cloudinary.com/dxejkfwm6/image/upload/v1743244320/xzq753auaftneiessfzf.png",
    imageAlt: "Mật Ong Rừng",
  },
  {
    id: 3,
    name: "Nấm Linh Chi",
    href: "/nam-linh-chi",
    imageSrc:
      "https://res.cloudinary.com/dxejkfwm6/image/upload/v1743241061/evr2ha82lxksto40cd3r.png",
    imageAlt: "Nấm Linh Chi",
  },
  // More products...
];

export default function ProductCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold tracking-wide text-black text-center ">
          SẢN PHẨM
        </h2>
        <p className="text-xl  italic text-gray-500 text-center pt-3">
          " Quà tặng thiên nhiên – Nâng tầm cuộc sống "
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3  ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full h-80  rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4  justify-items-center">
                <h3 className="text-xl text-black">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

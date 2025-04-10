import React from "react";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  px-6  py-5 bg-[#2e5034]">
      <div className="w-full md:w-1/2 flex justify-center md:justify-end md:mt-0">
        <img
          src="https://res.cloudinary.com/dxejkfwm6/image/upload/v1743437024/l08gtmeypm5508wdhkfx.png"
          alt="Shoes"
          className="w-3/4 md:w-full max-w-xl object-contain"
        />
      </div>
      <div className="max-w-lg lg:ml-10 text-left">
        <h2 className="text-2xl lg:text-4xl mt-5 font-bold">
          <span className="text-[#fdda53]">Đảo Yến Phú Quốc</span>
        </h2>
        <p className="text-gray-300 mt-4 text-xl ">
          Là đơn vị tiên phong phát triển ngành Yến Sào tại Thành phố Đảo Phú
          Quốc, hơn 10 năm nghiên cứu, tìm hiểu để đúc kết ra quy trình sơ chế
          tốt nhất, vừa đạt chất lượng, an toàn, lại giữ nguyên hàm lượng dinh
          dưỡng có trong tổ yến.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h2>Sản phẩm</h2>
      <ul>
        <li>
          <Link to="/products/sam-ngoc-linh">Sâm Ngọc Linh</Link>
        </li>
        <li>
          <Link to="/products/mat-ong-rung">Mật ong rừng</Link>
        </li>
        <li>
          <Link to="/products/nam-linh-chi">Nấm linh chi</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;

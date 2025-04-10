import About from "./About";
import Blog from "./Blog";
import Daoyenphuquoc from "./Daoyenphuquoc";
import FacebookPage from "./FacebookPage";
import Form from "./Form";
import PhotoGallery from "./PhotoGallery";
import ProductCard from "./ProductCard";
import Slider from "./Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <About />
      <ProductCard />
      <PhotoGallery />
      <Daoyenphuquoc />
      <Blog />
      <Form />
    </div>
  );
}

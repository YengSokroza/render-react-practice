import ProductComponent from "./ProductCompoent";
import FeedbackComponent from "./FeedbackComponent";

const MainComponent = () => {
  return (
    <>
      <div className="space-y-[20px] bg-green-50">
        <div className="px-[100px] ">
          <div className="py-8">
            <img
              src="https://us.innisfree.com/cdn/shop/files/innisfree-brand.svg?v=1700687353&width=246"
              className=" h-3 "
              alt="Flowbite React Logo"
            />
            <h1 className="text-[2rem] font-semibold ">
              Find your favourite products here! 🌿
            </h1>
          </div>
          <ProductComponent />

          
          <div className="pt-10">
          <img
            src="https://us.innisfree.com/cdn/shop/files/innisfree-brand.svg?v=1700687353&width=246"
            className=" h-3 "
            alt="Flowbite React Logo"
          />
          <h1 className="text-[2rem] font-semibold ">
          Customer Testimonials for Our Product! 🪴
          </h1>
        </div>
        </div>
        
        <div className=" bg-green-100">
          <FeedbackComponent />
        </div>
      </div>
    </>
  );
};

export default MainComponent;

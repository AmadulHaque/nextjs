
import ShortDsc from "@/app/components/content/ShortDsc";
import Title from "@/app/components/content/Title";
import HeroTwo from "@/app/components/hero/HeroTwo";
import MainLayout from "@/app/components/Layout/MainLayout";
import ProductList from "@/app/components/Product/ProductList";




const ProductPage = () => {
  return (
    <MainLayout>
      <section>
        <HeroTwo />
      </section>
      <section>
        <div className="shop-page">
          <div className="top-rated-product">
            <div className="section-title d-flex align-items-center flex-column gap-1">
              <Title title={"Our Top Products"} />
              <ShortDsc
                Desc={
                  "All Products are Cost-effective and Environmentally-friendly"
                }
              />
            </div>
            <div className="productList"></div>
          </div>
          <div className="category-wise-products d-flex ">
                <ProductList/>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductPage;

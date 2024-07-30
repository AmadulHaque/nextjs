
import HeroThree from '@/app/components/hero/HeroThree';
import MainLayout from '@/app/components/Layout/MainLayout';
import ProductDetails from '@/app/components/Product/ProductDetails'



export const metadata = {
  title: "Product Details",
  description: "Product Details",
};

export default async function Product({ params }) {
  return (
    <MainLayout>
     <section>
        <HeroThree />
      </section>
      <section>
        <div className="productDetails">
          <ProductDetails id={params.slug} />
        </div>
      </section>
    </MainLayout>
  )
}

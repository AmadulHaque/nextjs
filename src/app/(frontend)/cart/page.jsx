import HeroThree from "@/app/components/hero/HeroThree";
import Cart from "@/app/components/Checkout/Cart";
import MainLayout from "@/app/components/Layout/MainLayout";
import CheckoutForm from "@/app/components/Checkout/CheckoutForm";

export const metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart",
};

export default async function CartPage() {

  return (
    <MainLayout>
      <section>
        <HeroThree />
      </section>
      <div className="cartContainer">
        <div className="cartRow row">
          <div className="col-8">
            <h2>My Cart</h2>
              <Cart/>
          </div>
          <div className="col-4">
            <h4 className="mb-3">Customer Information</h4>
            <CheckoutForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

 

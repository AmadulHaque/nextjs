import dynamic from 'next/dynamic';

import ShortDsc from "./components/content/ShortDsc";
import Title from "./components/content/Title";
import Hero from "./components/hero/Hero";
import MainLayout from "./components/Layout/MainLayout";
import HomeMain from './components/Home/HomeMain';


export const metadata = {
  title: "Fast Power Tech",
  description: "Fast Power Tech",
};

export default function Home() {
    
  return (
    <>
    <MainLayout>
        <section>
          <Hero />
        </section>
        <section className="our-products">
          <div className="section-title d-flex align-items-center flex-column gap-2">
            <Title title={"Our Products"} />
            <ShortDsc Desc={"All Products are Cost-effective and Environmentally-friendly"} />
          </div>
          <HomeMain/>
        </section>
      </MainLayout>
    </>
  );
}


import About from "@/components/About";
import AreaOfFocus from "@/components/AreaOfFocus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RatesAndInsurance from "@/components/RatesAndInsurance";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <AreaOfFocus />
      <RatesAndInsurance />
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import RecentArrivals from "@/components/RecentArrivals";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import SellYourCar from "@/components/SellYourCar";
import Gallery from "@/components/Gallery";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import SmoothScroll from "@/components/SmoothScroll";
export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <RecentArrivals />
        <WhyUs />
        <HowItWorks />
        <SellYourCar />
        <Gallery />
        <CtaBand />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

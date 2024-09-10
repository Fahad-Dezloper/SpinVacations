import Banner from "@/app/components/shared/Banner";
import Image from "next/image";
import Categories from "@/app/components/home/Categories";
import ChooseUs from "@/app/components/home/ChooseUs";
import FeaturedDestination from "@/app/components/home/FeaturedDestination";
import TravelReminder from "@/app/components/home/TravelReminder";
import Testimonials from "@/app/components/home/Testimonials";

export default function Home() {
  return (
    <div className="overflow-x-hidden !important">
      <Banner />
      <ChooseUs />
      <Categories />
      <FeaturedDestination />
      <TravelReminder />
      <Testimonials />
    </div>
  );
}

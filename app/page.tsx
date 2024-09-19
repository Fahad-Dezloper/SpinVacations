import Banner from "@/app/components/shared/Banner";
import Image from "next/image";
import Categories from "@/app/components/home/Categories";
import ChooseUs from "@/app/components/home/ChooseUs";
import FeaturedDestination from "@/app/components/home/FeaturedDestination";
import TravelReminder from "@/app/components/home/TravelReminder";
import Testimonials from "@/app/components/home/Testimonials";
import UpcomingTour from "./components/home/UpcomingTour";
import AllTrips from "./components/home/AllTrips";

export default function Home() {
  return (
    <div className="overflow-x-hidden !important flex flex-col gap-16">
      <Banner />
      <UpcomingTour />
      <Categories />
      <FeaturedDestination />
      <TravelReminder />
      <AllTrips />
      <div className="w-full h-full img">
      <ChooseUs />
      <Testimonials />
      </div>
    </div>
  );
}

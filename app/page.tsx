import Banner from "@/app/components/shared/Banner";
import Categories from "@/app/components/home/Categories";
const ChooseUs = dynamic(() => import('@/app/components/home/ChooseUs'));
import FeaturedDestination from "@/app/components/home/FeaturedDestination";
import TravelReminder from "@/app/components/home/TravelReminder";
const Testimonials = dynamic(() => import('@/app/components/home/Testimonials'));
import UpcomingTour from "./components/home/UpcomingTour";
import AllTrips from "./components/home/AllTrips";
import dynamic from "next/dynamic";
import Loading from "./components/home/Loading";
import WChannel from "./components/home/WChannel";

export default function Home() {
  return (
    <>
      {/* <SearchTrips /> */}
      <div className="overflow-x-hidden !important flex flex-col gap-16 mainPage">
      <Banner />
      <UpcomingTour />
      <Categories />
      <FeaturedDestination />
      <TravelReminder />
      <AllTrips />
      <div className="w-full h-full img">
      <ChooseUs />
      <Testimonials />
      <WChannel />
      </div>
      </div>
      </>
  );
}

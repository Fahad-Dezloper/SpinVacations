import Banner from "@/app/components/Banner";
import MainNav from "@/app/components/MainNav";
import TopNavigation from "@/app/components/TopNavigation";
import Image from "next/image";
import Categories from "@/app/components/Categories";
import ChooseUs from "@/app/components/ChooseUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden !important">
      <TopNavigation />
      <MainNav />
      <Banner />
      <ChooseUs />
      <Categories />
    </div>
  );
}

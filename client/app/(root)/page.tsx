import Category from "@/components/home_component/Category";
import HeroSection from "@/components/home_component/HeroSection";
import TopDeals from "@/components/home_component/TopDeals";
import UserDisplay from "@/components/home_component/UserDisplay";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios"; // Import axios for making HTTP requests

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <UserDisplay></UserDisplay>

      <div className="p-1 mt-3">
        <HeroSection />
        <Category />
        <TopDeals />
      </div>
      <section></section>
    </main>
  );
}

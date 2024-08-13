import Category from "@/components/home_component/Category";
import HeroSection from "@/components/home_component/HeroSection";
import TopDeals from "@/components/home_component/TopDeals";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios"; // Import axios for making HTTP requests

export default async function Home() {
  let user;

  try {
    user = await currentUser();
  } catch (error) {
    console.error("Error fetching user:", error);
    user = null;
  }

  // Call the API to update user if user is not null
  if (user) {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT; // Define your backend URL
      await axios.post(`${backendUrl}/api/updateuser`, {
        id: user.id, // Assuming user object has an id property
        username: user.firstName, // Assuming you want to pass firstName as username
      });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col ">
      {user && (
        <h1 className="text-2xl font-medium mt-3">Hi, {user.firstName}</h1>
      )}

      <div className="p-1 mt-3">
        <HeroSection />
        <Category />
        <TopDeals />
      </div>
      <section></section>
    </main>
  );
}

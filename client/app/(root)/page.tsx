import Category from "@/components/home_component/Category";
import HeroSection from "@/components/home_component/HeroSection";
import TopDeals from "@/components/home_component/TopDeals";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-medium my-3">Hi, Kandaliakiki</h1>
      <div className="p-1">
        <HeroSection></HeroSection>
        <Category></Category>
        <TopDeals></TopDeals>
      </div>
      <section></section>
    </main>
  );
}

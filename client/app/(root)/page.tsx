import HeroSection from "@/components/home_component/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-medium my-3">Hi, Kandaliakiki</h1>
      <div className="p-1">
        <HeroSection></HeroSection>
      </div>
      <section></section>
    </main>
  );
}

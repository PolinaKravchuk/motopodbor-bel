import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Packages } from "@/components/Packages";
import { ToCheck } from "@/components/ToCheck";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main
        className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Packages />

        <ToCheck />
      </main>
      <Footer />
    </div>
  );
}

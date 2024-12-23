import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Tap from "@/sections/Tap";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <Projects/>
  <Tap/>
  </>
  );
}

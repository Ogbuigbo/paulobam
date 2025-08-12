import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";


export default function Home() {
  return (
  <div>
  
    <Hero/>
    <About/>
    <Services/>
    
  </div>

  );
}

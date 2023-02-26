import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/pages/home-page/Hero";
import Intro from "@/components/pages/home-page/Intro";
import ValueCard from "@/components/pages/home-page/ValueCard";
import QualityTeaching from "@/components/pages/home-page/QualityTeaching";
import Projects from "@/components/pages/home-page/Projects";
import Footer from "@/components/pages/home-page/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <section className="flex bg-comps-image bg-center bg-no-repeat bg-fixed bg-cover flex-col md:flex-row">
          <ValueCard
          animation="visionAnimation"
            background="bg-[#e3e3e3]"
            text="text-blacky"
            heading={"Vision"}
            paragraph={
              "To be leading developers and implementers of digital content and eLearning technologies in teaching and learning."
            }
          />
          <ValueCard
          animation="missionAnimation"
            text="text-[#E7E5E4] "
            background="bg-orange-500"
            heading={"Mission"}
            paragraph={
              "To provide an environment that is conducive to develop necessary expertise enriched by research driven solutions."
            }
          />
          <ValueCard
          animation="valueAnimation"
            text="text-blacky"
            background="bg-[#e3e3e3]"
            heading={"Value Statement"}
            paragraph={
              " We embrace the core values by fronting them as our foundation in action and decision-making. These core values are quality, timeliness, effectiveness and excellence"
            }
          />
        </section>
        <QualityTeaching />
        <Projects />
        <Footer />
      </main>
    </>
  );
}

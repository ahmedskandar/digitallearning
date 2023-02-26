import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Intro: React.FC = () => {

    const { ref, inView } = useInView();

    const [hasViewed, setHasViewed] = useState(false);

    useEffect(() => {
      if (inView) {
        setHasViewed(true);
      }
    }, [inView]);

  return (
    <section ref={ref} className="text-[#E7E5E4] w-[75%] mx-auto text-center m-20">
      <h1 className="text-2xl mb-5 font-bold md:text-3xl">About us</h1>
      <p className="introParagraphAnimation">
        @iLabAfrica’s Digital Learning Unit focuses on research and leveraging
        innovation in the area of ICT for Education. The goal is to use ICT
        effectively in teaching, creativity and delivery of educational content.
      </p>
    </section>
  );
};

export default Intro;
